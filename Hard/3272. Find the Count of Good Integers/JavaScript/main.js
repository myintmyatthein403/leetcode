/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function (n, k) {
  const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);

  const getDigitCount = (num) => {
    const count = new Array(10).fill(0);
    for (const ch of num.toString()) {
      count[+ch]++;
    }
    return count;
  };

  const countPermutations = (digitCount) => {
    const total = Object.values(digitCount).reduce((a, b) => a + b, 0);
    let numerator = fact(total);
    for (let v of Object.values(digitCount)) {
      numerator /= fact(v);
    }

    // Subtract permutations that start with zero
    if (digitCount[0]) {
      digitCount[0]--;
      let total2 = total - 1;
      let bad = fact(total2);
      for (let v of Object.values(digitCount)) {
        bad /= fact(v);
      }
      digitCount[0]++;
      return numerator - bad;
    }

    return numerator;
  };

  const generatePalindromes = (n) => {
    const palindromes = [];
    const halfLen = Math.floor((n + 1) / 2);
    const start = Math.pow(10, halfLen - 1);
    const end = Math.pow(10, halfLen);

    for (let i = start; i < end; i++) {
      let firstHalf = i.toString();
      let secondHalf = firstHalf.split('').reverse().join('');
      if (n % 2 === 1) secondHalf = secondHalf.slice(1);
      const pal = parseInt(firstHalf + secondHalf);
      palindromes.push(pal);
    }

    return palindromes;
  };

  const palindromes = generatePalindromes(n);
  const seen = new Set();
  let result = 0;

  for (let pal of palindromes) {
    if (pal % k !== 0) continue;

    const count = getDigitCount(pal);
    const key = count.join(',');

    if (seen.has(key)) continue;
    seen.add(key);

    result += countPermutations(count);
  }

  return result;
};
