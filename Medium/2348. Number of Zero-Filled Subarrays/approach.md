Alright, let’s break this down step by step.

We need to count **all subarrays made only of 0’s**.

---

### 🔑 Key Observations

1. **Subarray definition** → contiguous part of the array.
2. If we find a streak of consecutive zeros of length `k`, then:

   * We can form subarrays of size `1`, `2`, …, `k` from it.
   * The total number of such subarrays =

     $$
     1 + 2 + 3 + … + k = \frac{k \cdot (k+1)}{2}
     $$
3. So instead of enumerating all subarrays, we just need to **find streaks of consecutive zeros** and apply the formula.

---

### 🔎 Approach

1. **Traverse the array** while keeping track of consecutive zeros.
2. Whenever you hit a zero:

   * Increase a running counter `count` of consecutive zeros.
   * Each time you extend the streak by one zero, that zero itself contributes `count` new subarrays (because it extends all previous streaks plus itself).
3. Whenever you hit a non-zero:

   * Reset the consecutive zero counter to `0`.

---

### ✅ Example Walkthrough

#### Example: `nums = [1,3,0,0,2,0,0,4]`

* `[1,3]` → no zeros yet.
* Hit `0` → streak length = 1 → contributes `1` subarray: `[0]`.
* Next `0` → streak length = 2 → contributes `2` subarrays: `[0]`, `[0,0]`.
* Hit `2` → reset streak.
* Next `0` → streak length = 1 → contributes `1` subarray.
* Next `0` → streak length = 2 → contributes `2` subarrays.
* Hit `4` → reset.

Total = `1 + 2 + 1 + 2 = 6`.

---

### ⚡ Complexity

* **Time Complexity:** `O(n)` (single pass through array).
* **Space Complexity:** `O(1)` (only counters are used).

---

👉 So the trick is:
**Each zero extends the current streak, and contributes exactly `streak_length` new zero-filled subarrays.**

---
