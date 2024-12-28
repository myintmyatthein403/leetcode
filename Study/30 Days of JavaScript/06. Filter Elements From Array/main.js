/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  return arr.filter(fn)
};

// Test cases
console.log(filter([1, 2, 3, 4], n => n < 3)); // [1, 2]
console.log(filter([1, 2, 3, 4], n => n > 5)); // []
console.log(filter([1, 2, 3, 4], n => n % 2 === 0)); // [2, 4]
