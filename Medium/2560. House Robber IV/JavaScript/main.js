/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let low = Math.min(...nums), high = Math.max(...nums);

  const canRobAtLeastK = (capability) => {
    let count = 0, i = 0;
    while (i < nums.length) {
      if (nums[i] <= capability) {
        count++;
        i += 2; // Move to the next non-adjacent house
      } else {
        i++;
      }
      if (count >= k) return true;
    }
    return count >= k;
  };

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (canRobAtLeastK(mid)) {
      high = mid; // Try a smaller capability
    } else {
      low = mid + 1; // Increase capability
    }
  }

  return low;
};
