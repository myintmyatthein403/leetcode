/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  // Helper: compute combinations C(n, k)
  const comb = (n, k) => {
    if (n < 0 || k < 0 || k > n) return 0;
    let res = 1;
    for (let i = 1; i <= k; i++) {
      res *= (n - i + 1);
      res /= i;
    }
    return res;
  };

  // Total combinations of x + y + z = n without bounds
  let total = comb(n + 2, 2);

  // Apply inclusion-exclusion: subtract invalids where x, y, or z > limit
  for (let mask = 1; mask < (1 << 3); mask++) {
    let bits = 0;
    let excess = 0;
    for (let i = 0; i < 3; i++) {
      if ((mask >> i) & 1) {
        bits++;
        excess += (limit + 1);
      }
    }
    let sign = (bits % 2 === 1) ? -1 : 1;
    let ways = comb(n - excess + 2, 2);
    total += sign * ways;
  }

  return total;
};
