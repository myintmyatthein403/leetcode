/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Test cases
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
console.log(fn(5)); // 11

const fn2 = compose([x => x + 1, x => 2 * x, x => x / 2]);
console.log(fn2(4)); // 5
console.log(fn2(5)); // 6

const fn3 = compose([x => x + 1, x => 2 * x, x => x / 2, x => x - 1]);
console.log(fn3(4)); // 4
console.log(fn3(5)); // 5
