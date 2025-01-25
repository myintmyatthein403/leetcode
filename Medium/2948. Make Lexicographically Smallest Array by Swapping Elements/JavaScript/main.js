/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {

  // Sort the nums array
  const numsSorted = [...nums].sort((a, b) => a - b);

  let currGroup = 0;
  const numToGroup = new Map();
  numToGroup.set(numsSorted[0], currGroup);

  const groupToList = new Map();
  groupToList.set(currGroup, [numsSorted[0]]);

  // Assign groups to each number
  for (let i = 1; i < numsSorted.length; i++) {
    if (Math.abs(numsSorted[i] - numsSorted[i - 1]) > limit) {
      // New group
      currGroup++;
    }

    // Assign current element to group
    numToGroup.set(numsSorted[i], currGroup);

    // Add element to sorted group array (acting like a queue)
    if (!groupToList.has(currGroup)) {
      groupToList.set(currGroup, []);
    }
    groupToList.get(currGroup).push(numsSorted[i]);
  }

  // Overwrite the original nums array with the smallest lexicographical elements from each group
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const group = numToGroup.get(num);
    nums[i] = groupToList.get(group).shift();  // Get the smallest element and remove it
  }

  return nums;

};
