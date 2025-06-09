/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  // Helper function to count steps between curr and curr + 1
  const countSteps = (n, curr, next) => {
    let steps = 0;
    while (curr <= n) {
      steps += Math.min(n + 1, next) - curr;
      curr *= 10;
      next *= 10;
    }
    return steps;
  };

  let curr = 1;
  k -= 1; // Since we're starting from 1

  while (k > 0) {
    const steps = countSteps(n, curr, curr + 1);
    if (steps <= k) {
      // Skip this subtree
      curr += 1;
      k -= steps;
    } else {
      // Go deeper in the current subtree
      curr *= 10;
      k -= 1;
    }
  }

  return curr;
};
