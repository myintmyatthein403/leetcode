To solve **Leetcode 3405: Count the Number of Arrays with K Matching Adjacent Elements**, the goal is to **count how many arrays of length `n` using numbers from `1` to `m` have exactly `k` adjacent equal pairs**.

---

### 🔍 **Key Observations:**

1. The array has `n - 1` adjacent pairs.
2. We must **choose exactly `k` of those pairs to be matching**.
3. The rest (`n - 1 - k`) pairs must be **different** from the previous element.

---

### 🧠 **Approach Overview (Dynamic Programming / Combinatorics):**

We build the array from left to right and keep track of:

* The number of adjacent matches so far (from 0 to `k`).
* The number of ways to form such sequences.

Let’s denote:

* `dp[i][j]` = number of arrays of length `i` with **exactly `j` adjacent equal elements**.

---

### 🧱 **Transition Logic:**

At each step `i`, for each `j` (number of adjacent equal elements so far):

* **Case 1: `arr[i] == arr[i - 1]`**

  * We increase `j` by 1.
  * This can only happen in **`1` way** (must choose the same value as `arr[i-1]`).

* **Case 2: `arr[i] != arr[i - 1]`**

  * `j` stays the same.
  * We can pick any of the remaining `m - 1` values (different from `arr[i-1]`).

---

### 🔁 **Initialization:**

* For position `1`, we can choose any value from `1` to `m` — so `dp[1][0] = m`.

---

### 🧮 **Final Result:**

* The answer is `dp[n][k]`, the number of arrays of length `n` with exactly `k` adjacent equal elements.

---

### 💡 **Optimizations:**

* Instead of a full 2D DP table, use two 1D arrays (`prev`, `curr`) since each step depends only on the previous step.
* Use modulo `10^9 + 7` to prevent overflow.

---

### 📈 Time & Space Complexity:

* **Time:** `O(n * k)`
* **Space:** `O(k)` (with optimized 1D DP)

---

This structured dynamic programming approach leverages the constraints on adjacent elements and combinatorial possibilities efficiently.
