/**
 * Design Twitter - System Design with DSA
 * 
 * Problem: Design a simplified version of Twitter with the following features:
 * 1. Post a tweet
 * 2. Follow/unfollow a user
 * 3. Get news feed (timeline) for a user
 * 4. Get user's own tweets
 * 
 * Requirements:
 * - Support millions of users
 * - Handle high read/write loads
 * - Real-time news feed generation
 * - Efficient storage and retrieval
 */

class Tweet {
    constructor(tweetId, userId, timestamp, content) {
        this.tweetId = tweetId;
        this.userId = userId;
        this.timestamp = timestamp;
        this.content = content;
    }
}

class User {
    constructor(userId) {
        this.userId = userId;
        this.following = new Set(); // Users this user follows
        this.followers = new Set(); // Users who follow this user
        this.tweets = []; // User's own tweets
    }
    
    follow(userId) {
        this.following.add(userId);
    }
    
    unfollow(userId) {
        this.following.delete(userId);
    }
    
    postTweet(tweetId, content, timestamp) {
        const tweet = new Tweet(tweetId, this.userId, timestamp, content);
        this.tweets.push(tweet);
    }
}

class Twitter {
    constructor() {
        this.users = new Map(); // userId -> User
        this.tweets = new Map(); // tweetId -> Tweet
        this.timeline = new Map(); // userId -> List of tweetIds
        this.timestamp = 0;
    }
    
    // Create a new user
    createUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, new User(userId));
            this.timeline.set(userId, []);
        }
    }
    
    // Post a tweet
    postTweet(userId, tweetId, content) {
        this.createUser(userId);
        this.timestamp++;
        
        const user = this.users.get(userId);
        user.postTweet(tweetId, content, this.timestamp);
        
        const tweet = new Tweet(tweetId, userId, this.timestamp, content);
        this.tweets.set(tweetId, tweet);
        
        // Add to user's timeline
        this.timeline.get(userId).unshift(tweetId);
        
        // Add to followers' timelines
        for (let followerId of user.followers) {
            this.timeline.get(followerId).unshift(tweetId);
        }
    }
    
    // Follow a user
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;
        
        this.createUser(followerId);
        this.createUser(followeeId);
        
        const follower = this.users.get(followerId);
        const followee = this.users.get(followeeId);
        
        follower.follow(followeeId);
        followee.followers.add(followerId);
        
        // Add followee's recent tweets to follower's timeline
        const followeeTweets = followee.tweets.slice(-10); // Last 10 tweets
        for (let tweet of followeeTweets) {
            this.timeline.get(followerId).unshift(tweet.tweetId);
        }
        
        // Sort timeline by timestamp
        this.timeline.get(followerId).sort((a, b) => {
            return this.tweets.get(b).timestamp - this.tweets.get(a).timestamp;
        });
    }
    
    // Unfollow a user
    unfollow(followerId, followeeId) {
        if (followerId === followeeId) return;
        
        if (!this.users.has(followerId) || !this.users.has(followeeId)) return;
        
        const follower = this.users.get(followerId);
        const followee = this.users.get(followeeId);
        
        follower.unfollow(followeeId);
        followee.followers.delete(followerId);
        
        // Remove followee's tweets from follower's timeline
        const timeline = this.timeline.get(followerId);
        const filteredTimeline = timeline.filter(tweetId => {
            const tweet = this.tweets.get(tweetId);
            return tweet.userId !== followeeId;
        });
        this.timeline.set(followerId, filteredTimeline);
    }
    
    // Get news feed (timeline)
    getNewsFeed(userId, limit = 10) {
        if (!this.users.has(userId)) return [];
        
        const timeline = this.timeline.get(userId) || [];
        const result = [];
        
        for (let i = 0; i < Math.min(limit, timeline.length); i++) {
            const tweetId = timeline[i];
            const tweet = this.tweets.get(tweetId);
            if (tweet) {
                result.push({
                    tweetId: tweet.tweetId,
                    userId: tweet.userId,
                    content: tweet.content,
                    timestamp: tweet.timestamp
                });
            }
        }
        
        return result;
    }
    
    // Get user's own tweets
    getUserTweets(userId, limit = 10) {
        if (!this.users.has(userId)) return [];
        
        const user = this.users.get(userId);
        const tweets = user.tweets.slice(-limit).reverse();
        
        return tweets.map(tweet => ({
            tweetId: tweet.tweetId,
            userId: tweet.userId,
            content: tweet.content,
            timestamp: tweet.timestamp
        }));
    }
}

// Test the Twitter system
console.log("=== Twitter System Design Test ===");
const twitter = new Twitter();

// Create users and post tweets
twitter.postTweet(1, 1, "Hello World!");
twitter.postTweet(1, 2, "This is my second tweet");
twitter.postTweet(2, 3, "User 2's first tweet");
twitter.postTweet(3, 4, "User 3's tweet");

// Follow relationships
twitter.follow(1, 2);
twitter.follow(1, 3);
twitter.follow(2, 1);

// Post more tweets
twitter.postTweet(2, 5, "Another tweet from user 2");
twitter.postTweet(3, 6, "Another tweet from user 3");

// Get news feeds
console.log("User 1's news feed:", twitter.getNewsFeed(1));
console.log("User 2's news feed:", twitter.getNewsFeed(2));
console.log("User 1's own tweets:", twitter.getUserTweets(1));

// Unfollow and check feed
twitter.unfollow(1, 2);
console.log("User 1's news feed after unfollowing user 2:", twitter.getNewsFeed(1));

/**
 * System Design Considerations:
 * 1. Database Design: Users, Tweets, Follows tables
 * 2. Caching: Redis for timelines
 * 3. Load Balancing: Distribute read/write operations
 * 4. Sharding: Partition by user ID
 * 5. Real-time: WebSocket for live updates
 * 6. Analytics: Track engagement metrics
 * 
 * Interview Tips:
 * 1. Start with basic requirements
 * 2. Discuss scalability challenges
 * 3. Consider different data structures
 * 4. Discuss trade-offs
 * 5. Think about real-world constraints
 */
