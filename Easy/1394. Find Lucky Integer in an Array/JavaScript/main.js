/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const freq = {};

  // Step 1: Count frequency of each number
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Step 2: Find lucky integers
  let result = -1;
  for (let num in freq) {
    const val = parseInt(num);
    if (freq[val] === val) {
      result = Math.max(result, val);
    }
  }

  return result;
};
