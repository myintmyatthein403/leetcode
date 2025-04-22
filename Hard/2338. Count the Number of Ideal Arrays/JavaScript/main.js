/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function (n, maxValue) {
  const MOD = 1e9 + 7;
  const MAX_K = 14; // Since 2^14 > 10^4, we won't get longer chains than this
  const comb = Array.from({ length: n + 1 }, () => Array(MAX_K + 1).fill(0));

  // Precompute combinations C(n, k)
  for (let i = 0; i <= n; i++) {
    comb[i][0] = 1;
    for (let j = 1; j <= Math.min(i, MAX_K); j++) {
      comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
    }
  }

  // dp[k][v] = number of sequences of length k ending with value v
  const dp = Array.from({ length: MAX_K + 1 }, () => Array(maxValue + 1).fill(0));
  for (let v = 1; v <= maxValue; v++) {
    dp[1][v] = 1; // Base case: sequence of length 1
  }

  // Build up DP for k = 2 to MAX_K
  for (let k = 2; k <= MAX_K; k++) {
    for (let v = 1; v <= maxValue; v++) {
      for (let multiple = v * 2; multiple <= maxValue; multiple += v) {
        dp[k][multiple] = (dp[k][multiple] + dp[k - 1][v]) % MOD;
      }
    }
  }

  // Sum up total number of ideal arrays
  let result = 0;
  for (let k = 1; k <= MAX_K; k++) {
    for (let v = 1; v <= maxValue; v++) {
      result = (result + dp[k][v] * comb[n - 1][k - 1]) % MOD;
    }
  }

  return result;
};
