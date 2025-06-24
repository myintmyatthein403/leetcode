/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const n = nums.length;
  const result = new Set();

  // Step 1: Find all indices where nums[i] == key
  for (let i = 0; i < n; i++) {
    if (nums[i] === key) {
      // Step 2: For each such index, add i-k to i+k to result
      const start = Math.max(0, i - k);
      const end = Math.min(n - 1, i + k);
      for (let j = start; j <= end; j++) {
        result.add(j);
      }
    }
  }

  // Step 3: Convert to array and sort
  return Array.from(result).sort((a, b) => a - b);
};
