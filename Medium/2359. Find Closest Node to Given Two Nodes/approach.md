To solve the problem **"Find Closest Node to Given Two Nodes"**, the key is to **simulate traversal from both `node1` and `node2`** along the graph and find the node reachable by **both** such that the **maximum** of the two distances is **minimized**.

---

### 🔍 **Understanding the Graph**

* You’re given a directed graph where each node has **at most one outgoing edge**.
* This structure means that the graph is made of **chains and/or cycles** — no branches or trees.

---

### ✅ **Goal**

Find a node `x` such that:

1. It’s **reachable from both** `node1` and `node2`.
2. You compute:

   ```
   max(dist(node1, x), dist(node2, x))
   ```

   and you want this value to be as **small as possible**.
3. If multiple such nodes exist, return the one with the **smallest index**.

---

### 🧠 **Approach**

1. **Simulate traversal from `node1`**:

   * Follow the graph starting from `node1`.
   * Record the **distance** from `node1` to every reachable node in a map/array.

2. **Simulate traversal from `node2`**:

   * Do the same: follow the graph starting from `node2`.
   * Record distances similarly.

3. **Compare reachable nodes**:

   * Go through **all nodes**.
   * For each node `i`, check:

     * Is it **reachable from both** `node1` and `node2` (i.e., exists in both distance maps)?
     * If yes, calculate `max(dist1[i], dist2[i])`.
     * Keep track of the **minimum** such value, and the **node index** where it's achieved.

4. **Handle edge cases**:

   * If no common reachable node is found, return `-1`.

---

### 🕒 **Time Complexity**

* Each traversal (from `node1` and `node2`) is **O(n)** because you follow at most one edge per node.
* Final comparison loop is **O(n)**.
* So, the total time complexity is **O(n)**, which is efficient for up to 100,000 nodes.

---

### 🔁 **Why It Works**

Since each node has at most one outgoing edge, traversals never branch out — they follow a single path (potentially into a cycle). This makes the BFS/DFS (or just a simple `while` loop) very efficient and easy to manage.

Let me know if you’d like a code implementation or visual walkthrough for a sample input.
