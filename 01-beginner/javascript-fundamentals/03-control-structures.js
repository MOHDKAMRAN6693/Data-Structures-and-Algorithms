/**
 * JavaScript Fundamentals for DSA - Control Structures
 * 
 * This file covers conditional statements, loops, and control flow
 * - essential for implementing algorithms and data structures.
 */

// ============================================================================
// 1. CONDITIONAL STATEMENTS
// ============================================================================

// Basic if statement
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
}

// if-else statement
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Ternary operator
function getStatus(isActive) {
    return isActive ? "Online" : "Offline";
}

console.log("Conditional Statements:");
console.log("Age 20:", checkAge(20));
console.log("Age 16:", checkAge(16));
console.log("Score 85:", getGrade(85));
console.log("Score 45:", getGrade(45));
console.log("Active user:", getStatus(true));
console.log("Inactive user:", getStatus(false));

// ============================================================================
// 2. SWITCH STATEMENTS
// ============================================================================

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day";
    }
}

function getAlgorithmComplexity(algorithm) {
    switch (algorithm) {
        case "bubbleSort":
        case "selectionSort":
        case "insertionSort":
            return "O(n²)";
        case "mergeSort":
        case "heapSort":
            return "O(n log n)";
        case "quickSort":
            return "O(n log n) average, O(n²) worst";
        case "linearSearch":
            return "O(n)";
        case "binarySearch":
            return "O(log n)";
        default:
            return "Unknown complexity";
    }
}

console.log("\nSwitch Statements:");
console.log("Day 3:", getDayName(3));
console.log("Day 8:", getDayName(8));
console.log("Bubble Sort complexity:", getAlgorithmComplexity("bubbleSort"));
console.log("Binary Search complexity:", getAlgorithmComplexity("binarySearch"));

// ============================================================================
// 3. FOR LOOPS
// ============================================================================

// Basic for loop
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// For loop with step
function printEvenNumbers(max) {
    const evens = [];
    for (let i = 2; i <= max; i += 2) {
        evens.push(i);
    }
    return evens;
}

// Reverse for loop
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log("\nFor Loops:");
console.log("Sum of [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));
console.log("Even numbers up to 10:", printEvenNumbers(10));
console.log("Reverse [1,2,3,4,5]:", reverseArray([1, 2, 3, 4, 5]));

// ============================================================================
// 4. WHILE LOOPS
// ============================================================================

// Basic while loop
function countdown(n) {
    const result = [];
    while (n > 0) {
        result.push(n);
        n--;
    }
    return result;
}

// While loop with condition
function findFirstEven(arr) {
    let i = 0;
    while (i < arr.length && arr[i] % 2 !== 0) {
        i++;
    }
    return i < arr.length ? arr[i] : null;
}

console.log("\nWhile Loops:");
console.log("Countdown from 5:", countdown(5));
console.log("First even in [1,3,5,2,7]:", findFirstEven([1, 3, 5, 2, 7]));
console.log("First even in [1,3,5,7]:", findFirstEven([1, 3, 5, 7]));

// ============================================================================
// 5. DO-WHILE LOOPS
// ============================================================================

// Do-while loop (executes at least once)
function getUserInput() {
    let attempts = 0;
    let input;
    
    do {
        attempts++;
        // Simulating user input
        input = Math.random() > 0.7 ? "valid" : "invalid";
        console.log(`Attempt ${attempts}: ${input}`);
    } while (input !== "valid" && attempts < 5);
    
    return input === "valid" ? "Success!" : "Max attempts reached";
}

console.log("\nDo-While Loop:");
console.log("User input simulation:", getUserInput());

// ============================================================================
// 6. FOR-IN AND FOR-OF LOOPS
// ============================================================================

// For-in loop (iterates over object properties)
function iterateObject(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(`${key}: ${obj[key]}`);
        }
    }
    return result;
}

// For-of loop (iterates over iterable values)
function iterateArray(arr) {
    const result = [];
    for (let value of arr) {
        result.push(value * 2);
    }
    return result;
}

const person = { name: "Alice", age: 30, city: "New York" };
const numbers = [1, 2, 3, 4, 5];

console.log("\nFor-in and For-of Loops:");
console.log("Object iteration:", iterateObject(person));
console.log("Array iteration:", iterateArray(numbers));

// ============================================================================
// 7. BREAK AND CONTINUE
// ============================================================================

// Break statement
function findFirstNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return i; // Found first negative, exit loop
        }
    }
    return -1; // No negative numbers found
}

// Continue statement
function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            continue; // Skip negative numbers and zero
        }
        sum += arr[i];
    }
    return sum;
}

console.log("\nBreak and Continue:");
console.log("First negative index in [1,2,-3,4]:", findFirstNegative([1, 2, -3, 4]));
console.log("First negative index in [1,2,3,4]:", findFirstNegative([1, 2, 3, 4]));
console.log("Sum of positive numbers [1,-2,3,-4,5]:", sumPositiveNumbers([1, -2, 3, -4, 5]));

// ============================================================================
// 8. NESTED LOOPS
// ============================================================================

// Nested loops for matrix operations
function createMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(i * cols + j + 1);
        }
        matrix.push(row);
    }
    return matrix;
}

// Nested loops for bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log("\nNested Loops:");
console.log("3x3 Matrix:", createMatrix(3, 3));
console.log("Bubble sort [64,34,25,12,22,11,90]:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// ============================================================================
// 9. LOOP OPTIMIZATION TECHNIQUES
// ============================================================================

// Early exit optimization
function hasElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; // Early exit when found
        }
    }
    return false;
}

// Loop unrolling (manual optimization)
function sumArrayUnrolled(arr) {
    let sum = 0;
    let i = 0;
    
    // Process 4 elements at a time
    for (; i < arr.length - 3; i += 4) {
        sum += arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3];
    }
    
    // Handle remaining elements
    for (; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

console.log("\nLoop Optimization:");
console.log("Has element 3 in [1,2,3,4,5]:", hasElement([1, 2, 3, 4, 5], 3));
console.log("Has element 6 in [1,2,3,4,5]:", hasElement([1, 2, 3, 4, 5], 6));
console.log("Sum unrolled [1,2,3,4,5,6,7,8,9]:", sumArrayUnrolled([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ============================================================================
// 10. PRACTICAL DSA EXAMPLES
// ============================================================================

// Linear search with early exit
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Selection sort
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

// Two-pointer technique
function findTwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

console.log("\nDSA Examples:");
console.log("Linear search for 7:", linearSearch([1, 3, 5, 7, 9], 7));
console.log("Linear search for 6:", linearSearch([1, 3, 5, 7, 9], 6));
console.log("Selection sort:", selectionSort([64, 25, 12, 22, 11]));
console.log("Two sum [2,7,11,15] target 9:", findTwoSum([2, 7, 11, 15], 9));

// ============================================================================
// 11. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("PRACTICE EXERCISES");
console.log("=".repeat(50));

// Exercise 1: Find maximum element
function findMax(arr) {
    if (arr.length === 0) return null;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Exercise 2: Count occurrences
function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

// Exercise 3: Check if array is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log("Find max [3,7,2,9,1]:", findMax([3, 7, 2, 9, 1]));
console.log("Count 2 in [1,2,2,3,2,4]:", countOccurrences([1, 2, 2, 3, 2, 4], 2));
console.log("Is [1,2,3,4,5] sorted:", isSorted([1, 2, 3, 4, 5]));
console.log("Is [1,3,2,4,5] sorted:", isSorted([1, 3, 2, 4, 5]));

// ============================================================================
// 12. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("KEY TAKEAWAYS");
console.log("=".repeat(50));

console.log(`
1. Use if-else for simple conditions, switch for multiple values
2. For loops are great for known iterations, while loops for unknown
3. Break exits the loop, continue skips to next iteration
4. Nested loops are powerful but watch for O(n²) complexity
5. Early exit can significantly improve performance
6. Choose the right loop type for your algorithm
7. Always consider edge cases in your conditions
8. Practice with different loop patterns for DSA problems
`);

// ============================================================================
// 13. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Arrays and Objects in 04-arrays-and-objects.js");
