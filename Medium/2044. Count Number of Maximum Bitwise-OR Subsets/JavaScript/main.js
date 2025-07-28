/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let maxOr = 0;
  let count = 0;

  // Step 1: Find the maximum possible OR
  for (let num of nums) {
    maxOr |= num;
  }

  // Step 2: DFS to count how many subsets give maxOr
  const dfs = (index, currentOr) => {
    if (index === nums.length) {
      if (currentOr === maxOr) {
        count++;
      }
      return;
    }

    // Include current number
    dfs(index + 1, currentOr | nums[index]);

    // Exclude current number
    dfs(index + 1, currentOr);
  };

  dfs(0, 0);
  return count;
};
