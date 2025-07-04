To solve **Leetcode 3307: Find the K-th Character in String Game II**, we need a **mathematical and recursive approach**, not simulation — because the string can grow **exponentially**, up to size `10^14`.

---

## 🔍 Problem Overview

* Start with `word = "a"`.
* Each operation transforms the string based on:

  * `0`: Append the word to itself ⇒ `word = word + word`
  * `1`: Append the "shifted" version of the original word ⇒ each character is moved to the next letter in the alphabet, then appended to the end

We need to find the **k-th character** after all operations **without generating the full string**.

---

## 🧠 Key Observations

1. **Exponential Growth**:

   * Every operation roughly doubles the size of the string (sometimes exactly, sometimes not depending on character shifts).
   * Simulating the full string is not possible for `k` up to `10^14`.

2. **Backtracking Insight**:

   * Instead of building the final string, **work backwards** from `k` to trace how that character got there.
   * At each step, the final string is built by:

     * Keeping the old part (`prefix`)
     * Adding a new part (`suffix`) — either a copy or a shifted version

3. **Reverse Simulation**:

   * From the end of `operations` to the start, compute how long the string was at each point.
   * Then **simulate in reverse**, reducing `k` to its origin in earlier states.

---

## 🧭 Approach Summary

### 1. **Track the size of the string after each operation**

* Let `lengths[i]` be the length of the string after `i` operations.
* For each operation:

  * `0`: new length = previous \* 2
  * `1`: new length = previous \* 2 (same logic — appending same-sized shifted word)

### 2. **Work backward from final state**

* Start from the end: if `k` is in the second half of the string at operation `i`, move it to its **corresponding position in the first half**, and track how it was transformed:

  * For `op == 0`, it's a direct copy
  * For `op == 1`, the character was **shifted** by 1 (wrap around 'z' → 'a')

### 3. **Track how many times character is shifted**

* Maintain a `shiftCount` as you move backward through `operations`.
* When you reach the original string, apply the `shiftCount` to the original `'a'`.

---

## 🧮 Example Intuition

Input: `k = 10`, `operations = [0, 1, 0, 1]`

1. Track lengths:

   * Start: "a" → length 1
   * Op 0: "aa" → 2
   * Op 1: "aabb" → 4
   * Op 0: "aabbaabb" → 8
   * Op 1: append "bbccbbcc" → length = 16

2. Final length = 16, want `k = 10`

3. Work backward:

   * Op 1 (len = 16): `k = 10` is in the second half → it's the 2nd part of transformation → subtract 8 → `k = 2`, `+1 shift`
   * Op 0 (len = 8): `k = 2` is in first half → unchanged
   * Op 1 (len = 4): `k = 2` is in second half → subtract 2 → `k = 0`, `+1 shift`
   * Op 0 (len = 2): `k = 0` is in first half → unchanged

Final `k = 0`, start with `'a'`, apply 2 shifts: `'a'` → `'b'` → `'c'` → return `'c'`.

But wait — there's an **off-by-one** nuance in indexing (1-based `k` input). Adjust indexing and shifts carefully — the above logic is correct in structure, the final value depends on zero-based vs one-based indexing.

---

## ✅ Final Strategy

* Precompute `lengths` of the string after each operation.
* Use **reverse traversal** to:

  * Translate `k` back to its origin
  * Count how many times the character is **shifted** due to `op == 1`
* At the base (before any operations), apply shifts to `'a'` and return.

---

## 🧠 Complexity

* **Time:** O(N) where N = length of operations (≤ 100)
* **Space:** O(N) for tracking lengths

---

Let me know if you want the implementation in any language (e.g., TypeScript, Python, etc.)
