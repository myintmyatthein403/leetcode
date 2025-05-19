/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const [a, b, c] = nums;

  // Step 1: Check if it forms a valid triangle
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "none";
  }

  // Step 2: Determine type
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || a === c || b === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
};
