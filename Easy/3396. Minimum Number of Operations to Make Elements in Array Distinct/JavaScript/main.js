/**
* @param {number[]} nums
* @return {number}
*/
var minimumOperations = function (nums) {
  const isDistinct = (arr) => {
    if (!arr || arr.length === 0) {
      return true;
    }
    const seen = new Set();
    for (const num of arr) {
      if (seen.has(num)) {
        return false;
      }
      seen.add(num);
    }
    return true;
  };

  if (isDistinct(nums)) {
    return 0;
  }

  let operations = 0;
  let startIndex = 0;

  while (startIndex < nums.length) {
    operations++;
    startIndex += 3;
    const remainingArray = nums.slice(startIndex);
    if (isDistinct(remainingArray)) {
      return operations;
    }
  }

  return operations; // If the loop finishes, it means we eventually emptied the array
};
