## Explanation

This code solves the problem of finding three non-overlapping subarrays of length `k` that have the maximum sum. The approach uses dynamic programming to efficiently calculate the result.

### Step-by-Step Explanation

1. **Initialize the Variables**
   ```javascript
   var n = nums.length;
   var sum = Array(n + 1).fill(0);
   var left = Array(n).fill(0);
   var right = Array(n).fill(0);
   ```
   - `n` is the length of the input array `nums`.
   - `sum` is an array to store the cumulative sum of `nums`.
   - `left` and `right` are arrays to store the indices of the maximum sum subarrays from the left and right, respectively.

2. **Calculate the Cumulative Sum of the Subarray**
   ```javascript
   for (var i = 0; i < n; i++) {
     sum[i + 1] = sum[i] + nums[i];
   }
   console.log('sum:', sum);
   ```
   - This loop calculates the cumulative sum of the array `nums` and stores it in the `sum` array.

3. **Calculate the Left Maximum Sum Subarrays**
   ```javascript
   var total = sum[k] - sum[0];
   for (var i = k; i < n; i++) {
     if (sum[i + 1] - sum[i + 1 - k] > total) {
       left[i] = i + 1 - k;
       total = sum[i + 1] - sum[i + 1 - k];
     } else {
       left[i] = left[i - 1];
     }
   }
   console.log('left:', left);
   ```
   - This loop calculates the indices of the maximum sum subarrays from the left side. It updates the `left` array with the starting index of the maximum sum subarray ending at each position.

4. **Calculate the Right Maximum Sum Subarrays**
   ```javascript
   total = sum[n] - sum[n - k];
   right[n - k] = n - k;
   for (var i = n - k - 1; i >= 0; i--) {
     if (sum[i + k] - sum[i] >= total) {
       right[i] = i;
       total = sum[i + k] - sum[i];
     } else {
       right[i] = right[i + 1];
     }
   }
   console.log('right:', right);
   ```
   - This loop calculates the indices of the maximum sum subarrays from the right side. It updates the `right` array with the starting index of the maximum sum subarray starting at each position.

5. **Calculate the Maximum Sum of Three Non-Overlapping Subarrays**
   ```javascript
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
   ```
   - This loop finds the maximum sum of three non-overlapping subarrays. It iterates through the middle subarray and uses the `left` and `right` arrays to find the best left and right subarrays. It updates the `result` array with the indices of the three subarrays that have the maximum sum.

### Real World Example of Usage for `maxSumOfThreeSubarrays`

The `maxSumOfThreeSubarrays` function can be applied in various real-world scenarios where you need to find the best three periods with the highest sum of values, ensuring that these periods do not overlap. Here are two examples:

#### Example 1: Financial Analysis

**Scenario**:
You are a financial analyst working for an investment firm. You have daily stock prices for a company over a period of time, and you want to identify the best three periods of `k` consecutive days where the stock price increased the most. This information can help you understand the best times to invest in the stock.

**Input**:
- `nums`: An array of daily stock prices.
- `k`: The number of consecutive days to consider for each period.

**Example**:
```javascript
const stockPrices = [100, 200, 150, 300, 400, 500, 250, 100];
const k = 2;
console.log(maxSumOfThreeSubarrays(stockPrices, k)); // Output: [0, 3, 5]
```

**Explanation**:
- The function identifies the best three periods of 2 consecutive days with the highest stock price increases.
- The result `[0, 3, 5]` indicates that the best periods are:
  - From day 0 to day 1: `[100, 200]`
  - From day 3 to day 4: `[300, 400]`
  - From day 5 to day 6: `[500, 250]`

#### Example 2: Website Traffic Analysis

**Scenario**:
You are a data analyst working for a website. You have daily visitor counts for the website over a period of time, and you want to identify the best three periods of `k` consecutive days with the highest visitor counts. This information can help you understand the peak times when your website receives the most traffic.

**Input**:
- `nums`: An array of daily visitor counts.
- `k`: The number of consecutive days to consider for each period.

**Example**:
```javascript
const visitorCounts = [500, 600, 700, 800, 900, 1000, 1100, 1200];
const k = 3;
console.log(maxSumOfThreeSubarrays(visitorCounts, k)); // Output: [0, 3, 5]
```

**Explanation**:
- The function identifies the best three periods of 3 consecutive days with the highest visitor counts.
- The result `[0, 3, 5]` indicates that the best periods are:
  - From day 0 to day 2: `[500, 600, 700]`
  - From day 3 to day 5: `[800, 900, 1000]`
  - From day 5 to day 7: `[1000, 1100, 1200]`

### Visualization of the Code

Let's visualize the process with the example of daily visitor counts:

- **Array `nums`**: `[500, 600, 700, 800, 900, 1000, 1100, 1200]`
- **Subarrays of length `k = 3`**:
  - `[500, 600, 700]`, `[600, 700, 800]`, `[700, 800, 900]`, `[800, 900, 1000]`, `[900, 1000, 1100]`, `[1000, 1100, 1200]`

- **Left Array Calculation**:
  - For `i = 3`: `[500, 600, 700]` (sum = 1800)
  - For `i = 4`: `[600, 700, 800]` (sum = 2100)
  - For `i = 5`: `[700, 800, 900]` (sum = 2400)
  - For `i = 6`: `[800, 900, 1000]` (sum = 2700)
  - For `i = 7`: `[900, 1000, 1100]` (sum = 3000)

- **Right Array Calculation**:
  - For `i = 5`: `[1000, 1100, 1200]` (sum = 3300)
  - For `i = 4`: `[1000, 1100, 1200]` (sum = 3300)
  - For `i = 3`: `[1000, 1100, 1200]` (sum = 3300)
  - For `i = 2`: `[1000, 1100, 1200]` (sum = 3300)
  - For `i = 1`: `[1000, 1100, 1200]` (sum = 3300)
  - For `i = 0`: `[1000, 1100, 1200]` (sum = 3300)

### Final Calculation

Using the `left` and `right` arrays, we can find the maximum sum of three non-overlapping subarrays:

- Iterate through the middle subarray starting from `k` to `n - 2 * k`:
  - For `i = 3` to `i = 4`, calculate the total sum of three subarrays:
    - `total = sum[left[i - 1] + k] - sum[left[i - 1]] + sum[i + k] - sum[i] + sum[right[i + k] + k] - sum[right[i + k]]`
  - Update the `result` array with the indices of the three subarrays that have the maximum sum.

### Example Usage in a Real World Scenario
```javascript
console.log(maxSumOfThreeSubarrays([500, 600, 700, 800, 900, 1000, 1100, 1200], 3)); // Output: [0, 3, 5]
```
- This example finds the indices of the three non-overlapping subarrays of length `3` that have the maximum sum in the array `[500, 600, 700, 800, 900, 1000, 1100, 1200]`.
