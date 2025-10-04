/**
 * JavaScript Fundamentals for DSA - Arrays and Objects
 * 
 * This file covers array and object manipulation techniques
 * essential for implementing data structures and algorithms.
 */

// ============================================================================
// 1. ARRAY BASICS
// ============================================================================

// Array creation and initialization
const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, "hello", true, { name: "test" }];
const arrayFromConstructor = new Array(5); // Creates array with 5 empty slots
const arrayWithFill = new Array(5).fill(0); // Creates [0, 0, 0, 0, 0]

console.log("Array Creation:");
console.log("Empty array:", emptyArray);
console.log("Numbers:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Array constructor:", arrayFromConstructor);
console.log("Array with fill:", arrayWithFill);

// ============================================================================
// 2. ARRAY ACCESS AND MODIFICATION
// ============================================================================

// Accessing elements
console.log("\nArray Access:");
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);
console.log("Array length:", numbers.length);

// Modifying elements
const mutableArray = [1, 2, 3, 4, 5];
mutableArray[0] = 10;
mutableArray.push(6);
mutableArray.pop();
mutableArray.unshift(0);
mutableArray.shift();

console.log("\nArray Modification:");
console.log("Modified array:", mutableArray);

// ============================================================================
// 3. ARRAY METHODS - MUTATING
// ============================================================================

// push() - adds to end
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack after push:", stack);

// pop() - removes from end
const popped = stack.pop();
console.log("Popped element:", popped);
console.log("Stack after pop:", stack);

// unshift() - adds to beginning
const queue = [];
queue.unshift("first");
queue.unshift("second");
console.log("Queue after unshift:", queue);

// shift() - removes from beginning
const shifted = queue.shift();
console.log("Shifted element:", shifted);
console.log("Queue after shift:", queue);

// splice() - adds/removes elements
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "inserted"); // Remove 1 element at index 2, insert "inserted"
console.log("After splice:", arr);

// ============================================================================
// 4. ARRAY METHODS - NON-MUTATING
// ============================================================================

const originalArray = [1, 2, 3, 4, 5];

// slice() - creates new array
const sliced = originalArray.slice(1, 4);
console.log("\nNon-mutating methods:");
console.log("Original:", originalArray);
console.log("Sliced [1,4):", sliced);

// concat() - combines arrays
const combined = originalArray.concat([6, 7, 8]);
console.log("Concatenated:", combined);

// join() - converts to string
const joined = originalArray.join("-");
console.log("Joined with '-':", joined);

// ============================================================================
// 5. ARRAY ITERATION METHODS
// ============================================================================

const data = [1, 2, 3, 4, 5];

// forEach() - executes function for each element
console.log("\nIteration Methods:");
console.log("forEach - doubling each element:");
data.forEach((num, index) => {
    console.log(`Index ${index}: ${num * 2}`);
});

// map() - creates new array with transformed elements
const doubled = data.map(num => num * 2);
console.log("Mapped (doubled):", doubled);

// filter() - creates new array with filtered elements
const evens = data.filter(num => num % 2 === 0);
console.log("Filtered (evens):", evens);

// reduce() - reduces array to single value
const sum = data.reduce((acc, num) => acc + num, 0);
console.log("Reduced (sum):", sum);

// find() - finds first element matching condition
const found = data.find(num => num > 3);
console.log("Find (>3):", found);

// some() - checks if any element matches condition
const hasEven = data.some(num => num % 2 === 0);
console.log("Some (has even):", hasEven);

// every() - checks if all elements match condition
const allPositive = data.every(num => num > 0);
console.log("Every (all positive):", allPositive);

// ============================================================================
// 6. OBJECT BASICS
// ============================================================================

// Object creation
const emptyObject = {};
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    isEmployed: true,
    hobbies: ["reading", "coding", "hiking"]
};

console.log("\nObject Basics:");
console.log("Empty object:", emptyObject);
console.log("Person object:", person);

// ============================================================================
// 7. OBJECT ACCESS AND MODIFICATION
// ============================================================================

// Accessing properties
console.log("\nObject Access:");
console.log("Name (dot notation):", person.name);
console.log("Age (bracket notation):", person["age"]);
console.log("Hobbies:", person.hobbies);

// Modifying properties
person.age = 31;
person["city"] = "San Francisco";
person.newProperty = "I'm new";

console.log("\nObject Modification:");
console.log("Updated person:", person);

// ============================================================================
// 8. OBJECT METHODS
// ============================================================================

// Object.keys() - gets all keys
const keys = Object.keys(person);
console.log("\nObject Methods:");
console.log("Keys:", keys);

// Object.values() - gets all values
const values = Object.values(person);
console.log("Values:", values);

// Object.entries() - gets key-value pairs
const entries = Object.entries(person);
console.log("Entries:", entries);

// Object.hasOwnProperty() - checks if property exists
const hasName = person.hasOwnProperty("name");
const hasSalary = person.hasOwnProperty("salary");
console.log("Has name:", hasName);
console.log("Has salary:", hasSalary);

// ============================================================================
// 9. OBJECT ITERATION
// ============================================================================

console.log("\nObject Iteration:");

// for...in loop
console.log("for...in loop:");
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Object.entries() with forEach
console.log("\nObject.entries() with forEach:");
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// ============================================================================
// 10. PRACTICAL DSA EXAMPLES
// ============================================================================

// Stack implementation using array
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

// Queue implementation using array
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
    
    front() {
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

console.log("\nDSA Examples - Stack:");
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack size:", stack.size());
console.log("Stack peek:", stack.peek());
console.log("Stack pop:", stack.pop());
console.log("Stack after pop:", stack.items);

console.log("\nDSA Examples - Queue:");
const queue = new Queue();
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
console.log("Queue size:", queue.size());
console.log("Queue front:", queue.front());
console.log("Queue dequeue:", queue.dequeue());
console.log("Queue after dequeue:", queue.items);

// ============================================================================
// 11. ARRAY ALGORITHMS
// ============================================================================

// Two-pointer technique
function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return null;
}

// Sliding window technique
function maxSumSubarray(arr, k) {
    if (arr.length < k) return null;
    
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

console.log("\nArray Algorithms:");
console.log("Two sum [2,7,11,15] target 9:", twoSum([2, 7, 11, 15], 9));
console.log("Max sum subarray [1,4,2,10,23,3,1,0,20] k=4:", 
    maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// ============================================================================
// 12. OBJECT ALGORITHMS
// ============================================================================

// Frequency counter
function getFrequency(arr) {
    const frequency = {};
    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    return frequency;
}

// Group by function
function groupBy(arr, key) {
    return arr.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}

console.log("\nObject Algorithms:");
console.log("Frequency of [1,2,2,3,3,3]:", getFrequency([1, 2, 2, 3, 3, 3]));

const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "David", grade: "C" }
];
console.log("Group by grade:", groupBy(students, "grade"));

// ============================================================================
// 13. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("PRACTICE EXERCISES");
console.log("=".repeat(50));

// Exercise 1: Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Exercise 2: Find intersection of two arrays
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

// Exercise 3: Flatten nested array
function flattenArray(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

console.log("Remove duplicates [1,2,2,3,3,4]:", removeDuplicates([1, 2, 2, 3, 3, 4]));
console.log("Intersection [1,2,3,4] and [3,4,5,6]:", intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("Flatten [1,[2,3],[4,[5,6]]]:", flattenArray([1, [2, 3], [4, [5, 6]]]));

// ============================================================================
// 14. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("KEY TAKEAWAYS");
console.log("=".repeat(50));

console.log(`
1. Arrays are ordered collections, objects are key-value pairs
2. Use array methods like map, filter, reduce for functional programming
3. Objects are great for storing structured data
4. Understand the difference between mutating and non-mutating methods
5. Practice with two-pointer and sliding window techniques
6. Use Map and Set for efficient lookups and unique values
7. Master array and object iteration patterns
8. These are the building blocks for all data structures
`);

// ============================================================================
// 15. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Time and Space Complexity in 05-complexity-analysis.js");
