/**
 * JavaScript Fundamentals for DSA - Variables and Data Types
 * 
 * This file covers the basic building blocks of JavaScript programming
 * that are essential for understanding Data Structures and Algorithms.
 */

// ============================================================================
// 1. VARIABLE DECLARATIONS
// ============================================================================

// Three ways to declare variables in JavaScript
let mutableVariable = "I can be changed";
const immutableVariable = "I cannot be reassigned";
var oldStyleVariable = "Avoid using var in modern JavaScript";

// Demonstrating mutability
console.log("Before change:", mutableVariable);
mutableVariable = "I have been changed!";
console.log("After change:", mutableVariable);

// const prevents reassignment but allows mutation for objects/arrays
const myArray = [1, 2, 3];
myArray.push(4); // This is allowed
console.log("Array after push:", myArray);
// myArray = [5, 6, 7]; // This would cause an error

// ============================================================================
// 2. PRIMITIVE DATA TYPES
// ============================================================================

// Number - integers and floating point
let age = 25;
let price = 99.99;
let negativeNumber = -42;
let infinity = Infinity;
let notANumber = NaN;

console.log("Number examples:");
console.log("Age:", age, "Type:", typeof age);
console.log("Price:", price, "Type:", typeof price);
console.log("Infinity:", infinity, "Type:", typeof infinity);
console.log("NaN:", notANumber, "Type:", typeof notANumber);

// String - text data
let firstName = "John";
let lastName = 'Doe';
let templateLiteral = `Hello, ${firstName} ${lastName}!`;
let multilineString = `This is a
multiline string`;

console.log("\nString examples:");
console.log("First name:", firstName);
console.log("Template literal:", templateLiteral);
console.log("Multiline:", multilineString);

// Boolean - true or false
let isStudent = true;
let hasJob = false;
let isGreater = 10 > 5; // true

console.log("\nBoolean examples:");
console.log("Is student:", isStudent);
console.log("Has job:", hasJob);
console.log("10 > 5:", isGreater);

// Undefined and Null
let undefinedVariable; // undefined
let nullVariable = null; // null

console.log("\nUndefined and Null:");
console.log("Undefined variable:", undefinedVariable);
console.log("Null variable:", nullVariable);
console.log("Type of undefined:", typeof undefinedVariable);
console.log("Type of null:", typeof nullVariable);

// Symbol - unique identifier (ES6+)
let symbol1 = Symbol('description');
let symbol2 = Symbol('description');
console.log("\nSymbols:");
console.log("Symbol1:", symbol1);
console.log("Symbol2:", symbol2);
console.log("Are they equal?", symbol1 === symbol2); // false

// ============================================================================
// 3. REFERENCE DATA TYPES
// ============================================================================

// Object - key-value pairs
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "coding", "hiking"]
};

console.log("\nObject example:");
console.log("Person:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Hobbies:", person.hobbies);

// Array - ordered list of values
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "hello", true, { name: "test" }];
let emptyArray = [];

console.log("\nArray examples:");
console.log("Numbers:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

// Function - reusable code blocks
function greet(name) {
    return `Hello, ${name}!`;
}

let greetArrow = (name) => `Hello, ${name}!`;

console.log("\nFunction examples:");
console.log("Function call:", greet("World"));
console.log("Arrow function:", greetArrow("JavaScript"));

// ============================================================================
// 4. TYPE COERCION AND COMPARISON
// ============================================================================

console.log("\nType Coercion Examples:");
console.log("5 + '3' =", 5 + '3'); // "53" (string concatenation)
console.log("5 - '3' =", 5 - '3'); // 2 (numeric subtraction)
console.log("'5' == 5 =", '5' == 5); // true (loose equality)
console.log("'5' === 5 =", '5' === 5); // false (strict equality)

// ============================================================================
// 5. PRACTICAL EXAMPLES FOR DSA
// ============================================================================

// Example 1: Storing algorithm results
let algorithmResults = {
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    executionTime: 0.05,
    inputSize: 1000,
    isOptimal: true
};

console.log("\nAlgorithm Results:");
console.log(algorithmResults);

// Example 2: Array for storing data structure elements
let stackElements = [];
let queueElements = [];
let treeNodes = [];

console.log("\nData Structure Arrays:");
console.log("Stack elements:", stackElements);
console.log("Queue elements:", queueElements);
console.log("Tree nodes:", treeNodes);

// Example 3: Configuration object for algorithms
let sortingConfig = {
    algorithm: "mergeSort",
    ascending: true,
    stable: true,
    inPlace: false
};

console.log("\nSorting Configuration:");
console.log(sortingConfig);

// ============================================================================
// 6. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("PRACTICE EXERCISES");
console.log("=".repeat(50));

// Exercise 1: Create a student object
let student = {
    name: "Jane Smith",
    age: 22,
    grades: [85, 92, 78, 96],
    isGraduated: false
};

console.log("Student object:", student);

// Exercise 2: Create an array of algorithm names
let algorithms = ["Bubble Sort", "Quick Sort", "Merge Sort", "Heap Sort"];
console.log("Algorithms:", algorithms);

// Exercise 3: Create a configuration for a binary search
let binarySearchConfig = {
    array: [1, 3, 5, 7, 9, 11, 13, 15],
    target: 7,
    left: 0,
    right: 7
};

console.log("Binary Search Config:", binarySearchConfig);

// ============================================================================
// 7. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("KEY TAKEAWAYS");
console.log("=".repeat(50));

console.log(`
1. Use 'let' for variables that can change, 'const' for constants
2. JavaScript has 7 primitive types: number, string, boolean, undefined, null, symbol, bigint
3. Objects and arrays are reference types
4. Use === for strict equality comparison
5. Template literals (backticks) are great for string interpolation
6. Understanding data types is crucial for algorithm implementation
7. Objects are perfect for storing algorithm configurations and results
`);

// ============================================================================
// 8. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Functions and Scope in 02-functions-and-scope.js");
