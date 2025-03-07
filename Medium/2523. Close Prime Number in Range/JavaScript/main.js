/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  // Step 1: Use Sieve of Eratosthenes to find all primes up to 'right'
  function sieve(limit) {
    let isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return isPrime;
  }

  let isPrime = sieve(right);
  let primes = [];

  // Step 2: Collect primes within the given range
  for (let i = Math.max(2, left); i <= right; i++) {
    if (isPrime[i]) primes.push(i);
  }

  // Step 3: Find the closest prime pair
  if (primes.length < 2) return [-1, -1];

  let minDiff = Infinity;
  let result = [-1, -1];

  for (let i = 1; i < primes.length; i++) {
    let diff = primes[i] - primes[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      result = [primes[i - 1], primes[i]];
    }
  }

  return result;
};
