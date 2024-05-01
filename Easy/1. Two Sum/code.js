/**
 *  @param {number[]} nums
 *  @param {number} target
 *  @return {number[]}
 */

var twoSum = function (nums, target) {
  const numIndicesMap = {};

  return nums.reduce((result, num, index) => {
    const complement = target - num;

    if (numIndicesMap?.hasOwnProperty(complement)) {
      result?.push(numIndicesMap[complement], index);
    }
    numIndicesMap[num] = index;
    return result;
  }, []);
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
