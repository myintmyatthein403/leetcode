To solve **[3487. Maximum Unique Subarray Sum After Deletion](https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/)** optimally, here's a step-by-step explanation of the **approach** without code:

---

### ✅ **Goal**

Maximize the sum of a **subarray** where all elements are **unique**, and we are **allowed to delete elements** from the original array first. The array cannot be empty after deletion.

---

### 🔍 **Key Observations**

1. **Duplicates and negatives** can hurt the sum or break the uniqueness requirement.
2. We can **delete any elements** we want — so we can skip over duplicates and low-value elements to form the best possible unique subarray.
3. The problem reduces to finding the **maximum sum of any contiguous subarray with unique elements**, considering we can delete anything in between.

---

### 🧠 **Core Strategy**

Use the **sliding window technique** with a **set** to keep track of unique elements in the current window.

* Move a window (start → end) across the array.
* Add elements to the window as long as they are **unique**.
* If a duplicate is found, **shrink the window from the left** until it's unique again.
* Maintain a running **sum** of the current window and update the **maximum sum** found.

This approach naturally skips over duplicates and allows "deletion" by simply not including those elements in the current window.

---

### 💡 Why This Works with Deletion Allowed

Since we can delete any number of elements, we are **free to skip bad values** (negatives, duplicates, etc.) and only select the best contiguous window. The sliding window simulates this by dynamically growing and shrinking to maintain the unique constraint and maximize the sum.

---

### ⏱️ Time Complexity

* **O(n)**: Each element is added and removed from the window at most once.

---

### ✅ Summary

* Use a **sliding window** to maintain a window of **unique elements**.
* **Shrink** the window when duplicates are found.
* Keep track of the **current sum** and update the **maximum** as you go.
* The deletions are **implicitly handled** by not including elements in the window.

This efficiently gives the maximum sum of a unique-element subarray after optimal deletions.
