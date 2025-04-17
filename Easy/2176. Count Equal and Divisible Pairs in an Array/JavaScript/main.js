/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let indexMap = new Map(); // Map to group indices by number
  let count = 0;

  // Step 1: Group indices by value
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!indexMap.has(num)) {
      indexMap.set(num, []);
    }
    indexMap.get(num).push(i);
  }

  // Step 2: For each group of indices with the same value
  for (let indices of indexMap.values()) {
    // Step 3: Check all (i, j) pairs where i < j
    for (let i = 0; i < indices.length; i++) {
      for (let j = i + 1; j < indices.length; j++) {
        if ((indices[i] * indices[j]) % k === 0) {
          count++;
        }
      }
    }
  }

  return count;
};
