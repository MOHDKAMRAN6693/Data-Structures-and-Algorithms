/**
 * Basic Data Structures - Arrays and Strings
 * 
 * This file covers fundamental array and string operations
 * that are essential for data structure implementation.
 */

// ============================================================================
// 1. ARRAY FUNDAMENTALS
// ============================================================================

console.log("Array Fundamentals");
console.log("=".repeat(50));

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
// 6. STRING FUNDAMENTALS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("String Fundamentals");
console.log("=".repeat(50));

// String creation
const singleQuote = 'Hello World';
const doubleQuote = "Hello World";
const templateLiteral = `Hello ${"World"}`;
const stringConstructor = new String("Hello World");

console.log("String Creation:");
console.log("Single quote:", singleQuote);
console.log("Double quote:", doubleQuote);
console.log("Template literal:", templateLiteral);
console.log("String constructor:", stringConstructor);

// ============================================================================
// 7. STRING ACCESS AND MODIFICATION
// ============================================================================

// Accessing characters
const str = "Hello World";
console.log("\nString Access:");
console.log("First character:", str[0]);
console.log("Last character:", str[str.length - 1]);
console.log("String length:", str.length);

// String methods
console.log("\nString Methods:");
console.log("To uppercase:", str.toUpperCase());
console.log("To lowercase:", str.toLowerCase());
console.log("Substring (0,5):", str.substring(0, 5));
console.log("Slice (0,5):", str.slice(0, 5));
console.log("Index of 'World':", str.indexOf("World"));
console.log("Last index of 'l':", str.lastIndexOf("l"));

// ============================================================================
// 8. STRING MANIPULATION
// ============================================================================

// Split and join
const sentence = "Hello World How Are You";
const words = sentence.split(" ");
const joined = words.join("-");

console.log("\nString Manipulation:");
console.log("Original:", sentence);
console.log("Split by space:", words);
console.log("Joined with '-':", joined);

// Replace
const replaced = sentence.replace("World", "JavaScript");
console.log("Replace 'World' with 'JavaScript':", replaced);

// Trim
const spacedString = "  Hello World  ";
console.log("Trimmed:", spacedString.trim());

// ============================================================================
// 9. ARRAY ALGORITHMS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Array Algorithms");
console.log("=".repeat(50));

// Linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Binary search (requires sorted array)
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

// Two-pointer technique
function twoSum(arr, target) {
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

console.log("Linear search for 3:", linearSearch([1, 2, 3, 4, 5], 3));
console.log("Binary search for 3:", binarySearch([1, 2, 3, 4, 5], 3));
console.log("Two sum [1,2,3,4,5] target 6:", twoSum([1, 2, 3, 4, 5], 6));

// ============================================================================
// 10. STRING ALGORITHMS
// ============================================================================

// Check palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Count vowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Find longest word
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log("\nString Algorithms:");
console.log("Is 'racecar' palindrome:", isPalindrome("racecar"));
console.log("Is 'hello' palindrome:", isPalindrome("hello"));
console.log("Vowels in 'hello':", countVowels("hello"));
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Longest word in 'hello world':", findLongestWord("hello world"));

// ============================================================================
// 11. COMMON PATTERNS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Common Patterns");
console.log("=".repeat(50));

// Sliding window
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

// Frequency counter
function getFrequency(arr) {
    const frequency = {};
    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    return frequency;
}

// Remove duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log("Max sum subarray [1,4,2,10,23,3,1,0,20] k=4:", 
    maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log("Frequency of [1,2,2,3,3,3]:", getFrequency([1, 2, 2, 3, 3, 3]));
console.log("Remove duplicates [1,2,2,3,3,4]:", removeDuplicates([1, 2, 2, 3, 3, 4]));

// ============================================================================
// 12. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Practice Exercises");
console.log("=".repeat(50));

// Exercise 1: Find intersection of two arrays
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

// Exercise 2: Check if two strings are anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const freq1 = {};
    const freq2 = {};
    
    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }
    
    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }
    
    for (let char in freq1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }
    
    return true;
}

// Exercise 3: Find missing number in array
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log("Intersection [1,2,3,4] and [3,4,5,6]:", intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("Are 'listen' and 'silent' anagrams:", areAnagrams("listen", "silent"));
console.log("Are 'hello' and 'world' anagrams:", areAnagrams("hello", "world"));
console.log("Missing number in [1,2,4,5] (n=5):", findMissingNumber([1, 2, 4, 5], 5));

// ============================================================================
// 13. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Key Takeaways");
console.log("=".repeat(50));

console.log(`
1. Arrays are ordered collections with O(1) access time
2. Strings are immutable in JavaScript
3. Use appropriate methods for mutating vs non-mutating operations
4. Two-pointer technique is powerful for array problems
5. Sliding window is efficient for subarray problems
6. Frequency counters help with counting problems
7. Set operations are useful for uniqueness
8. Practice with different array and string patterns
`);

// ============================================================================
// 14. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Objects and Maps in 02-objects-and-maps.js");
