/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let count = 1;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = nums[i] - i;
    if (map.has(diff)) {
      count += map.get(diff);
      map.set(diff, map.get(diff) + 1);
    } else {
      map.set(diff, 1);
    }
  }
  return (nums.length * (nums.length - 1)) / 2 - count;
};
