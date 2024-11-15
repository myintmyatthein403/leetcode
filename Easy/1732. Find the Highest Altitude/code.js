/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let sum = 0
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    max = Math.max(max, sum);
  }
  return max;
};

// For Example
console.log(largestAltitude([-5, 1, 5, 0, -7])) // Output 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])) // Output 0
