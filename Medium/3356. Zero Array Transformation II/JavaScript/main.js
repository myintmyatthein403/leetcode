/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  let n = nums.length, m = queries.length;
  // If nums is already a Zero Array, return 0
  if (nums.every(num => num === 0)) return 0;

  // Function to check if first `k` queries can make nums a zero array
  function canMakeZero(k) {
    let diff = Array(n + 1).fill(0); // Difference array
    let current = [...nums]; // Copy of nums

    for (let i = 0; i < k; i++) {
      let [l, r, val] = queries[i];
      diff[l] -= val;
      diff[r + 1] += val;
    }

    let decrement = 0; // Tracks cumulative sum of decrements
    for (let i = 0; i < n; i++) {
      decrement += diff[i];
      current[i] += decrement;
      if (current[i] > 0) return false; // If any element is > 0, k is not enough
    }

    return true;
  }

  // Binary search for the smallest `k`
  let left = 1, right = m, answer = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canMakeZero(mid)) {
      answer = mid;
      right = mid - 1; // Try to find a smaller k
    } else {
      left = mid + 1;
    }
  }

  return answer;
};
