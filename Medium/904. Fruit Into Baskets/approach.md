To **avoid a Time Limit Exceeded (TLE)** error in Leetcode problem **[904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)**, the key is to design an **efficient sliding window approach** with **linear time complexity (O(n))**. Here's the optimal approach explained without code, emphasizing why it's efficient and avoids TLE:

---

### ✅ **Sliding Window Approach (Two Pointers) — O(n) Time**

#### 🔍 **Concept**

We want to find the **longest subarray** with **at most two distinct numbers** (fruit types), since we can only carry two types of fruits. This fits perfectly with the **sliding window** technique.

#### 🚶‍♂️ Sliding Window Mechanics

1. Use two pointers `left` and `right` to represent the current window (range of trees we're picking from).
2. Move the `right` pointer forward one step at a time.
3. Maintain a **hash map or dictionary** that keeps count of how many of each fruit type are in the current window.
4. If the window contains more than **2 types of fruits**, shrink it by moving the `left` pointer rightward until the condition is valid again (i.e., only two fruit types remain).
5. Track the **maximum window size** during the process.

#### ⏱️ **Why It Avoids TLE**

* Every element is processed at most **twice** (once when `right` expands, once when `left` contracts).
* This gives us **linear time complexity** — `O(n)`, which is efficient enough for `n <= 10^5`.

---

### ⚠️ **TLE-Prone Approaches to Avoid**

* **Brute force**: Starting at every index and checking how far we can go while collecting fruits (O(n²)).
* **Nested loops** or repeated full array scans.
* **Unoptimized data structures**, like using lists for membership checks instead of hash maps/sets.

---

### 🧠 Key Insight

Treat the problem as **longest subarray with at most 2 distinct elements**. This is a common pattern in sliding window problems and must be recognized to write an optimal solution.

---
