/**
 * JavaScript Fundamentals for DSA - Time and Space Complexity
 * 
 * This file covers Big O notation and complexity analysis
 * - essential for evaluating algorithm efficiency.
 */

// ============================================================================
// 1. BIG O NOTATION BASICS
// ============================================================================

console.log("Big O Notation - Time Complexity Examples");
console.log("=".repeat(50));

// O(1) - Constant Time
function getFirstElement(arr) {
    return arr[0]; // Always takes same time regardless of array size
}

// O(n) - Linear Time
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// O(n²) - Quadratic Time
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// O(log n) - Logarithmic Time
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// ============================================================================
// 2. COMPLEXITY COMPARISON
// ============================================================================

console.log("\nComplexity Comparison (n = 1000):");
console.log("O(1): 1 operation");
console.log("O(log n): ~10 operations");
console.log("O(n): 1,000 operations");
console.log("O(n log n): ~10,000 operations");
console.log("O(n²): 1,000,000 operations");
console.log("O(2ⁿ): 2^1000 operations (impossible!)");

// ============================================================================
// 3. SPACE COMPLEXITY EXAMPLES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Space Complexity Examples");
console.log("=".repeat(50));

// O(1) Space - In-place algorithm
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// O(n) Space - Creates new array
function reverseArrayNew(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// O(n) Space - Recursive call stack
function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

// ============================================================================
// 4. COMMON COMPLEXITY PATTERNS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Common Complexity Patterns");
console.log("=".repeat(50));

// O(1) - Constant operations
function constantOperations() {
    const a = 5;
    const b = 10;
    return a + b; // Always same number of operations
}

// O(n) - Single loop
function singleLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// O(n²) - Nested loops
function nestedLoops(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            count++;
        }
    }
    return count;
}

// O(log n) - Binary search pattern
function logarithmicPattern(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let operations = 0;
    
    while (left <= right) {
        operations++;
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(`Binary search operations: ${operations}`);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// ============================================================================
// 5. COMPLEXITY ANALYSIS TOOLS
// ============================================================================

// Performance measurement function
function measureTime(func, ...args) {
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();
    return {
        result,
        time: end - start
    };
}

// Complexity analyzer
function analyzeComplexity(func, testSizes, ...args) {
    console.log("\nComplexity Analysis:");
    console.log("Size\tTime(ms)\tRatio");
    console.log("-".repeat(30));
    
    let previousTime = null;
    
    for (let size of testSizes) {
        const testArgs = args.map(arg => 
            Array.isArray(arg) ? new Array(size).fill(0).map((_, i) => i) : arg
        );
        
        const { time } = measureTime(func, ...testArgs);
        const ratio = previousTime ? (time / previousTime).toFixed(2) : "-";
        
        console.log(`${size}\t${time.toFixed(4)}\t\t${ratio}`);
        previousTime = time;
    }
}

// ============================================================================
// 6. PRACTICAL EXAMPLES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Practical Examples");
console.log("=".repeat(50));

// Example 1: O(n) - Linear search
function linearSearchExample(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example 2: O(n log n) - Merge sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example 3: O(n²) - Selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// ============================================================================
// 7. OPTIMIZATION TECHNIQUES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Optimization Techniques");
console.log("=".repeat(50));

// Memoization - O(n) instead of O(2ⁿ)
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Tabulation - O(n) space, O(n) time
function fibonacciTab(n) {
    if (n <= 2) return 1;
    
    const dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Two-pointer technique - O(n) instead of O(n²)
function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

// ============================================================================
// 8. COMPLEXITY COMPARISON CHART
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Complexity Comparison Chart");
console.log("=".repeat(50));

const complexityChart = {
    "O(1)": "Constant - Best",
    "O(log n)": "Logarithmic - Excellent",
    "O(n)": "Linear - Good",
    "O(n log n)": "Linearithmic - Acceptable",
    "O(n²)": "Quadratic - Poor",
    "O(n³)": "Cubic - Very Poor",
    "O(2ⁿ)": "Exponential - Terrible",
    "O(n!)": "Factorial - Impossible"
};

console.log("Complexity\t\tPerformance");
console.log("-".repeat(40));
for (const [complexity, performance] of Object.entries(complexityChart)) {
    console.log(`${complexity}\t\t${performance}`);
}

// ============================================================================
// 9. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Practice Exercises");
console.log("=".repeat(50));

// Exercise 1: Analyze this function's complexity
function mysteryFunction(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            sum += arr[i] * arr[j];
        }
    }
    return sum;
}
// Answer: O(n²) time, O(1) space

// Exercise 2: Optimize this function
function inefficientSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                sum += arr[i];
            }
        }
    }
    return sum;
}

function optimizedSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log("Inefficient sum [1,2,3,4,5]:", inefficientSum([1, 2, 3, 4, 5]));
console.log("Optimized sum [1,2,3,4,5]:", optimizedSum([1, 2, 3, 4, 5]));

// ============================================================================
// 10. REAL-WORLD APPLICATIONS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Real-World Applications");
console.log("=".repeat(50));

// Database indexing - O(log n) vs O(n)
console.log("Database Operations:");
console.log("With index (B-tree): O(log n)");
console.log("Without index: O(n)");

// Web search algorithms
console.log("\nSearch Algorithms:");
console.log("Google PageRank: O(n log n)");
console.log("Linear search: O(n)");
console.log("Binary search: O(log n)");

// Social media algorithms
console.log("\nSocial Media:");
console.log("Feed generation: O(n log n)");
console.log("Friend suggestions: O(n²)");
console.log("Trending topics: O(n)");

// ============================================================================
// 11. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Key Takeaways");
console.log("=".repeat(50));

console.log(`
1. Big O describes worst-case scenario
2. Focus on the dominant term (drop constants and lower terms)
3. Space complexity is as important as time complexity
4. O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)
5. Use optimization techniques like memoization and tabulation
6. Always consider both time and space trade-offs
7. Practice analyzing code to identify complexity
8. Real-world performance depends on constants and input size
`);

// ============================================================================
// 12. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Recursion Basics in 06-recursion-basics.js");
