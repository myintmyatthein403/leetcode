To solve **Leetcode 1695. Maximum Erasure Value**, the goal is to find the **maximum sum of a contiguous subarray with all unique elements**.

---

### 🧠 **Core Idea**

Use the **sliding window** (or two-pointer) approach to keep track of a subarray where all elements are unique. As we move through the array:

* Expand the window to include new elements if they are unique.
* Shrink the window from the left if a duplicate is found.
* Track the sum of the current window and update the max score.

---

### ✅ **Why Sliding Window?**

* We're dealing with a contiguous subarray → sliding window is optimal.
* We want to maintain **uniqueness** of elements → need a **set or hashmap** to track seen values in the window.
* We aim for an efficient solution: **O(n)** time, where `n = nums.length`.

---

### 📶 **Approach**

1. **Two pointers** (`left`, `right`) define the current window.
2. Use a **set** (or map) to keep track of elements in the window.
3. Use a **variable to store current window sum**.
4. When a duplicate is found at `right`, shrink the window from the left until the duplicate is removed.
5. Update the **maximum score** seen so far at each step.

---

### 🧪 **Example Walkthrough**

For input: `[4,2,4,5,6]`

* Start with window `[4]`, sum = 4
* Expand to `[4,2]`, sum = 6
* Expand to `[4,2,4]` → **duplicate 4**

  * Remove from left → window becomes `[2,4]`, sum = 6
* Continue expanding → `[2,4,5]` → sum = 11
* Expand → `[2,4,5,6]` → sum = 17 → **max**

---

### 💡 **Real-World Analogy**

Imagine you're scanning a playlist for the **longest streak of unique songs** and want the **highest total duration**. Once a song repeats, you skip back until only unique songs remain and continue scanning.

---

### ⏱️ **Time and Space Complexity**

* **Time:** O(n), each element is added/removed from the set at most once.
* **Space:** O(n) in the worst case, if all elements are unique.
