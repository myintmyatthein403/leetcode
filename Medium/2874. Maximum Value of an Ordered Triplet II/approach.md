To solve this problem efficiently, we need to maximize the value of the expression:  

\[
(nums[i] - nums[j]) \times nums[k]
\]

where \( i < j < k \). Here’s the structured approach:

---

### **1. Understanding the Expression**
The triplet value depends on:
- \( nums[i] - nums[j] \), which should be **as large as possible**.
- \( nums[k] \), which should be **as large as possible**.

To achieve the maximum value, we should:
- Find a **large** \( nums[i] \) that appears **before** \( nums[j] \).
- Find a **small** \( nums[j] \) in the middle.
- Find a **large** \( nums[k] \) appearing **after** \( nums[j] \).

---

### **2. Brute Force Approach (O(n³))**
- Check all possible \( (i, j, k) \) triplets.
- Compute \( (nums[i] - nums[j]) \times nums[k] \).
- Track the maximum value.

This is inefficient for large arrays, so we need optimization.

---

### **3. Optimized Approach (O(n²))**
We break it down into **two steps**:

#### **Step 1: Precompute the Best \( nums[i] \) for Each \( j \)**
- Maintain a **running maximum** from the left:  
  - Let `max_left[j]` store the largest `nums[i]` found **before** index `j`.
  - This helps quickly compute `nums[i] - nums[j]` in O(1) instead of iterating over `i`.

#### **Step 2: Find the Best \( nums[k] \) for Each \( j \)**
- Iterate `j` from left to right.
- Iterate `k` from `j+1` to the end.
- Keep track of `max_right[k]`, which stores the largest `nums[k]` found **after** index `j`.
- Compute the triplet value efficiently.

---

### **4. Handling Negative Values**
- If the maximum computed value is **negative**, return **0**.

---

### **5. Complexity Analysis**
- **Precomputing `max_left[j]` → O(n)**  
- **Iterating over `j` and `k` efficiently → O(n²)**  
- **Total complexity: O(n²)**, which is much better than brute force **O(n³)**.

---

### **Final Thoughts**
- **Brute force (O(n³))** works for small `n` but is too slow for large `n`.  
- **Optimized approach (O(n²))** efficiently tracks maximum values while iterating.  
- **Edge case:** If all possible triplet values are negative, return `0`.  

Would you like me to implement this approach? 🚀
