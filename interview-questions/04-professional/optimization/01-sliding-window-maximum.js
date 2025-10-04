/**
 * Sliding Window Maximum - LeetCode Hard
 * 
 * Problem: You are given an array of integers nums, there is a sliding window 
 * of size k which is moving from the very left of the array to the very right. 
 * You can only see the k numbers in the window. Each time the sliding window 
 * moves right by one position. Return the max sliding window.
 * 
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 */

// Solution 1: Using Deque (Double-ended Queue) - O(n) time, O(k) space
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Store indices
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of current window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove indices whose corresponding values are smaller than current
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        
        // Add current index
        deque.push(i);
        
        // Add maximum to result (when window is complete)
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}

// Solution 2: Using Max Heap - O(n log k) time, O(k) space
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val, index) {
        this.heap.push({ val, index });
        this.heapifyUp();
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }
    
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].val >= this.heap[index].val) break;
            
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        while (true) {
            let maxIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            
            if (leftChild < this.heap.length && this.heap[leftChild].val > this.heap[maxIndex].val) {
                maxIndex = leftChild;
            }
            
            if (rightChild < this.heap.length && this.heap[rightChild].val > this.heap[maxIndex].val) {
                maxIndex = rightChild;
            }
            
            if (maxIndex === index) break;
            
            [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
            index = maxIndex;
        }
    }
}

function maxSlidingWindowHeap(nums, k) {
    const result = [];
    const maxHeap = new MaxHeap();
    
    // Initialize heap with first window
    for (let i = 0; i < k; i++) {
        maxHeap.push(nums[i], i);
    }
    
    result.push(maxHeap.peek().val);
    
    // Slide the window
    for (let i = k; i < nums.length; i++) {
        maxHeap.push(nums[i], i);
        
        // Remove elements outside current window
        while (maxHeap.peek() && maxHeap.peek().index <= i - k) {
            maxHeap.pop();
        }
        
        result.push(maxHeap.peek().val);
    }
    
    return result;
}

// Solution 3: Brute Force - O(n*k) time, O(1) space
function maxSlidingWindowBruteForce(nums, k) {
    const result = [];
    
    for (let i = 0; i <= nums.length - k; i++) {
        let max = nums[i];
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        result.push(max);
    }
    
    return result;
}

// Test cases
console.log("=== Sliding Window Maximum Tests ===");
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([1, -1], 1)); // [1, -1]
console.log(maxSlidingWindow([9, 11], 2)); // [11]
console.log(maxSlidingWindow([4, -2], 2)); // [4]

/**
 * Applications:
 * 1. Stock price analysis
 * 2. Network traffic monitoring
 * 3. Image processing
 * 4. Signal processing
 * 5. Real-time analytics
 * 
 * Interview Tips:
 * 1. Start with brute force approach
 * 2. Optimize using deque
 * 3. Discuss time and space complexity
 * 4. Handle edge cases
 * 5. Consider alternative approaches
 */
