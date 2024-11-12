/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = new Map();
  let count = 0;
  if (nums.length <= 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    let diff = k - nums[i];
    console.log('diff:', diff);
    console.log('map:', map);
    console.log(map.has(diff));
    console.log(map.get(diff));
    console.log('----------------')
    if (map.has(diff) && map.get(diff) > 0) {
      count++;
      map.set(diff, map.get(diff) - 1);
    } else {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
  }
  return count;
};

// For example
console.log(maxOperations([1, 2, 3, 4], 5)); // Output: 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // Output: 1
