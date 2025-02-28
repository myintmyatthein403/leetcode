/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  let m = str1.length, n = str2.length;

  // Step 1: Compute LCS table using DP
  let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Step 2: Construct SCS from LCS table
  let i = m, j = n;
  let result = [];

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result.push(str1[i - 1]);
      i--, j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      result.push(str1[i - 1]);
      i--;
    } else {
      result.push(str2[j - 1]);
      j--;
    }
  }

  // Add remaining characters from str1 and str2
  while (i > 0) {
    result.push(str1[i - 1]);
    i--;
  }
  while (j > 0) {
    result.push(str2[j - 1]);
    j--;
  }

  return result.reverse().join('');
};
