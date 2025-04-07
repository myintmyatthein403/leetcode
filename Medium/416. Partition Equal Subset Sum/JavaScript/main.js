/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  if (totalSum % 2 !== 0) {
    return false;
  }

  const targetSum = totalSum / 2;
  const n = nums.length;
  const dp = Array(n + 1).fill(null).map(() => Array(targetSum + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= targetSum; j++) {
      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][targetSum];
};
