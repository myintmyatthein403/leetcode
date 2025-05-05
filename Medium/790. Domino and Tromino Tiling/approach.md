To solve **Leetcode 790: Domino and Tromino Tiling**, you need to understand the recursive nature of how tiles can be placed to fully cover a `2 x n` board using **dominoes (2x1)** and **trominoes (L-shapes)**.

---

### ✅ **Key Idea:**

This is a **Dynamic Programming** (DP) problem where we build up the solution for larger `n` based on smaller values.

You define `dp[n]` as the number of ways to tile a `2 x n` board.

---

### 🧩 **Tile Types and Transitions:**

1. **Domino (2x1):**

   * Can be placed vertically to cover a column: contributes from `dp[n-1]`
   * Can be placed horizontally as two tiles: contributes from `dp[n-2]`

2. **Tromino (L-shape):**

   * Can be placed in 4 orientations but always covers **three squares** — 2 in one column, 1 in adjacent column.
   * These only make sense in pairs to maintain full coverage (balanced board).
   * Their contribution is a bit more subtle: it creates a “gap” that can be mirrored on the opposite side — thus we add all the possible gaps made earlier.

---

### 🔁 **Recurrence Relation:**

Let:

* `dp[n]` = number of ways to tile a `2 x n` board
* `MOD = 10^9 + 7` (to avoid overflow)

The recurrence is:

```
dp[n] = dp[n-1] + dp[n-2] + 2 * dp[n-3] + 2 * dp[n-4] + ... + 2 * dp[0]
```

This simplifies using a helper concept:

Define `sum = dp[n-3] + dp[n-4] + ... + dp[0]`

So:

```
dp[n] = dp[n-1] + dp[n-2] + 2 * sum
```

Or alternatively, use an optimized recurrence:

```
dp[n] = 2 * dp[n-1] + dp[n-3]
```

(This comes from algebraic simplification of the above expression.)

---

### 🧠 **Base Cases:**

```
dp[0] = 1   # empty board
dp[1] = 1   # only vertical domino
dp[2] = 2   # two vertical or two horizontal dominoes
```

---

### 🚀 **Approach Summary:**

1. Use dynamic programming with an array `dp[n+1]`.
2. Initialize base cases.
3. Fill `dp` using the optimized recurrence.
4. Return `dp[n] % (10^9 + 7)`.
