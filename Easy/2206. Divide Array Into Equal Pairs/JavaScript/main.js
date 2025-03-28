/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  if (nums.length % 2 !== 0) {
    return false;
  }

  const counts = {};
  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (const count of Object.values(counts)) {
    if (count % 2 !== 0) {
      return false;
    }
  }

  return true;
};
