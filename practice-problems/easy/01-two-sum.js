/**
 * Easy Practice Problems - Two Sum
 * 
 * Problem: Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

// ============================================================================
// SOLUTION 1: BRUTE FORCE - O(n²) time, O(1) space
// ============================================================================

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

// ============================================================================
// SOLUTION 2: HASH MAP - O(n) time, O(n) space
// ============================================================================

function twoSumHashMap(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// ============================================================================
// SOLUTION 3: TWO POINTERS (for sorted array) - O(n log n) time, O(1) space
// ============================================================================

function twoSumTwoPointers(nums, target) {
    // Create array of [value, originalIndex] pairs
    const indexedNums = nums.map((value, index) => [value, index]);
    
    // Sort by value
    indexedNums.sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = indexedNums.length - 1;
    
    while (left < right) {
        const sum = indexedNums[left][0] + indexedNums[right][0];
        
        if (sum === target) {
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

// ============================================================================
// TEST CASES
// ============================================================================

function runTests() {
    console.log("Two Sum - Test Cases");
    console.log("=".repeat(50));
    
    const testCases = [
        {
            nums: [2, 7, 11, 15],
            target: 9,
            expected: [0, 1]
        },
        {
            nums: [3, 2, 4],
            target: 6,
            expected: [1, 2]
        },
        {
            nums: [3, 3],
            target: 6,
            expected: [0, 1]
        },
        {
            nums: [1, 2, 3, 4, 5],
            target: 8,
            expected: [2, 4]
        },
        {
            nums: [1, 2, 3, 4, 5],
            target: 10,
            expected: []
        }
    ];
    
    testCases.forEach((testCase, index) => {
        console.log(`\nTest Case ${index + 1}:`);
        console.log(`Input: nums = ${JSON.stringify(testCase.nums)}, target = ${testCase.target}`);
        
        const result1 = twoSumBruteForce(testCase.nums, testCase.target);
        const result2 = twoSumHashMap(testCase.nums, testCase.target);
        const result3 = twoSumTwoPointers(testCase.nums, testCase.target);
        
        console.log(`Brute Force Result: ${JSON.stringify(result1)}`);
        console.log(`HashMap Result: ${JSON.stringify(result2)}`);
        console.log(`Two Pointers Result: ${JSON.stringify(result3)}`);
        console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
        
        const isCorrect1 = JSON.stringify(result1.sort()) === JSON.stringify(testCase.expected.sort());
        const isCorrect2 = JSON.stringify(result2.sort()) === JSON.stringify(testCase.expected.sort());
        const isCorrect3 = JSON.stringify(result3.sort()) === JSON.stringify(testCase.expected.sort());
        
        console.log(`Brute Force: ${isCorrect1 ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`HashMap: ${isCorrect2 ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`Two Pointers: ${isCorrect3 ? '✅ PASS' : '❌ FAIL'}`);
    });
}

// ============================================================================
// PERFORMANCE COMPARISON
// ============================================================================

function performanceComparison() {
    console.log("\n" + "=".repeat(50));
    console.log("Performance Comparison");
    console.log("=".repeat(50));
    
    // Generate test data
    const sizes = [100, 1000, 10000];
    const testData = sizes.map(size => {
        const nums = Array.from({ length: size }, (_, i) => i);
        const target = size - 1; // Target that exists
        return { nums, target };
    });
    
    console.log("Array Size\tBrute Force\tHashMap\t\tTwo Pointers");
    console.log("-".repeat(60));
    
    testData.forEach(({ nums, target }) => {
        const size = nums.length;
        
        // Measure brute force
        const start1 = performance.now();
        twoSumBruteForce(nums, target);
        const end1 = performance.now();
        const time1 = (end1 - start1).toFixed(4);
        
        // Measure hash map
        const start2 = performance.now();
        twoSumHashMap(nums, target);
        const end2 = performance.now();
        const time2 = (end2 - start2).toFixed(4);
        
        // Measure two pointers
        const start3 = performance.now();
        twoSumTwoPointers(nums, target);
        const end3 = performance.now();
        const time3 = (end3 - start3).toFixed(4);
        
        console.log(`${size}\t\t${time1}ms\t\t${time2}ms\t\t${time3}ms`);
    });
}

// ============================================================================
// ALTERNATIVE PROBLEMS
// ============================================================================

// Two Sum II - Input array is sorted
function twoSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

// Three Sum
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Key Takeaways");
console.log("=".repeat(50));

console.log(`
1. Brute Force: O(n²) time, O(1) space - Simple but inefficient
2. HashMap: O(n) time, O(n) space - Best for unsorted arrays
3. Two Pointers: O(n log n) time, O(1) space - Good for sorted arrays
4. Choose solution based on constraints and requirements
5. Consider space vs time trade-offs
6. Practice different approaches to build intuition
`);

// ============================================================================
// RUN TESTS
// ============================================================================

runTests();
performanceComparison();

console.log("\nAlternative Problems:");
console.log("Two Sum Sorted [2,7,11,15] target 9:", twoSumSorted([2, 7, 11, 15], 9));
console.log("Three Sum [-1,0,1,2,-1,-4]:", threeSum([-1, 0, 1, 2, -1, -4]));
