To solve **"Maximum Difference Between Increasing Elements"**, we aim to find the **largest difference** `nums[j] - nums[i]` where:

* `0 <= i < j < n`
* `nums[i] < nums[j]`

---

### 🔍 **Approach (Greedy + Single Pass)**

#### 1. **Track the Minimum So Far (`minSoFar`)**

As you iterate through the array from left to right, keep track of the smallest value you've seen so far. This will represent the best possible `nums[i]` for any `nums[j]` you're currently looking at.

#### 2. **Calculate Difference When Current Element is Greater**

At each index `j`, if `nums[j] > minSoFar`, calculate the difference `nums[j] - minSoFar`, and update the `maxDifference` if this difference is greater than the current max.

#### 3. **Update the Minimum When Needed**

If `nums[j] <= minSoFar`, then update `minSoFar` because the current number could be a better candidate for `nums[i]` for future values of `j`.

---

### ✅ **Why It Works**

* Ensures `i < j` because we always compare current `j` with earlier values (`minSoFar`).
* Only considers valid pairs where `nums[i] < nums[j]`.
* Operates in **O(n)** time and **O(1)** space, which is optimal for this problem.

---

### ❌ Edge Case

If no such pair exists (i.e., array is strictly decreasing or all elements are equal), then return `-1`.

---

### 🧠 Summary

* Scan left to right.
* Track the **minimum element** seen so far.
* Compare current value to that minimum and update the **maximum difference**.
* Simple, greedy, and efficient.
