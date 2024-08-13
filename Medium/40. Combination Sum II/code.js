/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = []

  // Sort candidates to handle duplicate easily
  candidates.sort((a, b) => a - b)

  function backtrack(start, target, currentCombo) {
    if (target === 0) {
      // We found a valid combination
      result.push([...currentCombo]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      // If the current number is greater than the remaining target, no point in continuing
      if (candidates[i] > target) break;

      // Include the current number and move to the next
      currentCombo.push(candidates[i]);
      backtrack(i + 1, target - candidates[i], currentCombo);
      currentCombo.pop();  // Backtrack
    }
  }
  backtrack(0, target, []);

  return result;

};

// Example usage:
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
// Output: [[1,2,2],[5]]
