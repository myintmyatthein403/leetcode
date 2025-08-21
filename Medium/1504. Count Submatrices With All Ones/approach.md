Great question 👍 This one is trickier than the “count square submatrices with all ones” problem because **we’re counting *all rectangles/submatrices***, not just squares. Let’s break down the **approach** step by step (no code, just reasoning).

---

### 🔑 Key Idea

A submatrix with all ones is essentially a rectangle of 1s. To count them efficiently:

1. Think of each row as the **base of a histogram** (like the “largest rectangle in histogram” problem).
2. At each cell `(i, j)`, compute how many consecutive `1`s are stacked vertically up to that point → this gives the "height".
3. For each row, use these heights to calculate how many submatrices end **at that row**.

---

### 📝 Step-by-Step Approach

#### 1. Build "height matrix"

* Traverse row by row.
* For each cell:

  * If `mat[i][j] == 1`, then `height[i][j] = height[i-1][j] + 1` (consecutive vertical ones).
  * Else `height[i][j] = 0`.

This way, each row can be visualized as a histogram.

---

#### 2. Count rectangles row by row

* Now, focus on one row at a time.
* For each row `i`, we have a histogram (heights from `height[i][j]`).
* At position `(i, j)`, we want to count **how many rectangles end at that cell**.

How?

* Look **leftwards** from column `j` and keep track of the **minimum height seen so far**.
* Why? Because the rectangle height is limited by the smallest column in that width.
* For each step left, add `minHeight` to the count (since it means you can form `minHeight` submatrices of width = current window).

Example:
If heights row = `[2, 1, 3]`:

* At `j=0` → only height `2`, contributes 2.
* At `j=1` → look left: min(1,2)=1 → contributes 1 (width=2, height=1).
* At `j=2` → look left: min(3,1,2)=1, min(3,1)=1, min(3)=3 → contributes 1+1+3=5.

So row contributes `2+1+5=8`.

---

#### 3. Accumulate results

* Repeat this for all rows.
* Add up contributions from each row = total number of submatrices with all ones.

---

### ⏱ Complexity

* Building height matrix: **O(m × n)**.
* Counting per row:

  * Naive left expansion → **O(n²) per row**, so **O(m × n²)** overall.
  * With stack optimization (like "largest rectangle in histogram") → can reduce but still fits within constraints since `m, n ≤ 150`.

---

### 🔍 Why This Works

We’re essentially decomposing the problem into:

* **Vertical dimension** (heights of consecutive 1s).
* **Horizontal dimension** (expanding leftward to form rectangles).
* Each rectangle is uniquely counted when its **bottom row** is considered.

---

✅ This way, we can count **all submatrices (rectangles)** with all ones efficiently.

---
