/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  const EPSILON = 1e-6;

  function dfs(nums) {
    if (nums.length === 1) {
      return Math.abs(nums[0] - 24) < EPSILON;
    }

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i === j) continue;

        // Get the remaining numbers
        let next = [];
        for (let k = 0; k < nums.length; k++) {
          if (k !== i && k !== j) {
            next.push(nums[k]);
          }
        }

        // Try all operations
        for (let op of compute(nums[i], nums[j])) {
          next.push(op);
          if (dfs(next)) return true;
          next.pop();
        }
      }
    }

    return false;
  }

  function compute(a, b) {
    let results = [a + b, a - b, b - a, a * b];
    if (Math.abs(b) > 1e-6) results.push(a / b);
    if (Math.abs(a) > 1e-6) results.push(b / a);
    return results;
  }

  return dfs(cards.map(num => num * 1.0)); // Convert to floats for precision
};
