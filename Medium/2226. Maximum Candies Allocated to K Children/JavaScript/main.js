/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  if (k === 0) return 0; // Edge case: No children to distribute candies

  let low = 1, high = Math.max(...candies), result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = 0;

    // Calculate how many children can get at least `mid` candies
    for (let candy of candies) {
      count += Math.floor(candy / mid);
    }

    if (count >= k) {
      // We can distribute at least `mid` candies per child
      result = mid;
      low = mid + 1; // Try a larger `mid`
    } else {
      high = mid - 1; // Reduce `mid`
    }
  }

  return result;
};


