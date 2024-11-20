/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];
  const dfs = (node, leaf) => {
    if (!node) return;
    if (!node.left && !node.right) {
      leaf.push(node.val);
    }
    dfs(node.left, leaf);
    dfs(node.right, leaf);
  }
  dfs(root1, leaf1);
  dfs(root2, leaf2);
  return leaf1.join('') === leaf2.join('');
};

// For Example
const root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(9);
root1.right.right = new TreeNode(8);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);

const root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(2);
root2.right.right.left = new TreeNode(9);
root2.right.right.right = new TreeNode(8);

console.log(leafSimilar(root1, root2)); // true
