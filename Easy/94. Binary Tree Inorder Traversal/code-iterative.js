/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // Reach the leftmost node of the current node
    while (current !== null) {
      stack.push(current);
      current = current.left
    }

    // Current must be null at this point
    current = stack.pop()
    result.push(current.val) // Add the node value

    // Visit the right subtree
    current = current.right
  }

  return result
}


// Test Case
// Helper function to create a new TreeNode
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// Constructing the tree: [1,null,2,3]
//     1
//      \
//       2
//      /
//     3
const root = new TreeNode(1);
root.right = new TreeNode(2, new TreeNode(3));

console.log(inorderTraversal(root)); // Output: [1, 3, 2]

