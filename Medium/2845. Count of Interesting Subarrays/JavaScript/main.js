/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
  let count = 0;
  let prefix = 0;
  const freq = new Map();

  // Initialize for subarrays starting at index 0
  freq.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    // If nums[i] % modulo == k, increase prefix count
    if (nums[i] % modulo === k) {
      prefix += 1;
    }

    // Calculate mod value of current prefix
    const currMod = prefix % modulo;

    // Target prefix mod value we need to find in the map
    const target = (currMod - k + modulo) % modulo;

    // Add how many times that target prefix has occurred
    count += freq.get(target) || 0;

    // Update frequency map
    freq.set(currMod, (freq.get(currMod) || 0) + 1);
  }

  return count;
};
