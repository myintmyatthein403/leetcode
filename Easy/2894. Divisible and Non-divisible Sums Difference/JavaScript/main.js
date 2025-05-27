/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  // Sum of all numbers from 1 to n
  const totalSum = (n * (n + 1)) / 2;

  // Number of multiples of m from 1 to n
  const count = Math.floor(n / m);

  // Sum of all numbers divisible by m from 1 to n
  const divisibleSum = m * (count * (count + 1)) / 2;

  // Return the result
  return totalSum - 2 * divisibleSum;
};


console.log(differenceOfSums(10, 3))
console.log(differenceOfSums(5, 6))
