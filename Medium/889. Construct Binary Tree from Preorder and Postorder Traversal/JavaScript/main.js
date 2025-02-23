/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  return build(preorder, postorder)
};

// Helper Function to construct the tree recursively
var build = (preorder, postorder) => {
  if (preorder.length === 0) return null;

  // the first element of preorder is the root node.
  const root = new TreeNode(preorder[0])

  // Base case: if there's only one element, it's a leaf node
  if (preorder.length === 1) return root;

  // the second element in preorder is the root of the left subtree
  const leftRoot = preorder[1];

  // find the left subtree boundary in postorder
  const leftSubtreeSize = postorder.indexOf(leftRoot) + 1;

  // Recursively buld the left and right subtree
  root.left = build(preorder.slice(1, leftSubtreeSize + 1), postorder.slice(0, leftSubtreeSize));
  root.right = build(preorder.slice(leftSubtreeSize + 1), postorder.slice(leftSubtreeSize, postorder.length - 1));

  return root
}
