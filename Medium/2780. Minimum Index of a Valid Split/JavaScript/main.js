/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  const n = nums.length;
  const counts = new Map();
  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let dominant = -1;
  let maxCount = 0;
  for (const [num, count] of counts) {
    if (count > maxCount) {
      maxCount = count;
      dominant = num;
    }
  }

  if (maxCount <= n / 2) {
    return -1;
  }

  let leftCount = 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === dominant) {
      leftCount++;
    }
    if (leftCount * 2 > (i + 1) && (maxCount - leftCount) * 2 > (n - i - 1)) {
      return i;
    }
  }

  return -1;
};
