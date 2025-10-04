/**
 * JavaScript Fundamentals for DSA - Functions and Scope
 * 
 * This file covers functions, scope, and closures - essential concepts
 * for implementing algorithms and data structures.
 */

// ============================================================================
// 1. FUNCTION DECLARATIONS
// ============================================================================

// Basic function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Function Declarations:");
console.log("Greet:", greet("Alice"));
console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 5));
console.log("Multiply with default:", multiply(4));
console.log("Sum:", sum(1, 2, 3, 4, 5));

// ============================================================================
// 2. FUNCTION EXPRESSIONS
// ============================================================================

// Anonymous function expression
const subtract = function(a, b) {
    return a - b;
};

// Named function expression
const divide = function division(a, b) {
    if (b === 0) {
        throw new Error("Division by zero!");
    }
    return a / b;
};

console.log("\nFunction Expressions:");
console.log("Subtract:", subtract(10, 3));
console.log("Divide:", divide(15, 3));

// ============================================================================
// 3. ARROW FUNCTIONS
// ============================================================================

// Basic arrow function
const square = (x) => x * x;

// Arrow function with multiple parameters
const power = (base, exponent) => {
    return Math.pow(base, exponent);
};

// Arrow function with single parameter (no parentheses needed)
const double = x => x * 2;

// Arrow function returning object (needs parentheses)
const createPoint = (x, y) => ({ x, y });

console.log("\nArrow Functions:");
console.log("Square:", square(4));
console.log("Power:", power(2, 3));
console.log("Double:", double(7));
console.log("Create Point:", createPoint(10, 20));

// ============================================================================
// 4. SCOPE - GLOBAL, FUNCTION, AND BLOCK
// ============================================================================

// Global scope
let globalVariable = "I'm global";

function demonstrateScope() {
    // Function scope
    let functionVariable = "I'm in function scope";
    
    if (true) {
        // Block scope
        let blockVariable = "I'm in block scope";
        var functionScopedVariable = "I'm function scoped (var)";
        
        console.log("Inside block:");
        console.log("Block variable:", blockVariable);
        console.log("Function scoped variable:", functionScopedVariable);
    }
    
    console.log("\nInside function:");
    console.log("Function variable:", functionVariable);
    console.log("Function scoped variable:", functionScopedVariable);
    console.log("Global variable:", globalVariable);
    // console.log("Block variable:", blockVariable); // Error: blockVariable is not defined
}

demonstrateScope();

console.log("\nOutside all scopes:");
console.log("Global variable:", globalVariable);
// console.log("Function variable:", functionVariable); // Error: functionVariable is not defined

// ============================================================================
// 5. CLOSURES
// ============================================================================

// Basic closure example
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("\nClosures - Counters:");
console.log("Counter1:", counter1()); // 1
console.log("Counter1:", counter1()); // 2
console.log("Counter2:", counter2()); // 1
console.log("Counter1:", counter1()); // 3

// Closure for creating private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
console.log("\nBank Account (Closure):");
console.log("Initial balance:", account.getBalance());
console.log("After deposit 500:", account.deposit(500));
console.log("After withdraw 200:", account.withdraw(200));
console.log("Final balance:", account.getBalance());

// ============================================================================
// 6. HIGHER-ORDER FUNCTIONS
// ============================================================================

// Function that takes another function as parameter
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Function that returns another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const numbers = [1, 2, 3, 4, 5];
const doubleOperation = createMultiplier(2);
const tripleOperation = createMultiplier(3);

console.log("\nHigher-Order Functions:");
console.log("Original numbers:", numbers);
console.log("Doubled:", applyOperation(numbers, doubleOperation));
console.log("Tripled:", applyOperation(numbers, tripleOperation));

// ============================================================================
// 7. RECURSION BASICS
// ============================================================================

// Simple recursive function
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Recursive function with memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log("\nRecursion Examples:");
console.log("Factorial of 5:", factorial(5));
console.log("Fibonacci of 10:", fibonacciMemo(10));

// ============================================================================
// 8. PRACTICAL DSA EXAMPLES
// ============================================================================

// Binary Search implementation
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Not found
    }
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Merge Sort implementation
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
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

console.log("\nDSA Examples:");
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

console.log("Binary Search for 7:", binarySearch(sortedArray, 7));
console.log("Binary Search for 6:", binarySearch(sortedArray, 6));
console.log("Merge Sort:", mergeSort(unsortedArray));

// ============================================================================
// 9. FUNCTION COMPOSITION
// ============================================================================

// Compose multiple functions
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const addOneThenMultiplyByTwo = compose(multiplyByTwo, addOne);

console.log("\nFunction Composition:");
console.log("Add 1 to 5:", addOne(5));
console.log("Multiply 5 by 2:", multiplyByTwo(5));
console.log("Add 1 then multiply by 2:", addOneThenMultiplyByTwo(5));

// ============================================================================
// 10. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("PRACTICE EXERCISES");
console.log("=".repeat(50));

// Exercise 1: Create a function that returns a function
function createValidator(min, max) {
    return function(value) {
        return value >= min && value <= max;
    };
}

const ageValidator = createValidator(18, 65);
console.log("Age 25 valid:", ageValidator(25));
console.log("Age 17 valid:", ageValidator(17));

// Exercise 2: Implement a simple cache
function createCache() {
    const cache = {};
    
    return {
        get: function(key) {
            return cache[key];
        },
        set: function(key, value) {
            cache[key] = value;
        },
        has: function(key) {
            return key in cache;
        }
    };
}

const cache = createCache();
cache.set("user1", "Alice");
console.log("Cache has user1:", cache.has("user1"));
console.log("Cache get user1:", cache.get("user1"));

// ============================================================================
// 11. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("KEY TAKEAWAYS");
console.log("=".repeat(50));

console.log(`
1. Functions are first-class citizens in JavaScript
2. Use const for function expressions to prevent reassignment
3. Arrow functions are great for short, simple functions
4. Scope determines variable accessibility
5. Closures allow functions to access variables from outer scope
6. Recursion is powerful but be mindful of stack overflow
7. Higher-order functions enable functional programming patterns
8. Function composition helps build complex operations from simple ones
`);

// ============================================================================
// 12. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Control Structures in 03-control-structures.js");
