/**
 * @return {Function}
 */
var createHelloWorld = function () {

  return function (...args) {
    return "Hello World"
  }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Test cases
const f = createHelloWorld();
console.log(f()); // "Hello World"

const f2 = createHelloWorld();
console.log(f2()); // "Hello World"
