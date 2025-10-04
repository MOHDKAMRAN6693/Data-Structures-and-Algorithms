/**
 * Binary Tree Traversals - Fundamental Tree Operations
 * 
 * Problem: Implement different ways to traverse a binary tree:
 * 1. Preorder (Root, Left, Right)
 * 2. Inorder (Left, Root, Right)  
 * 3. Postorder (Left, Right, Root)
 * 4. Level Order (Breadth-First)
 */

// Definition for a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 1. Preorder Traversal - O(n) time, O(h) space
function preorderTraversal(root) {
    const result = [];
    
    function preorder(node) {
        if (!node) return;
        
        result.push(node.val); // Visit root
        preorder(node.left);   // Traverse left
        preorder(node.right);  // Traverse right
    }
    
    preorder(root);
    return result;
}

// 2. Inorder Traversal - O(n) time, O(h) space
function inorderTraversal(root) {
    const result = [];
    
    function inorder(node) {
        if (!node) return;
        
        inorder(node.left);    // Traverse left
        result.push(node.val); // Visit root
        inorder(node.right);   // Traverse right
    }
    
    inorder(root);
    return result;
}

// 3. Postorder Traversal - O(n) time, O(h) space
function postorderTraversal(root) {
    const result = [];
    
    function postorder(node) {
        if (!node) return;
        
        postorder(node.left);   // Traverse left
        postorder(node.right);  // Traverse right
        result.push(node.val);  // Visit root
    }
    
    postorder(root);
    return result;
}

// 4. Level Order Traversal (BFS) - O(n) time, O(w) space
function levelOrderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Iterative versions using stacks
function preorderIterative(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];
    
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return result;
}

function inorderIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    
    return result;
}

// Helper function to create a sample tree
function createSampleTree() {
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    return root;
}

// Test cases
console.log("=== Binary Tree Traversals ===");
const tree = createSampleTree();

console.log("Preorder:", preorderTraversal(tree));     // [1, 2, 4, 5, 3]
console.log("Inorder:", inorderTraversal(tree));      // [4, 2, 5, 1, 3]
console.log("Postorder:", postorderTraversal(tree));  // [4, 5, 2, 3, 1]
console.log("Level Order:", levelOrderTraversal(tree)); // [[1], [2, 3], [4, 5]]

console.log("Preorder (Iterative):", preorderIterative(tree));
console.log("Inorder (Iterative):", inorderIterative(tree));

/**
 * Interview Tips:
 * 1. Know the difference between traversals
 * 2. Understand when to use each traversal
 * 3. Be able to implement both recursive and iterative versions
 * 4. Explain time and space complexity
 * 5. Handle edge cases (empty tree, single node)
 * 
 * Common Use Cases:
 * - Preorder: Copy tree, serialize tree
 * - Inorder: BST gives sorted order
 * - Postorder: Delete tree, calculate size
 * - Level Order: Print tree level by level
 */
