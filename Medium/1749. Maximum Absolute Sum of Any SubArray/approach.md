### **Approach: Kadane's Algorithm for Maximum and Minimum Subarrays**

This problem can be efficiently solved using a variation of **Kadane’s Algorithm**, which is typically used to find the **maximum sum subarray** in linear time.

Since we are interested in the **absolute maximum subarray sum**, we need to track both:
1. The **maximum sum subarray** (positive sum).
2. The **minimum sum subarray** (negative sum).

The key insight is:
- The largest absolute sum of any subarray will be either the maximum sum subarray or the absolute value of the minimum sum subarray.

---

### **Steps to Solve**
1. **Iterate through the array** and maintain two running sums:
   - `max_sum`: The largest sum subarray ending at the current index.
   - `min_sum`: The smallest sum subarray ending at the current index.

2. **Update running sums** dynamically:
   - `max_sum`: Either extend the previous subarray (`max_sum + nums[i]`) or start a new one (`nums[i]`).
   - `min_sum`: Either extend the previous subarray (`min_sum + nums[i]`) or start a new one (`nums[i]`).

3. **Track global maximums**:
   - Maintain `max_absolute_sum`, which is the maximum of `abs(max_sum)` and `abs(min_sum)` found so far.

4. **Return the maximum absolute sum** at the end.

---

### **Time Complexity**
- **O(n)**: Since we traverse the array once, updating only a few variables in each step.

### **Why This Works?**
- **Kadane’s Algorithm** ensures we efficiently find the largest contiguous sum.
- Since negative sums can contribute to large absolute values, tracking the **minimum subarray sum** captures cases where the largest absolute value comes from a highly negative sum.
- **Taking the max of absolute values** ensures we get the desired result.

---

### **Example Walkthrough**
#### **Example 1: `nums = [1, -3, 2, 3, -4]`**
- Maximum sum subarray: `[2,3] → sum = 5`
- Minimum sum subarray: `[-3, 2, 3, -4] → sum = -4`
- Absolute max sum = `max(5, | -4 |) = 5`

#### **Example 2: `nums = [2, -5, 1, -4, 3, -2]`**
- Maximum sum subarray: `[3] → sum = 3`
- Minimum sum subarray: `[-5,1,-4] → sum = -8`
- Absolute max sum = `max(3, | -8 |) = 8`

---

This approach guarantees an optimal and efficient solution in **O(n) time** with **O(1) space**. 🚀
