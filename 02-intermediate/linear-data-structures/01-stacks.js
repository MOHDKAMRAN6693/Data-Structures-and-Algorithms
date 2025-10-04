/**
 * Linear Data Structures - Stacks
 * 
 * This file covers stack implementation and common applications.
 * Stack follows LIFO (Last In, First Out) principle.
 */

// ============================================================================
// 1. STACK CLASS IMPLEMENTATION
// ============================================================================

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    
    // Push element to top of stack - O(1)
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count;
    }
    
    // Pop element from top of stack - O(1)
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    
    // Peek at top element without removing - O(1)
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    
    // Check if stack is empty - O(1)
    isEmpty() {
        return this.count === 0;
    }
    
    // Get stack size - O(1)
    size() {
        return this.count;
    }
    
    // Clear the stack - O(1)
    clear() {
        this.items = [];
        this.count = 0;
    }
    
    // Convert stack to string - O(n)
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let result = this.items[0];
        for (let i = 1; i < this.count; i++) {
            result += `,${this.items[i]}`;
        }
        return result;
    }
}

console.log("Stack Implementation");
console.log("=".repeat(50));

// Test the stack
const stack = new Stack();
console.log("Is empty:", stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
console.log("After pushing 1, 2, 3:");
console.log("Size:", stack.size());
console.log("Peek:", stack.peek());
console.log("Stack:", stack.toString());

console.log("Popped:", stack.pop());
console.log("After pop:");
console.log("Size:", stack.size());
console.log("Peek:", stack.peek());
console.log("Stack:", stack.toString());

// ============================================================================
// 2. STACK USING OBJECT (MORE EFFICIENT)
// ============================================================================

class StackObject {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    
    isEmpty() {
        return this.count === 0;
    }
    
    size() {
        return this.count;
    }
    
    clear() {
        this.items = {};
        this.count = 0;
    }
}

console.log("\n" + "=".repeat(50));
console.log("Stack with Object Implementation");
console.log("=".repeat(50));

const stackObj = new StackObject();
stackObj.push("first");
stackObj.push("second");
stackObj.push("third");

console.log("Stack size:", stackObj.size());
console.log("Peek:", stackObj.peek());
console.log("Popped:", stackObj.pop());
console.log("Peek after pop:", stackObj.peek());

// ============================================================================
// 3. STACK APPLICATIONS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Stack Applications");
console.log("=".repeat(50));

// 3.1 Parentheses Matching
function isBalancedParentheses(str) {
    const stack = new Stack();
    const opening = '([{';
    const closing = ')]}';
    
    for (let char of str) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            if (stack.isEmpty()) {
                return false;
            }
            const lastOpening = stack.pop();
            if (opening.indexOf(lastOpening) !== closing.indexOf(char)) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

console.log("Parentheses Matching:");
console.log("'()' is balanced:", isBalancedParentheses("()"));
console.log("'()[]{}' is balanced:", isBalancedParentheses("()[]{}"));
console.log("'([)]' is balanced:", isBalancedParentheses("([)]"));
console.log("'((()))' is balanced:", isBalancedParentheses("((()))"));

// 3.2 Decimal to Binary Conversion
function decimalToBinary(decimal) {
    const stack = new Stack();
    
    if (decimal === 0) {
        return '0';
    }
    
    while (decimal > 0) {
        stack.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    
    let binaryString = '';
    while (!stack.isEmpty()) {
        binaryString += stack.pop();
    }
    
    return binaryString;
}

console.log("\nDecimal to Binary:");
console.log("10 in binary:", decimalToBinary(10));
console.log("25 in binary:", decimalToBinary(25));
console.log("0 in binary:", decimalToBinary(0));

// 3.3 Base Conversion (Generic)
function baseConverter(decimal, base) {
    const stack = new Stack();
    const digits = '0123456789ABCDEF';
    
    if (decimal === 0) {
        return '0';
    }
    
    while (decimal > 0) {
        stack.push(digits[decimal % base]);
        decimal = Math.floor(decimal / base);
    }
    
    let result = '';
    while (!stack.isEmpty()) {
        result += stack.pop();
    }
    
    return result;
}

console.log("\nBase Conversion:");
console.log("10 in base 2:", baseConverter(10, 2));
console.log("10 in base 8:", baseConverter(10, 8));
console.log("10 in base 16:", baseConverter(10, 16));

// ============================================================================
// 4. EXPRESSION EVALUATION
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Expression Evaluation");
console.log("=".repeat(50));

// 4.1 Postfix Expression Evaluation
function evaluatePostfix(expression) {
    const stack = new Stack();
    const tokens = expression.split(' ');
    
    for (let token of tokens) {
        if (!isNaN(token)) {
            // It's a number
            stack.push(parseFloat(token));
        } else {
            // It's an operator
            const b = stack.pop();
            const a = stack.pop();
            
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                case '^':
                    stack.push(Math.pow(a, b));
                    break;
            }
        }
    }
    
    return stack.pop();
}

console.log("Postfix Evaluation:");
console.log("'3 4 + 2 * 1 +' =", evaluatePostfix("3 4 + 2 * 1 +"));
console.log("'5 1 2 + 4 * + 3 -' =", evaluatePostfix("5 1 2 + 4 * + 3 -"));

// 4.2 Infix to Postfix Conversion
function infixToPostfix(infix) {
    const stack = new Stack();
    const result = [];
    const precedence = {
        '+': 1, '-': 1,
        '*': 2, '/': 2,
        '^': 3
    };
    
    for (let char of infix) {
        if (char === ' ') continue;
        
        if (!isNaN(char)) {
            result.push(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (!stack.isEmpty() && stack.peek() !== '(') {
                result.push(stack.pop());
            }
            stack.pop(); // Remove '('
        } else {
            while (!stack.isEmpty() && 
                   stack.peek() !== '(' && 
                   precedence[stack.peek()] >= precedence[char]) {
                result.push(stack.pop());
            }
            stack.push(char);
        }
    }
    
    while (!stack.isEmpty()) {
        result.push(stack.pop());
    }
    
    return result.join(' ');
}

console.log("\nInfix to Postfix:");
console.log("'3 + 4 * 2' =", infixToPostfix("3 + 4 * 2"));
console.log("'(3 + 4) * 2' =", infixToPostfix("(3 + 4) * 2"));

// ============================================================================
// 5. STACK-BASED ALGORITHMS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Stack-based Algorithms");
console.log("=".repeat(50));

// 5.1 Next Greater Element
function nextGreaterElement(arr) {
    const stack = new Stack();
    const result = new Array(arr.length).fill(-1);
    
    for (let i = 0; i < arr.length; i++) {
        while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
            const index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }
    
    return result;
}

console.log("Next Greater Element:");
console.log("Array [4, 5, 2, 10]:", nextGreaterElement([4, 5, 2, 10]));

// 5.2 Stock Span Problem
function stockSpan(prices) {
    const stack = new Stack();
    const span = new Array(prices.length).fill(1);
    
    stack.push(0); // Push index of first element
    
    for (let i = 1; i < prices.length; i++) {
        while (!stack.isEmpty() && prices[stack.peek()] <= prices[i]) {
            stack.pop();
        }
        
        span[i] = stack.isEmpty() ? i + 1 : i - stack.peek();
        stack.push(i);
    }
    
    return span;
}

console.log("\nStock Span:");
console.log("Prices [100, 80, 60, 70, 60, 75, 85]:", stockSpan([100, 80, 60, 70, 60, 75, 85]));

// ============================================================================
// 6. STACK WITH MIN/MAX TRACKING
// ============================================================================

class MinStack {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
    }
    
    push(element) {
        this.stack.push(element);
        
        if (this.minStack.isEmpty() || element <= this.minStack.peek()) {
            this.minStack.push(element);
        }
    }
    
    pop() {
        if (this.stack.isEmpty()) {
            return undefined;
        }
        
        const element = this.stack.pop();
        
        if (element === this.minStack.peek()) {
            this.minStack.pop();
        }
        
        return element;
    }
    
    peek() {
        return this.stack.peek();
    }
    
    getMin() {
        return this.minStack.peek();
    }
    
    isEmpty() {
        return this.stack.isEmpty();
    }
}

console.log("\n" + "=".repeat(50));
console.log("Min Stack Implementation");
console.log("=".repeat(50));

const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);

console.log("Current min:", minStack.getMin());
console.log("Popped:", minStack.pop());
console.log("Current min:", minStack.getMin());
console.log("Popped:", minStack.pop());
console.log("Current min:", minStack.getMin());

// ============================================================================
// 7. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Practice Exercises");
console.log("=".repeat(50));

// Exercise 1: Valid Parentheses (LeetCode 20)
function isValidParentheses(s) {
    const stack = new Stack();
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char in mapping) {
            if (stack.isEmpty() || stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.isEmpty();
}

// Exercise 2: Daily Temperatures (LeetCode 739)
function dailyTemperatures(temperatures) {
    const stack = new Stack();
    const result = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    
    return result;
}

// Exercise 3: Largest Rectangle in Histogram
function largestRectangleArea(heights) {
    const stack = new Stack();
    let maxArea = 0;
    
    for (let i = 0; i <= heights.length; i++) {
        const h = i === heights.length ? 0 : heights[i];
        
        while (!stack.isEmpty() && heights[stack.peek()] > h) {
            const height = heights[stack.pop()];
            const width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}

console.log("Valid Parentheses:");
console.log("'()' is valid:", isValidParentheses("()"));
console.log("'()[]{}' is valid:", isValidParentheses("()[]{}"));
console.log("'(]' is valid:", isValidParentheses("(]"));

console.log("\nDaily Temperatures:");
console.log("Temperatures [73,74,75,71,69,72,76,73]:", 
    dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

console.log("\nLargest Rectangle:");
console.log("Heights [2,1,5,6,2,3]:", largestRectangleArea([2, 1, 5, 6, 2, 3]));

// ============================================================================
// 8. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Key Takeaways");
console.log("=".repeat(50));

console.log(`
1. Stack follows LIFO (Last In, First Out) principle
2. All operations (push, pop, peek) are O(1) time complexity
3. Stack is useful for:
   - Expression evaluation
   - Parentheses matching
   - Undo operations
   - Function call management
   - Backtracking algorithms
4. Can be implemented using arrays or objects
5. Min/Max stack can track minimum/maximum elements
6. Stack is fundamental for many algorithms
`);

// ============================================================================
// 9. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Queues in 02-queues.js");
