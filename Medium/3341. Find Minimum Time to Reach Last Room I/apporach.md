### **Goal:**

Reach bottom-right cell `(n-1, m-1)` from `(0, 0)` **as early as possible**, respecting each room's `moveTime[i][j]` — the **earliest time you're allowed to start moving into that room**.

---

## 🔍 Key Rules:

1. You **start at (0, 0)** at time `t = 0`.
2. You can move to **adjacent** cells (up, down, left, right).
3. Moving takes **exactly 1 second**.
4. You can only start moving **into** cell `(i,j)` at or after `moveTime[i][j]`.
5. If you arrive earlier than `moveTime[i][j]`, you must **wait** and then **spend 1 more second** to move in.

---

## ✅ Updated Algorithm:

1. Use **Dijkstra's algorithm** (a shortest-path algorithm) where each node (cell) keeps the **minimum time** required to reach it.
2. Store states in a **priority queue / min-heap** as `(currentTime, row, col)`.
3. For each step:

   * For each neighbor `(nx, ny)`, compute the time you’re allowed to **start moving into it** as:
     `waitUntil = max(currentTime, moveTime[nx][ny])`
   * Add **1 second** for the move itself:
     `arrivalTime = waitUntil + 1`
4. Only process a cell if this `arrivalTime` is **better (smaller)** than previously known.

---

## 🔄 Why Dijkstra Works:

* This problem is a **variant of shortest-path** where “weight” of edges depends on waiting time.
* Dijkstra ensures you always expand the node with the **smallest current time**, ensuring optimality.

---

## 🧠 Time Complexity:

* Let `N = n * m` (number of cells).
* Each cell can be visited once with optimal time (or fewer if using a min-heap).
* Time complexity:

  * With **naive array-based queue**: `O(N² log N)`
  * With **real min-heap**: `O(N log N)`

---
