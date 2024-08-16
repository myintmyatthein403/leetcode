/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // Handle the simplest cases where x is 0 or 1
  if (x === 0 || x === 1) return x;

  let left = 1;  // Initialize left boundary of the search space
  let right = x; // Initialize right boundary of the search space
  let result = 0; // To store the final square root result

  // Binary search loop
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Find the middle of the current search space

    // If mid squared equals x, we've found the exact square root
    if (mid * mid === x) {
      return mid;
    }

    // If mid squared is less than x, move the left boundary to mid + 1
    if (mid * mid < x) {
      left = mid + 1;
      result = mid; // Update result because mid could be the answer
    } else {
      // If mid squared is greater than x, move the right boundary to mid - 1
      right = mid - 1;
    }
  }

  // Return the result which is the largest integer less than or equal to the square root of x
  return result;
};


// Test Case:
console.log(mySqrt(4));  // Output: 2
console.log(mySqrt(8));  // Output: 2
