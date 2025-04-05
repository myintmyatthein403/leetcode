/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sum = 0;

  function generateSubsets(index, currentSubset) {
    if (index === nums.length) {
      let xorTotal = 0;
      for (let num of currentSubset) {
        xorTotal ^= num;
      }
      sum += xorTotal;
      return;
    }

    // Include the current number
    generateSubsets(index + 1, [...currentSubset, nums[index]]);

    // Exclude the current number
    generateSubsets(index + 1, currentSubset);
  }

  generateSubsets(0, []);
  return sum;
};
