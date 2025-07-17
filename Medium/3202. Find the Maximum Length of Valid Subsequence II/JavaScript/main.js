/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  const n = nums.length;
  // dp[i][mod] = longest valid subsequence ending at index i with (a + b) % k == mod
  const dp = Array.from({ length: n }, () => new Map());
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    // Single element can always be start of a subsequence
    dp[i].set(null, 1); // null means "no previous element"

    for (let j = 0; j < i; j++) {
      const mod = (nums[j] + nums[i]) % k;

      // Get the current best from dp[j][mod]
      const prevLen = dp[j].get(mod) || 1; // default is just nums[j]

      // Update dp[i][mod] if we can extend the previous subsequence
      dp[i].set(mod, Math.max(dp[i].get(mod) || 1, prevLen + 1));
      maxLen = Math.max(maxLen, dp[i].get(mod));
    }
  }

  return maxLen;
};
