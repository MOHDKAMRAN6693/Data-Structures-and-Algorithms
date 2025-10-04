/**
 * Reverse Linked List - LeetCode Easy
 * 
 * Problem: Given the head of a singly linked list, reverse the list, 
 * and return the reversed list.
 * 
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 */

// Definition for singly-linked list
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Solution 1: Iterative - O(n) time, O(1) space
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}

// Solution 2: Recursive - O(n) time, O(n) space
function reverseListRecursive(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    const newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}

// Solution 3: Using Stack - O(n) time, O(n) space
function reverseListStack(head) {
    if (!head) return null;
    
    const stack = [];
    let current = head;
    
    // Push all nodes to stack
    while (current) {
        stack.push(current);
        current = current.next;
    }
    
    // Pop from stack to reverse
    const newHead = stack.pop();
    current = newHead;
    
    while (stack.length > 0) {
        current.next = stack.pop();
        current = current.next;
    }
    
    current.next = null;
    return newHead;
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    const result = [];
    let current = head;
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

// Test cases
console.log("=== Reverse Linked List Tests ===");
const list1 = createLinkedList([1, 2, 3, 4, 5]);
const reversed1 = reverseList(list1);
console.log(linkedListToArray(reversed1)); // [5, 4, 3, 2, 1]

const list2 = createLinkedList([1, 2]);
const reversed2 = reverseList(list2);
console.log(linkedListToArray(reversed2)); // [2, 1]

const list3 = createLinkedList([]);
const reversed3 = reverseList(list3);
console.log(linkedListToArray(reversed3)); // []

/**
 * Follow-up Questions:
 * 1. Can you do it iteratively?
 * 2. Can you do it recursively?
 * 3. What's the space complexity of each approach?
 * 4. How would you handle a doubly linked list?
 * 
 * Interview Tips:
 * 1. Draw the linked list to visualize
 * 2. Explain the pointer manipulation
 * 3. Handle edge cases (empty list, single node)
 * 4. Discuss time and space complexity
 * 5. Consider both iterative and recursive approaches
 */
