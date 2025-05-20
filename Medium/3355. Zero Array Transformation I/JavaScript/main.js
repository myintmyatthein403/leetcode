/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
  const n = nums.length;
  const count = new Array(n).fill(0);

  // Use a prefix sum approach to count how many times each index is affected
  for (const [l, r] of queries) {
    count[l] += 1;
    if (r + 1 < n) {
      count[r + 1] -= 1;
    }
  }

  // Convert the count array to actual coverage counts
  for (let i = 1; i < n; i++) {
    count[i] += count[i - 1];
  }

  // Check if each nums[i] can be reduced to zero
  for (let i = 0; i < n; i++) {
    if (nums[i] > count[i]) {
      return false;
    }
  }

  return true;
};
