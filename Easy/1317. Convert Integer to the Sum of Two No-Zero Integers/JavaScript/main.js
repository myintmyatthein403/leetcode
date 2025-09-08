/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  // Helper function to check if a number is a no-zero integer
  function isNoZero(num) {
    return !num.toString().includes('0');
  }

  // Try all possible values for a from 1 to n-1
  for (let a = 1; a < n; a++) {
    let b = n - a;
    if (isNoZero(a) && isNoZero(b)) {
      return [a, b];
    }
  }

  // Since the problem guarantees a solution, we don't need a fallback return
};
