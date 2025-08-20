Great problem 👍 Let’s break it down step by step with an **approach (no code)**:

---

### 🔎 Key Insight

A **square submatrix of ones** can only exist if its **bottom-right corner** is also a `1`.
So the task becomes:
👉 For every cell `(i, j)`, determine the **largest square ending at that cell**.

If we know that, we can just sum up all these square sizes across the matrix.

---

### 🧩 Dynamic Programming Approach

We define a DP table `dp[i][j]` = the size of the largest square submatrix (with all `1`s) whose **bottom-right corner is at `(i, j)`**.

#### 1. Base case

* If `(i, j)` is on the **first row or first column**, then:

  * `dp[i][j] = matrix[i][j]` (because it can only form a `1x1` square if it’s `1`).

#### 2. Transition

For other cells `(i, j)`:

* If `matrix[i][j] == 1`:

  ```
  dp[i][j] = 1 + min(
      dp[i-1][j],     // square ending above
      dp[i][j-1],     // square ending to the left
      dp[i-1][j-1]    // square ending diagonally top-left
  )
  ```
* If `matrix[i][j] == 0`:

  ```
  dp[i][j] = 0
  ```

👉 This works because to form a larger square, the current cell must be `1`, and it depends on the smallest square we can extend from the three neighbors.

#### 3. Count squares

* Each `dp[i][j]` contributes not just **1 square**, but actually `dp[i][j]` squares:

  * Example: If `dp[i][j] = 3`, that means:

    * There is one `1x1` square ending at `(i, j)`
    * One `2x2` square
    * One `3x3` square
  * So we add `dp[i][j]` to our total.

---

### ⏱ Complexity

* **Time:** `O(m * n)` → each cell computed in constant time.
* **Space:** `O(m * n)` for DP table, but can optimize to `O(n)` using just the previous row.

---

### ✅ Example Walkthrough

Matrix:

```
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
```

* Start filling `dp`:

  ```
  [0,1,1,1]
  [1,1,2,2]
  [0,1,2,3]
  ```

* Sum = `0+1+1+1 + 1+1+2+2 + 0+1+2+3 = 15`

Matches the example output ✅

---

👉 So the **approach** is:

1. Use DP where `dp[i][j]` = largest square ending at `(i, j)`.
2. Transition = `1 + min(top, left, top-left)` if cell is `1`.
3. Sum all `dp[i][j]` to get the result.

---
