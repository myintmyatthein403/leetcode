Got it 👍 Let’s break this problem down step by step with an **approach and reasoning** (no code).

---

### Problem Restatement

We are given a binary array `nums` (only `0`s and `1`s).
We **must delete exactly one element**, then find the **longest contiguous subarray consisting only of `1`s**.

Key detail:

* Even if the array is all `1`s, we **must delete one element**, so the maximum length will be `n - 1`.

---

### Step-by-Step Approach

1. **Think in terms of subarrays separated by `0`s**

   * Each `0` in the array breaks the sequence of `1`s into left and right parts.
   * If we delete that `0`, we can **merge** the consecutive runs of `1`s on its left and right.

   Example:

   ```
   nums = [1,1,0,1,1,1]
   Left of zero: length = 2
   Right of zero: length = 3
   Merge by deleting the zero → total = 2 + 3 = 5
   ```

2. **Sliding window / two pointers idea**

   * You want to find the longest window where there’s **at most one `0`** (because deleting that one makes the whole window all `1`s).
   * This works because in such a window, if you remove the zero, the rest are continuous `1`s.

   Example:

   ```
   nums = [0,1,1,1,0,1,1,0,1]
   Window with at most one zero: [1,1,1,0,1,1] → length = 6
   After deleting the `0`, the longest = 5
   ```

3. **Special case: all 1’s**

   * If the entire array is `1`s, we **must delete one element**.
   * So answer = `len(nums) - 1`.

4. **Algorithm in words**

   * Use a sliding window with two pointers (`left` and `right`).
   * Keep track of how many `0`s are inside the window.
   * Expand `right`. If there are more than one `0`, shrink from the left until only one `0` remains.
   * Track the maximum window length seen.
   * At the end, subtract 1 (because one element must be deleted).

---

### Why this works

* The sliding window ensures we always look at subarrays that could become all `1`s if we remove just one `0`.
* By maximizing this window length, we’re effectively finding the longest possible subarray of `1`s after deletion.

---

✅ **Time Complexity:** `O(n)` (we scan the array once with two pointers).
✅ **Space Complexity:** `O(1)` (only a few variables).

---
