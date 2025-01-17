/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  const n = derived.length;

  // Check if the sum of all elements in derived is even
  const sum = derived.reduce((acc, val) => acc + val, 0);
  return sum % 2 === 0;
};
