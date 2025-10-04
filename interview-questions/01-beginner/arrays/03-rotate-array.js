/**
 * Rotate Array - LeetCode Medium
 * 
 * Problem: Given an array, rotate the array to the right by k steps, 
 * where k is non-negative.
 * 
 * Example:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 */

// Solution 1: Using Extra Array - O(n) time, O(n) space
function rotateArrayExtra(nums, k) {
    const n = nums.length;
    k = k % n; // Handle k > n
    
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = nums[i];
    }
    
    // Copy back to original array
    for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }
}

// Solution 2: Reverse Method - O(n) time, O(1) space
function rotateArray(nums, k) {
    const n = nums.length;
    k = k % n;
    
    // Reverse entire array
    reverse(nums, 0, n - 1);
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    // Reverse remaining elements
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Solution 3: Cyclic Replacements - O(n) time, O(1) space
function rotateArrayCyclic(nums, k) {
    const n = nums.length;
    k = k % n;
    let count = 0;
    
    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];
        
        do {
            const next = (current + k) % n;
            [nums[next], prev] = [prev, nums[next]];
            current = next;
            count++;
        } while (start !== current);
    }
}

// Test cases
console.log("=== Rotate Array Tests ===");
let nums1 = [1, 2, 3, 4, 5, 6, 7];
rotateArray(nums1, 3);
console.log(nums1); // [5, 6, 7, 1, 2, 3, 4]

let nums2 = [-1, -100, 3, 99];
rotateArray(nums2, 2);
console.log(nums2); // [3, 99, -1, -100]

let nums3 = [1, 2];
rotateArray(nums3, 1);
console.log(nums3); // [2, 1]

/**
 * Interview Tips:
 * 1. Handle edge cases (k > n, k = 0, empty array)
 * 2. Explain different approaches and their trade-offs
 * 3. Start with simple solution, then optimize
 * 4. Consider space constraints
 * 5. Test with different values of k
 */
