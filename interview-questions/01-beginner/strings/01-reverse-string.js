/**
 * Reverse String - LeetCode Easy
 * 
 * Problem: Write a function that reverses a string. 
 * The input string is given as an array of characters s.
 * 
 * Example:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 */

// Solution 1: Two Pointers - O(n) time, O(1) space
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// Solution 2: Using Built-in Methods - O(n) time, O(n) space
function reverseStringBuiltIn(s) {
    return s.reverse();
}

// Solution 3: Recursive Approach - O(n) time, O(n) space
function reverseStringRecursive(s, left = 0, right = s.length - 1) {
    if (left >= right) return;
    
    [s[left], s[right]] = [s[right], s[left]];
    reverseStringRecursive(s, left + 1, right - 1);
}

// Solution 4: Using Stack - O(n) time, O(n) space
function reverseStringStack(s) {
    const stack = [];
    
    // Push all characters to stack
    for (let char of s) {
        stack.push(char);
    }
    
    // Pop from stack to reverse
    for (let i = 0; i < s.length; i++) {
        s[i] = stack.pop();
    }
}

// Test cases
console.log("=== Reverse String Tests ===");
let s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // ["o", "l", "l", "e", "h"]

let s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // ["h", "a", "n", "n", "a", "H"]

let s3 = ["A"];
reverseString(s3);
console.log(s3); // ["A"]

/**
 * Follow-up Questions:
 * 1. Can you do it in-place?
 * 2. What's the space complexity?
 * 3. Can you do it recursively?
 * 4. What if the string is very long?
 * 
 * Interview Tips:
 * 1. Clarify if it's in-place or not
 * 2. Consider different approaches
 * 3. Handle edge cases (empty string, single character)
 * 4. Explain time and space complexity
 * 5. Discuss trade-offs between approaches
 */
