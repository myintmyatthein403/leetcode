/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  // 1. Initialize the variables
  var n = nums.length;
  var sum = Array(n + 1).fill(0);
  var left = Array(n).fill(0);
  var right = Array(n).fill(0);

  // 2. Calculate the sum of the subarray
  for (var i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  console.log('sum:', sum);

  // 3. Calculate the left maxSumOfThreeSubarrays
  var total = sum[k] - sum[0];
  console.log('total [left]:', total);
  for (var i = k; i < n; i++) {
    if (sum[i + 1] - sum[i + 1 - k] > total) {
      left[i] = i + 1 - k;
      total = sum[i + 1] - sum[i + 1 - k];
    } else {
      left[i] = left[i - 1];
    }
  }
  console.log('left:', left);

  // 4. Calculate the right maxSumOfThreeSubarrays
  total = sum[n] - sum[n - k];
  console.log('total [right]:', total);
  right[n - k] = n - k;
  console.log('right [n - k]:', right);
  for (var i = n - k - 1; i >= 0; i--) {
    if (sum[i + k] - sum[i] >= total) {
      right[i] = i;
      total = sum[i + k] - sum[i];
    } else {
      right[i] = right[i + 1];
    }
  }
  console.log('right:', right);

  // 5. Calculate the maxSumOfThreeSubarrays
  var max = 0;
  var result = [];
  for (var i = k; i <= n - 2 * k; i++) {
    var l = left[i - 1];
    var r = right[i + k];
    var total = sum[l + k] - sum[l] + sum[i + k] - sum[i] + sum[r + k] - sum[r];
    if (total > max) {
      max = total;
      result = [l, i, r];
    }
  }
  return result;
};


// Test case
console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2)); // [0, 3, 5]
console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2)); // [0, 2, 4]
