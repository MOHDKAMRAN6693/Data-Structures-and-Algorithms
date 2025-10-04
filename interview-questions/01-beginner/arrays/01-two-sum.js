/**
 * Two Sum - LeetCode Easy
 * 
 * Problem: Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

// Solution 1: Brute Force - O(n²) time, O(1) space
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Solution 2: Hash Map - O(n) time, O(n) space
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return [];
}

// Test cases
console.log("=== Two Sum Tests ===");
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // []

/**
 * Interview Tips:
 * 1. Always clarify the problem (duplicates, negative numbers, etc.)
 * 2. Start with brute force, then optimize
 * 3. Explain your approach before coding
 * 4. Consider edge cases (empty array, no solution)
 * 5. Discuss time and space complexity
 */
