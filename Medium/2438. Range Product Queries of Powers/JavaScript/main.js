/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  const MOD = 1e9 + 7;

  // Step 1: Build powers array from binary representation of n
  const powers = [];
  let bit = 0;
  while (n > 0) {
    if (n & 1) powers.push(1 << bit); // 2^bit
    n >>= 1;
    bit++;
  }

  // Step 2: Precompute prefix products
  const prefixProd = new Array(powers.length);
  prefixProd[0] = powers[0] % MOD;
  for (let i = 1; i < powers.length; i++) {
    prefixProd[i] = (prefixProd[i - 1] * powers[i]) % MOD;
  }

  // Step 3: Fast modular exponentiation (for inverse)
  const modPow = (base, exp) => {
    let result = 1n;
    let b = BigInt(base);
    let e = BigInt(exp);
    let m = BigInt(MOD);
    while (e > 0n) {
      if (e & 1n) result = (result * b) % m;
      b = (b * b) % m;
      e >>= 1n;
    }
    return Number(result);
  };

  const inv = (a) => modPow(a, MOD - 2); // Fermat's little theorem

  // Step 4: Answer queries
  const ans = [];
  for (const [l, r] of queries) {
    if (l === 0) {
      ans.push(prefixProd[r]);
    } else {
      const segment = (prefixProd[r] * inv(prefixProd[l - 1])) % MOD;
      ans.push(segment);
    }
  }

  return ans;
};
