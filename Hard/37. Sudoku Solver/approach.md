To solve the **Sudoku Solver** problem (Leetcode #37), the most effective approach is **backtracking**, a form of depth-first search (DFS) that's well-suited for constraint satisfaction problems like Sudoku.

---

### ✅ **High-Level Approach: Backtracking**

1. **Identify Empty Cells**:

   * Traverse the 9x9 grid to find the cells with `'.'` — these are the cells we need to fill.

2. **Try Possible Numbers**:

   * For each empty cell, try placing digits `'1'` through `'9'`.

3. **Validate the Placement**:

   * Before placing a digit, check if it's valid:

     * **Row Check**: The digit must not already be in the same row.
     * **Column Check**: The digit must not already be in the same column.
     * **3x3 Box Check**: The digit must not already be in the corresponding 3x3 subgrid.

4. **Recursive Call**:

   * If a digit is valid, place it and recursively attempt to solve the rest of the board with this new state.

5. **Backtrack if Needed**:

   * If no valid digit leads to a solution, **undo** the last step (i.e., remove the digit), and try the next candidate.

6. **Terminate When Solved**:

   * The algorithm continues until all empty cells are filled legally — at which point it terminates.

---

### ⚙️ Key Optimization Ideas

* **Early Pruning**: As soon as you find a conflict, skip further attempts for that path.
* **Efficient Validation**:

  * Use sets or boolean arrays to track what numbers are used in each row, column, and sub-box.
  * This reduces redundant iteration over the grid and improves performance.

---

### 💡 Why This Works

Backtracking explores the full space of possible number placements, but prunes invalid paths early. The guarantee that there’s exactly one solution makes this method reliable and efficient for the problem.

---

### 🧠 Time and Space Complexity

* **Time Complexity**: In the worst case, exponential — roughly O(9^(m)), where m is the number of empty cells. However, with pruning, it's much faster in practice.
* **Space Complexity**: O(1) auxiliary space (besides the recursive call stack), since the board size is fixed (9x9).

---

