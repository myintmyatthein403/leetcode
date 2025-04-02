### **Approach: Optimized Brute Force with Precomputed Minimums**

The goal is to maximize the value of the triplet \((i, j, k)\), where:

\[
\text{value} = (nums[i] - nums[j]) \times nums[k]
\]

Given the constraints, an exhaustive brute force approach (\(O(N^3)\)) would be too slow. Instead, we can optimize by strategically tracking key values.

---

### **Key Observations**
1. **Choosing \( j \) wisely**  
   - Since \( (nums[i] - nums[j]) \) is involved, we want \( nums[i] \) to be as large as possible and \( nums[j] \) to be as small as possible to maximize \( (nums[i] - nums[j]) \).
   - The multiplication by \( nums[k] \) means that we should also aim for the largest possible \( nums[k] \).

2. **Precomputing Useful Values**
   - Instead of checking all possible \( i \), for each \( j \), we maintain the **minimum value of \( nums[i] \) seen so far** (before \( j \)).
   - Similarly, instead of checking all possible \( k \), we keep track of the **maximum value of \( nums[k] \) seen so far** (after \( j \)).

---

### **Optimized Approach**
1. **Iterate Over \( j \) (Middle Element)**
   - For each \( j \), assume \( nums[j] \) is the middle element.
   - Keep track of **`min_so_far[i]`** (smallest element before \( j \)).
   - Keep track of **`max_so_far[k]`** (largest element after \( j \)).

2. **Compute Possible Values Efficiently**
   - For each \( j \), compute \((\text{min_so_far}[j] - nums[j]) \times \text{max_so_far}[j]\).
   - Update the maximum value encountered.

3. **Return Result**
   - If the maximum value is negative, return `0`, else return the maximum.

---

### **Time Complexity Analysis**
- **Precompute `min_so_far[i]`** → \(O(N)\)
- **Precompute `max_so_far[k]`** → \(O(N)\)
- **Iterate Over \( j \) and Compute Max** → \(O(N)\)

**Total Complexity: \( O(N) \)**

This approach efficiently finds the optimal triplet using precomputed values, making it much faster than brute force. 🚀
