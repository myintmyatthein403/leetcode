To solve the **Snakes and Ladders** problem efficiently, the best approach is to model the board as a graph and use **Breadth-First Search (BFS)**. Here’s the step-by-step thought process and explanation:

---

### 🧠 **Core Idea**

You need to find the **shortest path (minimum number of dice rolls)** from square `1` to square `n²`, accounting for ladders and snakes which may change your landing square. Since each die roll has at most 6 outcomes and all moves are of equal cost (1 roll), **BFS is the ideal algorithm** for finding the shortest number of moves in such an unweighted graph.

---

### 🔄 **Steps**

1. ### **Flatten the 2D board to a 1D representation**

   The board is in **Boustrophedon** (zigzag) order. So:

   * The first row starts left to right.
   * The second row goes right to left.
   * The pattern continues alternately from bottom to top.

   You'll need a function to **map from 1D index (square number) to 2D board coordinates** to find out if that square has a snake/ladder.

2. ### **Simulate Dice Rolls Using BFS**

   * Start from square `1` (corresponds to index `0` in 0-based BFS).
   * For each square, try all possible moves: `curr + 1` to `min(curr + 6, n²)`.
   * For each move:

     * Convert the destination square number to its board coordinates.
     * If `board[r][c] != -1`, it's a ladder/snake, and you **must** move to that destination.
     * Otherwise, stay on the square.
   * Use a **visited set** to prevent revisiting squares.

3. ### **Use a Queue for BFS Traversal**

   * Each element in the queue is a tuple: `(current square, number of moves so far)`.
   * For every level (dice roll), enqueue all reachable next positions.
   * If you reach `n²`, return the number of moves.

---

### ⚠️ **Edge Cases**

* Multiple ladders or snakes cannot be chained — you only follow one redirection per move.
* Be careful when interpreting the board index and translating from square number to (row, col) considering the zigzag order.

---

### 📊 **Time Complexity**

* **O(n²)**: Since there are at most `n²` squares and each is visited once.
* Each square can have at most 6 neighbors (due to dice rolls).

---

### ✅ **Why This Works**

* BFS guarantees the shortest path in an unweighted graph.
* Proper handling of board redirections (snake/ladder) ensures accurate simulation.
* Mapping from square numbers to coordinates correctly interprets the board layout.

---

Let me know if you'd like a code walkthrough or the coordinate-mapping logic!
