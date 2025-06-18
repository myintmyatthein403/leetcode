/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  const result = [];

  // Step 2: Process every 3 elements as a group
  for (let i = 0; i < nums.length; i += 3) {
    const group = [nums[i], nums[i + 1], nums[i + 2]];

    // Step 3: Check if the group satisfies the max difference condition
    if (group[2] - group[0] > k) {
      return []; // Invalid group, return empty
    }

    result.push(group);
  }

  return result;
};

