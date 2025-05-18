To solve **Leetcode 1931: Painting a Grid With Three Different Colors**, we need to calculate the number of valid ways to paint an `m x n` grid using **three colors** (say Red, Green, and Blue), **such that no two adjacent cells (horizontally or vertically) share the same color**.

---

### 🔍 **Understanding the Problem**

Each cell must be painted, and we must ensure:

* No two adjacent cells (up, down, left, right) are the same color.
* Use only 3 colors.

---

### ✅ **Key Observations**

1. **Constraints are tight**: Brute-force is infeasible for large `m` and `n` due to exponential possibilities.
2. **Direction of traversal**: Since either `m` or `n` could be large, we reduce computation by choosing the **smaller dimension** as the **row** size and the larger one as **column**, then proceed column by column (this helps reduce the number of possible vertical configurations).
3. **Each column’s coloring must be valid** (no adjacent same color vertically), and **must be compatible** with the previous column (no same color horizontally).
4. **Precompute all valid single-column colorings**, and then use **Dynamic Programming** to count valid transitions across columns.

---

### 🧠 **High-Level Approach (DP + State Compression)**

#### 1. **Generate Valid Column States**

* A **column state** is a tuple of `m` integers (e.g., `(0, 1, 2, 1, 0)`) where each number represents a color, and no two adjacent numbers (rows) are the same.
* For `m`, generate all such column states.

#### 2. **Build Transition Map**

* For every pair of column states `(a, b)`, check if they can be adjacent columns (i.e., no same color in the same row index between `a` and `b`).
* Store this mapping for valid transitions.

#### 3. **Dynamic Programming**

* Let `dp[i][state]` = number of ways to paint up to column `i` with the last column being `state`.
* Initialize `dp[0][state] = 1` for all valid `state`s (base case).
* For each column `i` from 1 to `n-1`:

  * For each current `state`, sum over all compatible previous `prev_state`s using the transition map.
* Final answer = sum of `dp[n-1][*]` (all states for the last column).

---

### ⏱️ **Time Complexity**

* Let `S` = number of valid column states (depends on `m`)
* Time: `O(n * S^2)` — for each column and each pair of compatible states
* Space: `O(n * S)` or optimized to `O(2 * S)` if only keeping current and previous columns.

---

### 📦 **Summary**

* **Reduce dimensions**: fix smaller one as row `m`.
* **Generate all valid colorings for one column**.
* **Build a transition graph of valid state pairs**.
* **Use DP to propagate valid configurations across columns**.
* **Return total configurations for column `n`**.
