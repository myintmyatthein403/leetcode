/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const result = [];

  // For even and odd n, add pairs like (-i, i)
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    result.push(-i);
    result.push(i);
  }

  // If n is odd, include 0 to make the total count n
  if (n % 2 !== 0) {
    result.push(0);
  }

  return result;
};
