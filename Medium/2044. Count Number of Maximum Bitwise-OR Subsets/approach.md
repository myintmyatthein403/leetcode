To solve the problem of finding the **number of non-empty subsets** with the **maximum bitwise OR**, let's walk through the **approach and explanation**.

---

## 🔍 Problem Breakdown

We are given an array `nums`, and we must:

1. **Find the maximum OR** value possible by combining elements from any subset of `nums`.
2. **Count how many different non-empty subsets** result in **that exact maximum OR value**.

---

## ✅ Definitions & Key Concepts

* **Subset**: Any group of elements from `nums` (order matters by index).
* **Bitwise OR**: A binary operation where for each bit, if either operand has `1`, the result has `1`.

### Example:

`3 | 1` in binary → `11 | 01 = 11` → `3`

---

## 🚀 Strategy

Since `nums.length <= 16`, the total number of non-empty subsets is at most `2^16 - 1 = 65535`, which is small enough to **try all subsets (brute-force)** using **bitmasking or backtracking**.

### Step-by-Step:

### 1. **Find the maximum possible OR**:

* Go through **all subsets** of `nums`, calculate the **bitwise OR**, and keep track of the **maximum OR value** observed.

### 2. **Count subsets with that OR**:

* While iterating over all subsets again (or during the same pass), **count how many subsets** produce that **maximum OR value**.

---

## ⛏ Optimization Insight

You don't need to store all subsets. You just:

* Use **DFS/backtracking** or **bitmasking**, and
* At each step, carry the **current OR value** and compare it with the maximum.

### Important:

* **Subsets are considered different based on indices**, so even if elements are equal, different combinations count.

---

## ⌛ Time Complexity

* O(2ⁿ × n): We explore each of the 2ⁿ subsets, and each OR operation over up to n elements.
* Acceptable for n ≤ 16.

---

## ✅ Summary

* Use **backtracking** or **bitmasking** to generate all non-empty subsets.
* Track the **maximum OR value**.
* Count how many subsets reach that **max OR**.
* Due to small constraints (n ≤ 16), full enumeration is efficient enough.
