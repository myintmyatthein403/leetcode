To solve **Leetcode 440: K-th Smallest in Lexicographical Order**, we need a strategy that avoids generating and sorting all numbers from `1` to `n`—because `n` can be as large as 1 billion.

---

## ✅ **Core Idea**

The problem is essentially about **navigating a lexicographical tree (trie)** of numbers and **skipping over branches efficiently** to find the `k`-th smallest number.

---

## 🌲 **Trie-Based Thinking**

Think of numbers from `1` to `n` as a **prefix tree (Trie)**:

* Root node: empty.
* Each level adds a digit (0–9), starting from 1 at the top.
* Lexicographical order is equivalent to **preorder traversal** of this trie.

Example for `n = 13`:

```
1
├── 10
├── 11
├── 12
├── 13
2
3
4
...
9
```

---

## 🎯 **Goal**

Find the `k`-th number in this preorder traversal.

---

## 🧠 **Approach**

1. **Start from current = 1** (the smallest number).
2. For each prefix (starting from "1"), calculate how many numbers (nodes) are in its subtree.
3. If the size of the subtree < `k`, skip the whole subtree and move to the next prefix (like going from `1` to `2`).
4. If the size ≥ `k`, go deeper (append `0` to prefix) and reduce `k` by 1 (since the current node is also one step).
5. Repeat until `k == 1`.

---

## 🔢 **How to count the numbers in a subtree with a prefix `curr`?**

You calculate how many valid numbers exist between:

```
[ curr, curr + 1 )  (i.e., all numbers that start with `curr`)
```

Iterate from `curr` to `curr + 1`:

* At each level, the range expands by a factor of 10.
* But cap each level to `n`, so you don't count beyond it.

This gives you a **counting function** to know how many numbers are lexicographically below a prefix, which you use to skip entire subtrees.

---

## 🔁 **Summary of Steps**

1. Initialize `curr = 1`, `k = k - 1` (since `1` is the first number).
2. While `k > 0`:

   * Count steps between `curr` and `curr + 1`.
   * If steps ≤ `k`: skip subtree → `curr += 1`, `k -= steps`.
   * Else: go deeper → `curr *= 10`, `k -= 1`.
3. Return `curr`.

---

## 🧩 Why this works:

* It avoids brute-force and only explores necessary paths.
* Efficiently skips over large groups of numbers using lexicographical grouping.
* Time complexity is `O(log n)` for each digit level (at most \~10).
