Great question 👍 Let’s break down the **approach** for \[3195. Find the Minimum Area to Cover All Ones I].

---

### 🔑 Key Insight

The rectangle that covers all `1`s must:

* Start at the **minimum row index** containing a `1` (top boundary).
* End at the **maximum row index** containing a `1` (bottom boundary).
* Start at the **minimum column index** containing a `1` (left boundary).
* End at the **maximum column index** containing a `1` (right boundary).

So, the rectangle is completely defined by the **min/max row** and **min/max column** where `1`s appear.

---

### 📝 Step-by-step Approach

1. **Initialize bounds**

   * `minRow = +∞`, `maxRow = -∞`
   * `minCol = +∞`, `maxCol = -∞`

   These will track the extreme positions of `1`s.

2. **Scan the grid**
   For every cell `(i, j)`:

   * If `grid[i][j] == 1`:

     * Update `minRow = min(minRow, i)`
     * Update `maxRow = max(maxRow, i)`
     * Update `minCol = min(minCol, j)`
     * Update `maxCol = max(maxCol, j)`

3. **Compute rectangle dimensions**

   * Height = `maxRow - minRow + 1`
   * Width  = `maxCol - minCol + 1`

   The `+1` is important because if min and max are the same, the rectangle still has size `1`.

4. **Calculate area**

   * `area = height * width`

---

### ⚡ Example Walkthrough

**Example 1:**

```
grid = [[0,1,0],
        [1,0,1]]
```

* `1`s at positions: (0,1), (1,0), (1,2)
* `minRow = 0`, `maxRow = 1` → height = 1 - 0 + 1 = 2
* `minCol = 0`, `maxCol = 2` → width = 2 - 0 + 1 = 3
* area = 2 \* 3 = 6 ✅

**Example 2:**

```
grid = [[1,0],
        [0,0]]
```

* `1`s at positions: (0,0)
* `minRow = maxRow = 0` → height = 0 - 0 + 1 = 1
* `minCol = maxCol = 0` → width = 0 - 0 + 1 = 1
* area = 1 \* 1 = 1 ✅

---

### ⏱️ Complexity

* **Time:** O(m × n) → scan every cell once.
* **Space:** O(1) → only storing four integers for boundaries.

---
