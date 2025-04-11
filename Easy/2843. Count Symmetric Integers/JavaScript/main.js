/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0;

  function isSymmetric(num) {
    const s = String(num);
    const n = s.length;
    if (n % 2 !== 0) {
      return false;
    }
    const mid = n / 2;
    let sumFirstHalf = 0;
    for (let i = 0; i < mid; i++) {
      sumFirstHalf += parseInt(s[i]);
    }
    let sumSecondHalf = 0;
    for (let i = mid; i < n; i++) {
      sumSecondHalf += parseInt(s[i]);
    }
    return sumFirstHalf === sumSecondHalf;
  }

  for (let i = low; i <= high; i++) {
    if (isSymmetric(i)) {
      count++;
    }
  }

  return count;
};
