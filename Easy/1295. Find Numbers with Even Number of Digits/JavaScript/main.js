/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;

  for (let num of nums) {
    // Convert number to string and check if length is even
    if (num.toString().length % 2 === 0) {
      count++;
    }
  }

  return count;
};
