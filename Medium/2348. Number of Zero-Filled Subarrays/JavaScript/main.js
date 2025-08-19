/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let count = 0;   // running streak of consecutive zeros
  let result = 0;  // total number of zero-filled subarrays

  for (let num of nums) {
    if (num === 0) {
      count++;          // extend streak
      result += count;  // this zero contributes 'count' new subarrays
    } else {
      count = 0;        // reset streak
    }
  }

  return result;
};
