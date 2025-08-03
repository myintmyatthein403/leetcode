To solve [2106. Maximum Fruits Harvested After at Most K Steps](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/), the key challenge is **optimizing traversal of the fruits array under the `k` step constraint** — especially since the array size can be up to `10^5`, which makes naive solutions prone to **Time Limit Exceeded (TLE)** errors.

---

### ❗ What Causes TLE?

A **brute-force approach** might try:

* For every possible left and right combination of steps (e.g., go `x` steps left, `k - 2x` steps right), check all reachable fruits.
* Iterate through every subarray that could be harvested within `k` steps.

But:

* There are up to `10^5` fruit positions.
* Trying all combinations of left/right walking can result in **quadratic time** (`O(n^2)` worst case).
* That quickly leads to TLE.

---

### ✅ Efficient Approach (Sliding Window + Two Walking Strategies)

To avoid TLE, use **sliding window + prefix sum** to efficiently explore valid subarrays. There are **two walking strategies** to consider:

#### 1. **Walk Left Then Right**:

* Go `x` steps left from `startPos`.
* Then go right up to `k - 2x` steps (you must return to the starting position before continuing).

#### 2. **Walk Right Then Left**:

* Go `x` steps right from `startPos`.
* Then go left up to `k - 2x` steps.

For each strategy:

* Maintain a **sliding window** of positions whose total movement cost is ≤ `k`.
* Use **prefix sums** or a running total to calculate how many fruits are in the current window.

This reduces the complexity to **O(n)** — each fruit position is processed once or twice in the sliding window.

---

### Summary of the Optimized Plan

* Use **two pointers** (sliding window) to check valid subarrays of fruit positions.
* Ensure the **total movement cost** from `startPos` to both ends of the window fits within `k` using walking logic.
* Keep track of the **maximum harvested fruits** from all valid windows.
* This yields **linear time** with respect to the number of fruit positions → **no TLE**.

---

### Why This Works Within Time Limits

* Input size: `n ≤ 10^5`
* Algorithm time: `O(n)` using sliding window + prefix sum
* Avoids nested loops or repeated subarray computations
* Well-suited for sorted input (as given)

---
