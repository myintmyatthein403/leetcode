/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  return nums.reduce(fn, init)
};

// Test cases
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // 10
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 10)); // 20
console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 1)); // 24
