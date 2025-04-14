/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  const MOD = 1_000_000_007n;

  // Efficient modular exponentiation
  const modPow = (base, exponent, mod) => {
    let result = 1n;
    base = BigInt(base);
    exponent = BigInt(exponent);
    mod = BigInt(mod);

    while (exponent > 0) {
      if (exponent % 2n === 1n) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      exponent = exponent / 2n;
    }
    return result;
  };

  const evenCount = Math.ceil(n / 2);
  const oddCount = Math.floor(n / 2);

  const evenPart = modPow(5, evenCount, MOD);
  const oddPart = modPow(4, oddCount, MOD);

  return Number((evenPart * oddPart) % MOD);
};
