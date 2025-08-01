To solve the Pascal’s Triangle problem, we can use an **iterative approach** based on the **definition of the triangle** itself:

---

### 🔍 **Understanding Pascal’s Triangle**

* The triangle starts with a single `1` at the top.
* Each subsequent row begins and ends with `1`.
* Any interior element at position `i` in row `r` is the **sum of the two elements above it**:
  `row[r][i] = row[r-1][i-1] + row[r-1][i]`

---

### 🧠 **Approach**

1. **Initialize a result list**:

   * Start with an empty list that will store all rows of the triangle.

2. **Iterate from row 0 to numRows - 1**:

   * For each row, initialize a new list of appropriate length.
   * The first and last elements are always `1`.
   * For the in-between elements (if any), calculate them using values from the **previous row** as explained above.

3. **Append each row to the result**:

   * After constructing a row, add it to the result list.
   * Use it to build the next row.

---

### ✅ **Key Observations**

* This is a **dynamic programming** problem where each row is built using the result of the previous row.
* Time complexity is **O(numRows²)** because we calculate values for each cell.
* Space complexity is also **O(numRows²)** for storing the entire triangle.

---

### ✅ **Example Walkthrough (numRows = 5)**

```
Row 0: [1]
Row 1: [1, 1]
Row 2: [1, 2, 1]         ← 2 = 1 + 1 (from row 1)
Row 3: [1, 3, 3, 1]       ← 3 = 1+2, 3 = 2+1
Row 4: [1, 4, 6, 4, 1]    ← 4 = 1+3, 6 = 3+3, 4 = 3+1
```

---

