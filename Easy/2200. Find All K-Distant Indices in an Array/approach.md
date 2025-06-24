To solve **"2200. Find All K-Distant Indices in an Array"**, we can break the problem into two main steps. Here's the **approach and explanation** (without code):

---

### **1. Identify All Key Indices**

* First, go through the array and **collect the indices `j` where `nums[j] == key`**.
* These are the **anchor points** that define possible k-distant ranges.

---

### **2. Mark K-Distant Ranges**

* For every index `j` found in step 1:

  * Compute the **range of indices** from `j - k` to `j + k`.
  * This range includes all `i` where `|i - j| <= k`.
  * Make sure to **stay within the array bounds** (`0` to `nums.length - 1`).
  * Add all these valid indices to a set or result list.

---

### **3. Return Sorted Result**

* Since some ranges may overlap, use a **set** or **deduplicate** the list.
* Finally, **sort the indices in increasing order** before returning.

---

### **Time Complexity Insight**

* Step 1 is `O(n)` to find key positions.
* Step 2 is also efficient because for each key index, we scan a small range of at most `2k + 1` values.
* Overall, this is efficient enough given `n ≤ 1000`.

---

### **Real-World Analogy**

Imagine placing signal towers (key indices) with a signal range of `k`. You want to list all locations (indices) that can receive signal from **at least one** tower.

---

This method ensures all valid indices are considered and duplicates are handled correctly.
