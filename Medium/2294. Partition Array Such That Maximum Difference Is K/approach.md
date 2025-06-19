To solve **Leetcode 2294. Partition Array Such That Maximum Difference Is K**, we want to **minimize the number of subsequences** such that **in each subsequence, the max difference between any two elements is at most `k`**.

### ✅ Key Observations:

1. **Subsequence vs Subarray**:

   * A **subsequence** does **not** need to be contiguous, but **order must be preserved**.
   * However, **sorting** helps because the relative order doesn’t matter as long as we partition wisely.

2. **Main Goal**:

   * Group elements together such that:

     * The **difference between max and min** in each group ≤ `k`.
     * Use as **few groups** as possible.

---

### 💡 Approach (Greedy + Sorting):

1. **Sort the array**:

   * This simplifies the grouping process — similar values come together, and differences grow gradually.

2. **Greedy Grouping**:

   * Traverse the sorted array and **start a new subsequence only when needed**.
   * Keep track of the **start of the current subsequence**.
   * As long as the current number minus the start number is ≤ `k`, keep adding to the group.
   * If the difference becomes > `k`, **start a new group**.

3. **Why this works?**

   * Sorting ensures you can group numbers with minimal difference.
   * Greedily extending the current group until the constraint is violated ensures **minimal number of groups**.

---

### ⏱️ Time Complexity:

* Sorting: `O(n log n)`
* One pass to group: `O(n)`
* **Total: `O(n log n)`**

This is optimal and works well for `n` up to `10^5`.

---

### 🧠 Real-world analogy:

Think of arranging people into rooms such that the difference in their ages in each room is ≤ `k`. Sorting by age, then grouping greedily ensures minimum rooms used.
