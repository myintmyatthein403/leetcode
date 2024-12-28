/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (expected) => {
      if (val === expected) {
        return true
      }
      throw new Error("Not Equal");
    },
    notToBe: (expected) => {
      if (val !== expected) {
        return true
      }
      throw new Error("Equal");
    }
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Test cases
console.log(expect(5).toBe(5)); // { value: true }
console.log(expect(5).notToBe(5)); // { error: 'Equal' }
console.log(expect(5).toBe(6)); // { error: 'Not Equal' }
console.log(expect(5).notToBe(6)); // { value: true }
