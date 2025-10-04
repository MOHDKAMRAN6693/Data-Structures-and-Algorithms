/**
 * Longest Common Subsequence (LCS) - LeetCode Medium
 * 
 * Problem: Given two strings text1 and text2, return the length of their 
 * longest common subsequence. If there is no common subsequence, return 0.
 * 
 * Example:
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 */

// Solution 1: Recursive with Memoization - O(m*n) time, O(m*n) space
function longestCommonSubsequenceMemo(text1, text2) {
    const memo = new Map();
    
    function lcs(i, j) {
        if (i === text1.length || j === text2.length) return 0;
        
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);
        
        let result;
        if (text1[i] === text2[j]) {
            result = 1 + lcs(i + 1, j + 1);
        } else {
            result = Math.max(lcs(i + 1, j), lcs(i, j + 1));
        }
        
        memo.set(key, result);
        return result;
    }
    
    return lcs(0, 0);
}

// Solution 2: Bottom-up DP - O(m*n) time, O(m*n) space
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

// Solution 3: Space Optimized DP - O(m*n) time, O(min(m,n)) space
function longestCommonSubsequenceOptimized(text1, text2) {
    if (text1.length < text2.length) {
        [text1, text2] = [text2, text1];
    }
    
    const m = text1.length;
    const n = text2.length;
    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = 1 + prev[j - 1];
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        [prev, curr] = [curr, prev];
    }
    
    return prev[n];
}

// Solution 4: Get the actual LCS string
function getLCSString(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Build DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Reconstruct LCS
    let i = m, j = n;
    const lcs = [];
    
    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs.unshift(text1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs.join('');
}

// Test cases
console.log("=== Longest Common Subsequence Tests ===");
console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv")); // 1

console.log("\n=== LCS String ===");
console.log(getLCSString("abcde", "ace")); // "ace"
console.log(getLCSString("ABCDGH", "AEDFHR")); // "ADH"

/**
 * Applications:
 * 1. DNA sequence alignment
 * 2. Version control systems (diff)
 * 3. Plagiarism detection
 * 4. Text similarity
 * 5. Bioinformatics
 * 
 * Interview Tips:
 * 1. Start with recursive approach
 * 2. Add memoization to optimize
 * 3. Convert to bottom-up DP
 * 4. Optimize space if possible
 * 5. Discuss applications
 */
