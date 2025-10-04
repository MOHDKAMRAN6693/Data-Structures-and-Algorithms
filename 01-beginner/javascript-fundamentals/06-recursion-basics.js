/**
 * JavaScript Fundamentals for DSA - Recursion Basics
 * 
 * This file covers recursion fundamentals and common patterns
 * essential for implementing recursive algorithms.
 */

// ============================================================================
// 1. RECURSION FUNDAMENTALS
// ============================================================================

console.log("Recursion Basics");
console.log("=".repeat(50));

// Basic recursive function structure
function recursiveFunction(n) {
    // Base case - stops the recursion
    if (n <= 0) {
        return 1;
    }
    
    // Recursive case - calls itself with modified parameters
    return n * recursiveFunction(n - 1);
}

console.log("Recursive function (5):", recursiveFunction(5));

// ============================================================================
// 2. FACTORIAL EXAMPLE
// ============================================================================

// Iterative factorial
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Recursive factorial
function factorialRecursive(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorialRecursive(n - 1);
}

console.log("\nFactorial Examples:");
console.log("Iterative factorial(5):", factorialIterative(5));
console.log("Recursive factorial(5):", factorialRecursive(5));

// ============================================================================
// 3. FIBONACCI SEQUENCE
// ============================================================================

// Naive recursive Fibonacci (O(2ⁿ) - very inefficient)
function fibonacciNaive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
}

// Memoized Fibonacci (O(n) time, O(n) space)
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Iterative Fibonacci (O(n) time, O(1) space)
function fibonacciIterative(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log("\nFibonacci Examples:");
console.log("Naive fibonacci(10):", fibonacciNaive(10));
console.log("Memoized fibonacci(10):", fibonacciMemo(10));
console.log("Iterative fibonacci(10):", fibonacciIterative(10));

// ============================================================================
// 4. RECURSION WITH ARRAYS
// ============================================================================

// Sum of array elements
function sumArrayRecursive(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    return arr[index] + sumArrayRecursive(arr, index + 1);
}

// Find maximum element
function findMaxRecursive(arr, index = 0, max = -Infinity) {
    if (index >= arr.length) {
        return max;
    }
    return findMaxRecursive(arr, index + 1, Math.max(max, arr[index]));
}

// Count occurrences
function countOccurrencesRecursive(arr, target, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    const currentCount = arr[index] === target ? 1 : 0;
    return currentCount + countOccurrencesRecursive(arr, target, index + 1);
}

console.log("\nArray Recursion Examples:");
const testArray = [1, 3, 5, 3, 7, 3, 9];
console.log("Sum of array:", sumArrayRecursive(testArray));
console.log("Max element:", findMaxRecursive(testArray));
console.log("Count of 3:", countOccurrencesRecursive(testArray, 3));

// ============================================================================
// 5. STRING RECURSION
// ============================================================================

// Reverse string
function reverseStringRecursive(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[str.length - 1] + reverseStringRecursive(str.slice(0, -1));
}

// Check palindrome
function isPalindromeRecursive(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindromeRecursive(str.slice(1, -1));
}

// Count vowels
function countVowelsRecursive(str, index = 0) {
    if (index >= str.length) {
        return 0;
    }
    const vowels = 'aeiouAEIOU';
    const currentCount = vowels.includes(str[index]) ? 1 : 0;
    return currentCount + countVowelsRecursive(str, index + 1);
}

console.log("\nString Recursion Examples:");
console.log("Reverse 'hello':", reverseStringRecursive("hello"));
console.log("Is 'racecar' palindrome:", isPalindromeRecursive("racecar"));
console.log("Is 'hello' palindrome:", isPalindromeRecursive("hello"));
console.log("Vowels in 'hello':", countVowelsRecursive("hello"));

// ============================================================================
// 6. TREE-LIKE RECURSION
// ============================================================================

// Binary tree node structure
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Tree traversal - Preorder (Root, Left, Right)
function preorderTraversal(node, result = []) {
    if (node === null) {
        return result;
    }
    
    result.push(node.value);
    preorderTraversal(node.left, result);
    preorderTraversal(node.right, result);
    
    return result;
}

// Tree traversal - Inorder (Left, Root, Right)
function inorderTraversal(node, result = []) {
    if (node === null) {
        return result;
    }
    
    inorderTraversal(node.left, result);
    result.push(node.value);
    inorderTraversal(node.right, result);
    
    return result;
}

// Tree traversal - Postorder (Left, Right, Root)
function postorderTraversal(node, result = []) {
    if (node === null) {
        return result;
    }
    
    postorderTraversal(node.left, result);
    postorderTraversal(node.right, result);
    result.push(node.value);
    
    return result;
}

// Create a sample tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("\nTree Traversal Examples:");
console.log("Preorder:", preorderTraversal(root));
console.log("Inorder:", inorderTraversal(root));
console.log("Postorder:", postorderTraversal(root));

// ============================================================================
// 7. DIVIDE AND CONQUER
// ============================================================================

// Binary search (recursive)
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, left, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
}

// Merge sort (recursive)
function mergeSortRecursive(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSortRecursive(arr.slice(0, mid));
    const right = mergeSortRecursive(arr.slice(mid));
    
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

console.log("\nDivide and Conquer Examples:");
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Binary search for 7:", binarySearchRecursive(sortedArray, 7));
console.log("Binary search for 6:", binarySearchRecursive(sortedArray, 6));
console.log("Merge sort:", mergeSortRecursive(unsortedArray));

// ============================================================================
// 8. BACKTRACKING
// ============================================================================

// Generate all permutations
function generatePermutations(arr) {
    const result = [];
    
    function backtrack(current) {
        if (current.length === arr.length) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < arr.length; i++) {
            if (!current.includes(arr[i])) {
                current.push(arr[i]);
                backtrack(current);
                current.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
}

// Generate all subsets
function generateSubsets(arr) {
    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]);
        
        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

console.log("\nBacktracking Examples:");
console.log("Permutations of [1,2,3]:", generatePermutations([1, 2, 3]));
console.log("Subsets of [1,2,3]:", generateSubsets([1, 2, 3]));

// ============================================================================
// 9. RECURSION OPTIMIZATION
// ============================================================================

// Tail recursion optimization
function factorialTailRecursive(n, accumulator = 1) {
    if (n <= 1) {
        return accumulator;
    }
    return factorialTailRecursive(n - 1, n * accumulator);
}

// Memoization for expensive recursive calls
function fibonacciMemoized(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    return memo[n];
}

console.log("\nRecursion Optimization:");
console.log("Tail recursive factorial(5):", factorialTailRecursive(5));
console.log("Memoized fibonacci(50):", fibonacciMemoized(50));

// ============================================================================
// 10. COMMON RECURSION PATTERNS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Common Recursion Patterns");
console.log("=".repeat(50));

// Pattern 1: Accumulator pattern
function sumAccumulator(arr, index = 0, sum = 0) {
    if (index >= arr.length) {
        return sum;
    }
    return sumAccumulator(arr, index + 1, sum + arr[index]);
}

// Pattern 2: Divide and conquer
function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    
    const half = power(base, Math.floor(exponent / 2));
    return exponent % 2 === 0 ? half * half : half * half * base;
}

// Pattern 3: Tree recursion
function countPaths(m, n) {
    if (m === 1 || n === 1) return 1;
    return countPaths(m - 1, n) + countPaths(m, n - 1);
}

console.log("Sum with accumulator:", sumAccumulator([1, 2, 3, 4, 5]));
console.log("Power 2^10:", power(2, 10));
console.log("Paths in 3x3 grid:", countPaths(3, 3));

// ============================================================================
// 11. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Practice Exercises");
console.log("=".repeat(50));

// Exercise 1: Tower of Hanoi
function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    
    towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, destination, source);
}

console.log("Tower of Hanoi (3 disks):");
towerOfHanoi(3, 'A', 'C', 'B');

// Exercise 2: Greatest Common Divisor
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

console.log("\nGCD of 48 and 18:", gcd(48, 18));

// Exercise 3: Check if number is prime
function isPrime(n, divisor = 2) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % divisor === 0) return false;
    if (divisor * divisor > n) return true;
    return isPrime(n, divisor + 1);
}

console.log("Is 17 prime:", isPrime(17));
console.log("Is 15 prime:", isPrime(15));

// ============================================================================
// 12. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Key Takeaways");
console.log("=".repeat(50));

console.log(`
1. Every recursive function needs a base case to stop recursion
2. Recursive case should move toward the base case
3. Use memoization to optimize repeated calculations
4. Tail recursion can be optimized by JavaScript engines
5. Divide and conquer is a powerful recursive pattern
6. Backtracking is useful for generating combinations/permutations
7. Tree recursion is common in tree and graph algorithms
8. Always consider stack overflow for deep recursion
9. Sometimes iterative solutions are more efficient
10. Practice with different recursive patterns
`);

// ============================================================================
// 13. NEXT STEPS
// ============================================================================

console.log("\nNext: Move to Basic Data Structures in ../basic-data-structures/");
