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
  const inorder = (node) => {
    if (node == null) return;

    inorder(node.left)  // Traverse left subtree.
    result.push(node.val) // Visit node
    inorder(node.right) // Traverse right subtree
  }

  inorder(root)
  return result
};


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
