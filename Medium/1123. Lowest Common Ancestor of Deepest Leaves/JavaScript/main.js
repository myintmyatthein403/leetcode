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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  const dfs = (node) => {
    if (!node) return [0, null]; // base case: depth = 0, no LCA

    const [leftDepth, leftLCA] = dfs(node.left);
    const [rightDepth, rightLCA] = dfs(node.right);

    if (leftDepth === rightDepth) {
      return [leftDepth + 1, node]; // both sides equally deep → current node is LCA
    }

    return leftDepth > rightDepth
      ? [leftDepth + 1, leftLCA]
      : [rightDepth + 1, rightLCA];
  };

  return dfs(root)[1]; // return the LCA only
};
