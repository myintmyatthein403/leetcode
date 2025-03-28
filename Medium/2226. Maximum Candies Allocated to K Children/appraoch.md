### **Approach: Binary Search on the Maximum Candies Per Child**

The problem requires us to find the maximum number of candies that each child can receive while ensuring that every child gets the same amount and only from a single pile (which can be split but not merged). We can approach this problem using **binary search on the answer**.

---

### **1. Understanding the Problem Constraints**
- We can **split** a pile into multiple smaller piles.
- Each child gets candies from **only one** pile.
- Some piles **may not be used**.
- The goal is to **maximize** the number of candies each child gets.

---

### **2. Observations**
- If we set a target of `x` candies per child, we need to check if it is possible to allocate `k` children with at least `x` candies each.
- A pile of size `candies[i]` can be split into `candies[i] / x` sub piles.
- The total number of children that can be satisfied with `x` candies each is the sum of `candies[i] / x` over all piles.

---

### **3. Using Binary Search on the Maximum Possible Candies**
1. **Lower Bound:** `low = 1` (the smallest possible amount of candies a child can receive).
2. **Upper Bound:** `high = max(candies)` (the largest single pile, since no child can receive more than this).
3. **Binary Search:**
   - Try a middle value `mid = (low + high) / 2` as the possible candies per child.
   - Compute how many children can be satisfied by summing up `candies[i] / mid` across all piles.
   - If we can satisfy `k` children, increase `low` (try to give more candies per child).
   - Otherwise, decrease `high` (reduce the expected candies per child).

---

### **4. Termination and Result**
- The binary search stops when `low > high`, and the last valid value of `mid` is the answer.
- If `k` children cannot be satisfied at any `x > 0`, return `0`.

---

### **5. Complexity Analysis**
- Sorting is **not** needed.
- The binary search runs in **O(log(max(candies)))**.
- Checking feasibility for a given `x` takes **O(n)** (where `n` is the number of elements in `candies`).
- The total complexity is **O(n log(max(candies)))**, which is efficient for large inputs.

---

### **6. Edge Cases**
- If `k` is greater than the total number of candies, return `0`.
- If there is exactly `k` candies, each child gets `1` candy.
- If `k == 1`, return `max(candies)`, since one child can take the largest pile.
