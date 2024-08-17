/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third
  }

  return second
};


// Test Case
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
