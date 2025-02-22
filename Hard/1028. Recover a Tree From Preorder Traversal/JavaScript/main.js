/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  // Initialize a stack to keep track of nodes and their depths
  const stack = [];
  let index = 0;

  while (index < traversal.length) {
    // Determine the current node's depth by counting dashes
    let depth = 0;
    while (index < traversal.length && traversal[index] === '-') {
      depth++;
      index++;
    }

    // Determine the current node's value
    let value = 0;
    while (index < traversal.length && traversal[index] !== '-') {
      value = value * 10 + (traversal[index] - '0');
      index++;
    }

    // Create the new node
    const newNode = new TreeNode(value);

    // If the stack size is greater than the current depth, pop from stack
    while (stack.length > depth) {
      stack.pop();
    }

    // Attach the new node to the appropriate parent node
    if (stack.length > 0) {
      const parent = stack[stack.length - 1];
      if (!parent.left) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    }

    // Push the new node onto the stack
    stack.push(newNode);
  }

  // The root of the tree is the bottom-most element in the stack
  return stack[0];
};

