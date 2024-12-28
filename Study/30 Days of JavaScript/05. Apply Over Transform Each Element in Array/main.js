/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.map(fn);
};

// Explanation:
// The `map` function takes an array and a function as arguments.
// It then uses the `map` method to apply the function to each element of the array and returns the resulting array.
// The `map` method is a built-in JavaScript method that creates a new array with the results of calling a provided function on every element in the calling array.

// Test cases
console.log(map([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
console.log(map([1, 2, 3], (x) => x + 2)); // [3, 4, 5]
console.log(map([1, 2, 3], (x) => x - 2)); // [-1, 0, 1]
