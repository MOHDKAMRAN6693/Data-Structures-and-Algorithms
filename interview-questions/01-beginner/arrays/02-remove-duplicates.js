/**
 * Remove Duplicates from Sorted Array - LeetCode Easy
 * 
 * Problem: Given a sorted array nums, remove the duplicates in-place such that 
 * each element appears only once and returns the new length.
 * 
 * Example:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 */

// Solution 1: Two Pointers - O(n) time, O(1) space
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1;
}

// Solution 2: Using Set (if not in-place) - O(n) time, O(n) space
function removeDuplicatesWithSet(nums) {
    const uniqueSet = new Set(nums);
    const uniqueArray = Array.from(uniqueSet);
    
    // Copy back to original array
    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }
    
    return uniqueArray.length;
}

// Test cases
console.log("=== Remove Duplicates Tests ===");
let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1); // 2, [1, 2, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2); // 5, [0, 1, 2, 3, 4, ...]

let nums3 = [1, 2, 3];
console.log(removeDuplicates(nums3), nums3); // 3, [1, 2, 3]

/**
 * Follow-up Questions:
 * 1. What if the array is not sorted?
 * 2. Can you do it with O(1) extra space?
 * 3. What's the time complexity of your solution?
 * 
 * Interview Tips:
 * 1. Clarify if array is sorted
 * 2. Ask about in-place modification
 * 3. Consider edge cases (empty array, single element)
 * 4. Explain the two-pointer technique
 */
