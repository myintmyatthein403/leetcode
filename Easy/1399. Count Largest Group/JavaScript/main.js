/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const groups = {};

  // Step 1: Group numbers by digit sum
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    if (groups[sum]) {
      groups[sum]++;
    } else {
      groups[sum] = 1;
    }
  }

  // Step 2: Find the maximum group size
  let maxSize = 0;
  for (const size of Object.values(groups)) {
    if (size > maxSize) {
      maxSize = size;
    }
  }

  // Step 3: Count how many groups have the maximum size
  let count = 0;
  for (const size of Object.values(groups)) {
    if (size === maxSize) {
      count++;
    }
  }

  return count;
};
