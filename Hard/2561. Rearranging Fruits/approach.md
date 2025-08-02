To avoid **Time Limit Exceeded (TLE)** on LeetCode Problem [2561. Rearranging Fruits](https://leetcode.com/problems/rearranging-fruits/), you need to **avoid brute-force swaps** and instead use an efficient algorithmic approach based on frequency counting, greedy sorting, and minimum-cost strategies.

---

## 🔍 Problem Breakdown

* You are given two arrays (`basket1` and `basket2`) of equal length.
* You may **swap any element from basket1 with any from basket2**.
* The goal is to **make both arrays equal after sorting**.
* The **swap cost** is `min(basket1[i], basket2[j])`.
* You must return the **minimum total cost** to achieve this or `-1` if impossible.

---

## 🚫 Brute-force / Naive Approach (Will TLE)

A naive solution might try:

* Sorting both arrays and comparing.
* Trying all combinations of swaps to match the arrays.
* Calculating costs exhaustively.

**Why this TLEs:**

* With input size up to `10^5`, any approach that involves checking all pairs (`O(n^2)` or worse) is **too slow**.
* You must **reduce the problem to O(n log n)** or **O(n)** operations.

---

## ✅ Efficient Approach (Avoids TLE)

### 1. **Count Differences**

* Count the frequency of each fruit in both baskets.
* For each unique fruit, calculate the **difference in frequency** between basket1 and basket2.
* If any fruit has an **odd total count**, return `-1` (because you can’t make the baskets equal).

### 2. **Compute Excess**

* For fruits with a non-zero difference, record the **extra** items that need to be swapped.
* Only half of the difference needs to be moved (because one swap resolves two mismatches).

### 3. **Minimize Swap Cost**

* Gather the excess items from both baskets.
* Sort all these fruits by cost (cheapest first).
* Choose the cheapest way to balance them:

  * Either swap directly (cost = `min(a, b)`),
  * Or swap through the **global minimum fruit value × 2**, which may be cheaper (indirect swap trick).

> This is a **greedy optimization**: always resolve mismatch using the cheapest way possible.

### 4. **Time Complexity**

* Counting: `O(n)`
* Sorting excess: `O(n log n)` in the worst case
* Overall: **`O(n log n)`**, fast enough for `n ≤ 10^5`.

---

## 🧠 Key Insight

To avoid TLE, the solution **must not simulate swaps** or perform **brute pair matching**. Instead:

* Work with **frequencies**, not positions.
* Use **greedy sorting** to optimize cost.
* Use the **minimum fruit globally** to avoid expensive direct swaps.
