### 🎯 **Goal:**
Count the number of **good triplets (i, j, k)** such that `i < j < k`, and the relative order of elements in `nums1` and `nums2` match.

---

### 📌 **Key Concepts:**
1. **Fenwick Tree (Binary Indexed Tree):**  
   Used here for efficient prefix sum queries and updates. Helps count how many elements smaller than the current index have been processed (i.e., on the left).

2. **Index Mapping between Arrays:**  
   Since `nums1` and `nums2` are permutations (most likely unique elements), we can create a positional mapping of one array to the other. The goal is to work in one unified coordinate system.

---

### 🧠 **Step-by-Step Explanation:**

1. **Map positions:**  
   First, we build a position map from `nums2` — for each value, store its index. Then, we transform `nums1` into a new array that reflects the index of its elements in `nums2`.  
   This way, we reduce the problem to counting good triplets in a single array based on relative order.

2. **Process from left to right:**  
   For each position `i` in the transformed array:
   - **Left Count:** Use the Fenwick Tree to count how many values to the **left** of position `i` are also **less than** the current position — this becomes the `left` component of the triplet.
   - **Right Count:** Compute how many values can come **after** position `i` and still be greater — this is the `right` component.
   - **Update Tree:** Mark the current position as "seen" so future iterations will know it's part of the left.

3. **Calculate Triplets:**  
   The number of triplets with the current element as the middle one is `left * right`, and summing that across all positions gives the final answer.

---

### 💡 Intuition Behind `left * right`:
If you fix the middle element of a triplet, the number of valid `(i, k)` pairs around it is:
- Any of the `left` smaller values before it can be `i`
- Any of the `right` larger values after it can be `k`

So total combinations for that middle element: `left * right`.

---

### ⏱️ **Time Complexity:**
- O(n log n) — due to Fenwick Tree operations (`update` and `query`), which take `O(log n)` for each of the `n` elements.

