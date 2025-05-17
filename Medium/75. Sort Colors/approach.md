To solve LeetCode [75. Sort Colors](https://leetcode.com/problems/sort-colors/) **in-place** and **without using sort functions**, the best known approach is the **Dutch National Flag algorithm** by Edsger Dijkstra. Here's a step-by-step explanation:

---

### **Problem Summary**

You are given an array with only three types of elements:

* `0` → red
* `1` → white
* `2` → blue

You need to **rearrange** the array so that all `0`s come first, then all `1`s, followed by all `2`s — **in one pass if possible**, using **constant extra space**.

---

### **Approach: Dutch National Flag Algorithm**

This approach uses **three pointers**:

* `low`: tracks the position where the next `0` should go.
* `mid`: current element under consideration.
* `high`: tracks the position where the next `2` should go.

#### **Algorithm Steps**

1. Initialize:

   * `low = 0`
   * `mid = 0`
   * `high = n - 1`

2. Traverse the array with the `mid` pointer:

   * If `nums[mid] == 0`:

     * Swap `nums[low]` and `nums[mid]`
     * Increment both `low` and `mid`
   * If `nums[mid] == 1`:

     * It's already in the right place → just increment `mid`
   * If `nums[mid] == 2`:

     * Swap `nums[mid]` and `nums[high]`
     * Decrement `high` only (don't increment `mid` yet, because the new value at `mid` needs to be re-evaluated)

3. Stop when `mid > high`.

---

### **Why This Works**

* You maintain three regions:

  * Left region for `0`s
  * Middle region for `1`s (in-progress scanning)
  * Right region for `2`s
* Since you're only swapping and scanning once, the time complexity is **O(n)**.
* Only a constant number of variables are used → **O(1) space**.

---

### **When to Use This**

This pattern is useful when:

* There are only **a few distinct values** in an array (like 0, 1, 2)
* You need to sort **in-place**
* Optimal linear time is required
