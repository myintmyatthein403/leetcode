To solve **Leetcode 1317: Convert Integer to the Sum of Two No-Zero Integers**, the key requirement is that both numbers `a` and `b`:

* Must **not contain the digit `0`** (i.e. be *no-zero* integers).
* Must **sum to `n`**.

---

## 🔍 Understanding the Problem

We are given an integer `n` (with guaranteed valid solutions), and we need to split it into two **positive integers**, such that:

* `a + b = n`
* Neither `a` nor `b` contain the digit `0`.

---

## ✅ Goal

Return **any** pair `[a, b]` such that:

* `a + b = n`
* `a` and `b` are both **no-zero integers**

---

## 🧠 Key Insight

Since `n` is between `2` and `10,000`, we can afford to do a **simple search** from `1` to `n-1` and find the first pair of integers `[a, b]` such that:

* `a + b == n`
* both `a` and `b` are *no-zero integers*.

This is an **acceptable brute-force approach** due to small input constraints.

---

## 🧭 Step-by-Step Approach (No Code)

1. **Iterate** over `a` from `1` to `n - 1`.

   * For each `a`, compute `b = n - a`.

2. **Check if `a` and `b` are no-zero integers:**

   * A number is a no-zero integer if **none of its digits are `0`**.
   * This can be checked by converting the number to a string and checking if `'0'` is **not** present.

3. **As soon as you find such a pair**, return `[a, b]`.

---

## 🧪 Example Walkthrough

### Input: `n = 11`

Try `a = 1` → `b = 10` → `10` contains `0` ❌
Try `a = 2` → `b = 9` → `2` and `9` are no-zero ✅
Return `[2, 9]`

---

## ⏱️ Time Complexity

* Worst case: You iterate through up to `n-1` pairs → **O(n)**
* For each pair, checking for zero digits is **O(log n)** (number of digits in `a` and `b`)
* Overall complexity: **O(n log n)** — efficient enough for `n <= 10^4`

---

## ✅ Summary

* Iterate from `1` to `n-1`
* For each `a`, compute `b = n - a`
* If both `a` and `b` are no-zero integers → return `[a, b]`

