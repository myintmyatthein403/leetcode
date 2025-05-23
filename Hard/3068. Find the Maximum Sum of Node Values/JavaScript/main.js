/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  const n = nums.length;
  const memo = Array.from({ length: n }, () => Array(2).fill(-1));

  const maxSumOfNodes = (index, isEven) => {
    if (index === n) {
      // If the operation is performed on an odd number of elements return -Infinity
      return isEven === 1 ? 0 : -Infinity;
    }
    if (memo[index][isEven] !== -1) {
      return memo[index][isEven];
    }

    // No XOR operation on the current element
    const noXorDone = nums[index] + maxSumOfNodes(index + 1, isEven);
    // XOR operation on the current element
    const xorDone = (nums[index] ^ k) + maxSumOfNodes(index + 1, isEven ^ 1);

    memo[index][isEven] = Math.max(noXorDone, xorDone);
    return memo[index][isEven];
  };

  return maxSumOfNodes(0, 1);
};
