/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
  // If Alice never draws or n covers all possible terminal scores, prob = 1
  if (k === 0 || n >= k - 1 + maxPts) return 1.0;

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1.0;

  let windowSum = 1.0; // sum of last maxPts dp values that can reach next state
  let result = 0.0;

  for (let i = 1; i <= n; i++) {
    dp[i] = windowSum / maxPts;

    if (i < k) {
      // Still drawing from i, so it contributes to future states
      windowSum += dp[i];
    } else {
      // i is a terminal score (i >= k)
      result += dp[i];
    }

    // Slide window: remove dp[i - maxPts] if it exits the range
    if (i - maxPts >= 0) {
      windowSum -= dp[i - maxPts];
    }
  }

  return result;
};
