/**
 * Linear Data Structures - Queues
 * 
 * This file covers queue implementation and common applications.
 * Queue follows FIFO (First In, First Out) principle.
 */

// ============================================================================
// 1. QUEUE CLASS IMPLEMENTATION
// ============================================================================

class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    // Add element to rear of queue - O(1)
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    
    // Remove element from front of queue - O(1)
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    // Peek at front element without removing - O(1)
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }
    
    // Check if queue is empty - O(1)
    isEmpty() {
        return this.rear === this.front;
    }
    
    // Get queue size - O(1)
    size() {
        return this.rear - this.front;
    }
    
    // Clear the queue - O(1)
    clear() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    // Convert queue to string - O(n)
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let result = this.items[this.front];
        for (let i = this.front + 1; i < this.rear; i++) {
            result += `,${this.items[i]}`;
        }
        return result;
    }
}

console.log("Queue Implementation");
console.log("=".repeat(50));

// Test the queue
const queue = new Queue();
console.log("Is empty:", queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("After enqueuing 1, 2, 3:");
console.log("Size:", queue.size());
console.log("Peek:", queue.peek());
console.log("Queue:", queue.toString());

console.log("Dequeued:", queue.dequeue());
console.log("After dequeue:");
console.log("Size:", queue.size());
console.log("Peek:", queue.peek());
console.log("Queue:", queue.toString());

// ============================================================================
// 2. QUEUE USING ARRAY (SIMPLE BUT INEFFICIENT)
// ============================================================================

class ArrayQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift(); // O(n) operation
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
    }
}

console.log("\n" + "=".repeat(50));
console.log("Array Queue Implementation");
console.log("=".repeat(50));

const arrayQueue = new ArrayQueue();
arrayQueue.enqueue("first");
arrayQueue.enqueue("second");
arrayQueue.enqueue("third");

console.log("Queue size:", arrayQueue.size());
console.log("Peek:", arrayQueue.peek());
console.log("Dequeued:", arrayQueue.dequeue());
console.log("Peek after dequeue:", arrayQueue.peek());

// ============================================================================
// 3. PRIORITY QUEUE
// ============================================================================

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        
        if (!added) {
            this.items.push(queueElement);
        }
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    toString() {
        return this.items.map(item => `${item.element}:${item.priority}`).join(', ');
    }
}

console.log("\n" + "=".repeat(50));
console.log("Priority Queue Implementation");
console.log("=".repeat(50));

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);
priorityQueue.enqueue("Task 4", 1);

console.log("Priority Queue:", priorityQueue.toString());
console.log("Dequeued:", priorityQueue.dequeue());
console.log("Priority Queue after dequeue:", priorityQueue.toString());

// ============================================================================
// 4. CIRCULAR QUEUE
// ============================================================================

class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }
    
    enqueue(element) {
        if (this.isFull()) {
            return false;
        }
        this.items[this.rear] = element;
        this.rear = (this.rear + 1) % this.capacity;
        this.count++;
        return true;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.count--;
        return item;
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.count === 0;
    }
    
    isFull() {
        return this.count === this.capacity;
    }
    
    size() {
        return this.count;
    }
    
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let result = [];
        for (let i = 0; i < this.count; i++) {
            const index = (this.front + i) % this.capacity;
            result.push(this.items[index]);
        }
        return result.join(', ');
    }
}

console.log("\n" + "=".repeat(50));
console.log("Circular Queue Implementation");
console.log("=".repeat(50));

const circularQueue = new CircularQueue(3);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
console.log("After enqueuing 1, 2, 3:", circularQueue.toString());
console.log("Is full:", circularQueue.isFull());

console.log("Dequeued:", circularQueue.dequeue());
console.log("After dequeue:", circularQueue.toString());

circularQueue.enqueue(4);
console.log("After enqueuing 4:", circularQueue.toString());

// ============================================================================
// 5. DEQUE (DOUBLE-ENDED QUEUE)
// ============================================================================

class Deque {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    // Add to front
    addFront(element) {
        this.front--;
        this.items[this.front] = element;
    }
    
    // Add to rear
    addRear(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    
    // Remove from front
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    // Remove from rear
    removeRear() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.rear--;
        const item = this.items[this.rear];
        delete this.items[this.rear];
        return item;
    }
    
    // Peek front
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }
    
    // Peek rear
    peekRear() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.rear - 1];
    }
    
    isEmpty() {
        return this.rear === this.front;
    }
    
    size() {
        return this.rear - this.front;
    }
    
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let result = this.items[this.front];
        for (let i = this.front + 1; i < this.rear; i++) {
            result += `,${this.items[i]}`;
        }
        return result;
    }
}

console.log("\n" + "=".repeat(50));
console.log("Deque Implementation");
console.log("=".repeat(50));

const deque = new Deque();
deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
console.log("After addRear(1), addRear(2), addFront(0):", deque.toString());

console.log("Remove front:", deque.removeFront());
console.log("Remove rear:", deque.removeRear());
console.log("After removals:", deque.toString());

// ============================================================================
// 6. QUEUE APPLICATIONS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Queue Applications");
console.log("=".repeat(50));

// 6.1 Breadth-First Search (BFS) Simulation
function bfsSimulation(graph, start) {
    const visited = new Set();
    const queue = new Queue();
    const result = [];
    
    queue.enqueue(start);
    visited.add(start);
    
    while (!queue.isEmpty()) {
        const vertex = queue.dequeue();
        result.push(vertex);
        
        if (graph[vertex]) {
            for (let neighbor of graph[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.enqueue(neighbor);
                }
            }
        }
    }
    
    return result;
}

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log("BFS from 'A':", bfsSimulation(graph, 'A'));

// 6.2 Task Scheduler Simulation
class TaskScheduler {
    constructor() {
        this.taskQueue = new Queue();
        this.completedTasks = [];
    }
    
    addTask(task, priority = 0) {
        this.taskQueue.enqueue({ task, priority, timestamp: Date.now() });
    }
    
    processNextTask() {
        if (this.taskQueue.isEmpty()) {
            return null;
        }
        
        const task = this.taskQueue.dequeue();
        this.completedTasks.push(task);
        return task;
    }
    
    getQueueStatus() {
        return {
            pending: this.taskQueue.size(),
            completed: this.completedTasks.length
        };
    }
}

const scheduler = new TaskScheduler();
scheduler.addTask("Send email", 1);
scheduler.addTask("Update database", 2);
scheduler.addTask("Generate report", 1);

console.log("\nTask Scheduler:");
console.log("Initial status:", scheduler.getQueueStatus());
console.log("Processed task:", scheduler.processNextTask());
console.log("Status after processing:", scheduler.getQueueStatus());

// ============================================================================
// 7. SLIDING WINDOW MAXIMUM
// ============================================================================

function slidingWindowMaximum(nums, k) {
    const deque = new Deque();
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements outside current window
        while (!deque.isEmpty() && deque.peekFront() <= i - k) {
            deque.removeFront();
        }
        
        // Remove elements smaller than current element
        while (!deque.isEmpty() && nums[deque.peekRear()] <= nums[i]) {
            deque.removeRear();
        }
        
        deque.addRear(i);
        
        // Add maximum of current window to result
        if (i >= k - 1) {
            result.push(nums[deque.peekFront()]);
        }
    }
    
    return result;
}

console.log("\n" + "=".repeat(50));
console.log("Sliding Window Maximum");
console.log("=".repeat(50));

console.log("Array [1,3,-1,-3,5,3,6,7], k=3:", 
    slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3));

// ============================================================================
// 8. QUEUE-BASED ALGORITHMS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Queue-based Algorithms");
console.log("=".repeat(50));

// 8.1 Level Order Traversal (Binary Tree)
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    const queue = new Queue();
    queue.enqueue(root);
    
    while (!queue.isEmpty()) {
        const levelSize = queue.size();
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.dequeue();
            currentLevel.push(node.value);
            
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Create a sample tree
const treeRoot = new TreeNode(1);
treeRoot.left = new TreeNode(2);
treeRoot.right = new TreeNode(3);
treeRoot.left.left = new TreeNode(4);
treeRoot.left.right = new TreeNode(5);
treeRoot.right.left = new TreeNode(6);
treeRoot.right.right = new TreeNode(7);

console.log("Level Order Traversal:");
console.log(levelOrderTraversal(treeRoot));

// 8.2 Rotting Oranges Problem
function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = new Queue();
    let freshOranges = 0;
    let time = 0;
    
    // Find all rotten oranges and count fresh ones
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.enqueue([i, j, 0]);
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (!queue.isEmpty()) {
        const [row, col, t] = queue.dequeue();
        time = Math.max(time, t);
        
        for (let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                grid[newRow][newCol] === 1) {
                grid[newRow][newCol] = 2;
                freshOranges--;
                queue.enqueue([newRow, newCol, t + 1]);
            }
        }
    }
    
    return freshOranges === 0 ? time : -1;
}

console.log("\nRotting Oranges:");
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log("Grid:", grid);
console.log("Time to rot all oranges:", orangesRotting(grid));

// ============================================================================
// 9. PRACTICE EXERCISES
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Practice Exercises");
console.log("=".repeat(50));

// Exercise 1: Implement Stack using Queues
class StackUsingQueues {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    
    push(element) {
        this.q2.enqueue(element);
        while (!this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }
        [this.q1, this.q2] = [this.q2, this.q1];
    }
    
    pop() {
        return this.q1.dequeue();
    }
    
    peek() {
        return this.q1.peek();
    }
    
    isEmpty() {
        return this.q1.isEmpty();
    }
}

// Exercise 2: Implement Queue using Stacks
class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(element) {
        this.stack1.push(element);
    }
    
    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

console.log("Stack using Queues:");
const stackUsingQueues = new StackUsingQueues();
stackUsingQueues.push(1);
stackUsingQueues.push(2);
stackUsingQueues.push(3);
console.log("Popped:", stackUsingQueues.pop());
console.log("Peek:", stackUsingQueues.peek());

console.log("\nQueue using Stacks:");
const queueUsingStacks = new QueueUsingStacks();
queueUsingStacks.enqueue(1);
queueUsingStacks.enqueue(2);
queueUsingStacks.enqueue(3);
console.log("Dequeued:", queueUsingStacks.dequeue());
console.log("Peek:", queueUsingStacks.peek());

// ============================================================================
// 10. KEY TAKEAWAYS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("Key Takeaways");
console.log("=".repeat(50));

console.log(`
1. Queue follows FIFO (First In, First Out) principle
2. All operations (enqueue, dequeue, peek) are O(1) time complexity
3. Queue is useful for:
   - BFS traversal
   - Task scheduling
   - Buffer management
   - Level-order processing
4. Priority queue maintains elements in priority order
5. Circular queue efficiently uses fixed-size array
6. Deque allows insertion/deletion at both ends
7. Queue is fundamental for many graph and tree algorithms
`);

// ============================================================================
// 11. NEXT STEPS
// ============================================================================

console.log("\nNext: Learn about Singly Linked Lists in 03-singly-linked-lists.js");
