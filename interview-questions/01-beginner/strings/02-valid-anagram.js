/**
 * Valid Anagram - LeetCode Easy
 * 
 * Problem: Given two strings s and t, return true if t is an anagram of s, 
 * and false otherwise.
 * 
 * Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

// Solution 1: Sorting - O(n log n) time, O(1) space
function isAnagramSorting(s, t) {
    if (s.length !== t.length) return false;
    
    return s.split('').sort().join('') === t.split('').sort().join('');
}

// Solution 2: Hash Map - O(n) time, O(1) space (26 characters max)
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const charCount = new Map();
    
    // Count characters in s
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Decrease count for characters in t
    for (let char of t) {
        if (!charCount.has(char)) return false;
        
        const count = charCount.get(char);
        if (count === 1) {
            charCount.delete(char);
        } else {
            charCount.set(char, count - 1);
        }
    }
    
    return charCount.size === 0;
}

// Solution 3: Array as Hash Map - O(n) time, O(1) space
function isAnagramArray(s, t) {
    if (s.length !== t.length) return false;
    
    const charCount = new Array(26).fill(0);
    
    // Count characters in s
    for (let char of s) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // Decrease count for characters in t
    for (let char of t) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        charCount[index]--;
        if (charCount[index] < 0) return false;
    }
    
    return true;
}

// Test cases
console.log("=== Valid Anagram Tests ===");
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("a", "ab")); // false
console.log(isAnagram("", "")); // true

/**
 * Follow-up Questions:
 * 1. What if the strings contain Unicode characters?
 * 2. Can you solve it without extra space?
 * 3. What's the time complexity of sorting approach?
 * 4. How would you handle case sensitivity?
 * 
 * Interview Tips:
 * 1. Clarify character set (ASCII vs Unicode)
 * 2. Ask about case sensitivity
 * 3. Consider different approaches
 * 4. Handle edge cases (empty strings, different lengths)
 * 5. Explain trade-offs between solutions
 */
