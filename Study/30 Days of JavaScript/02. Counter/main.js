/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {

  return function () {
    return n++;
  };
};

// Explanation:
/* 
1. When the counter function is called for the first time, it returns the current value of `n` and then increments `n` by 1.
2. On subsequent calls, the function returns the current (already incremented) value of `n` and then increments `n` again.


For example, if `n` is initially 5:
- First call: returns 5(then`n` becomes 6)
- Second call: returns 6(then`n` becomes 7)
- Third call: returns 7(then`n` becomes 8)
- And so on.

*/

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Test cases
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const counter2 = createCounter(-2);
console.log(counter2()); // -2
console.log(counter2()); // -1
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2
