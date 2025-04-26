/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let result = 0;
  let lastMinK = -1;
  let lastMaxK = -1;
  let lastInvalid = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num < minK || num > maxK) {
      lastInvalid = i;
    }
    if (num === minK) {
      lastMinK = i;
    }
    if (num === maxK) {
      lastMaxK = i;
    }

    const validStart = Math.min(lastMinK, lastMaxK);
    if (validStart > lastInvalid) {
      result += validStart - lastInvalid;
    }
  }

  return result;
};
