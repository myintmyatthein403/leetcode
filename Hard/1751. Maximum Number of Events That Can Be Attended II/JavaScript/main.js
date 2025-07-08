/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  // Sort events by end day
  events.sort((a, b) => a[1] - b[1]);

  const n = events.length;

  // Preprocess: extract start days for binary search
  const startDays = events.map(e => e[0]);

  // Binary search helper: find last event that ends before current event's start
  const findLastNonOverlap = (index) => {
    let low = 0, high = index - 1, res = -1;
    const target = events[index][0];
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (events[mid][1] < target) {
        res = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return res;
  };

  // dp[i][j] = max value using first i events and choosing j events
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const [start, end, value] = events[i - 1];
    const prev = findLastNonOverlap(i - 1); // 0-based index

    for (let j = 1; j <= k; j++) {
      // Option 1: skip current event
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);

      // Option 2: attend current event
      if (prev !== -1) {
        dp[i][j] = Math.max(dp[i][j], dp[prev + 1][j - 1] + value);
      } else {
        dp[i][j] = Math.max(dp[i][j], value);
      }
    }
  }

  return dp[n][k];
};
