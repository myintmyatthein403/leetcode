**Inorder Traversal** is one of the depth-first traversal methods for binary trees. In this traversal method, we visit the nodes in the following order:

1.  **Left Subtree**
2.  **Root Node**
3.  **Right Subtree**

This means that for any given node, we first explore all the nodes in its left subtree, then process the current node, and finally explore all the nodes in its right subtree.

**Purpose**:

-   In a **Binary Search Tree (BST)**, inorder traversal retrieves data in **ascending order**.

### Approaches to Solve the Problem

There are two common approaches to perform inorder traversal:

1.  **Recursive Approach**
2.  **Iterative Approach using a Stack**

Let's delve into both methods.

### 1. Recursive Approach

**Logic**: The recursive approach is straightforward. We recursively call the inorder traversal on the left subtree, visit the current node by adding its value to the result array, and then recursively call the inorder traversal on the right subtree.

**Algorithm**:

1.  Initialize an empty array `result` to store the traversal sequence.
2.  Define a helper function `inorder(node)` that performs:
    -   If `node` is `null`, return.
    -   Call `inorder(node.left)`.
    -   Push `node.val` to `result`.
    -   Call `inorder(node.right)`.
3.  Call `inorder(root)` to start the traversal.
4.  Return the `result` array.

### 2. Iterative Approach using a Stack

**Logic**: In the iterative approach, we use a stack to simulate the system call stack used in recursion. We traverse to the leftmost node, pushing all nodes along the path onto the stack. Then we process nodes by popping them from the stack and exploring their right subtrees.

**Algorithm**:

1.  Initialize an empty array `result` and an empty stack.
2.  Set a pointer `current` to the root node.
3.  While `current` is not null or the stack is not empty:
    -   Traverse to the leftmost node:
        -   While `current` is not null:
            -   Push `current` onto the stack.
            -   Move `current` to `current.left`.
    -   Pop the top node from the stack and set it as `current`.
    -   Add `current.val` to `result`.
    -   Move `current` to `current.right`.
4.  Return the `result` array.
