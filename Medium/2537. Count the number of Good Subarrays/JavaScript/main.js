/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  let left = 0;
  let count = 0;
  let result = 0;
  const freq = new Map();

  for (let right = 0; right < nums.length; right++) {
    const val = nums[right];
    const prevFreq = freq.get(val) || 0;

    // Add the new element and update pair count
    count += prevFreq;
    freq.set(val, prevFreq + 1);

    // Shrink window from the left while it still satisfies the condition
    while (count >= k) {
      result += nums.length - right;
      const leftVal = nums[left];
      const leftFreq = freq.get(leftVal);
      count -= (leftFreq - 1);  // Decrease pair count
      if (leftFreq === 1) {
        freq.delete(leftVal);
      } else {
        freq.set(leftVal, leftFreq - 1);
      }
      left++;
    }
  }

  return result;
};
