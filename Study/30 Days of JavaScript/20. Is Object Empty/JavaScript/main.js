/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;

};

// Test cases
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({ a: 1, b: 2, c: 3 })); // false
