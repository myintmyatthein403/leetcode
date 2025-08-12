Alright — this one’s a “digit rearrangement meets powers of 2” problem, so let’s break down the thought process step-by-step.

---

## **Approach**

### 1. **Reformulate the Problem**

We want to check whether the digits of `n`, in any permutation, can form a power of two.
Key points:

* Leading digit cannot be zero.
* Power of two means numbers like `1, 2, 4, 8, 16, 32, 64, ...` up to $2^{30}$ (since $2^{30} = 1,073,741,824$ > $10^9$).

---

### 2. **Observation**

Instead of generating all permutations of `n` (which is factorial time complexity and very slow), we can notice:

* Two numbers are permutations of each other **if and only if** they have the **same multiset of digits**.
* We can represent a digit multiset by **sorting its digits** or by **digit frequency count**.

Example:

* `n = 128` → sorted digits: `"128"`
* `2^7 = 128` → sorted digits: `"128"` ✅ match.
* `n = 821` → sorted digits: `"128"` → matches `128` as well ✅.

---

### 3. **Plan**

1. Convert `n` to a **digit signature**:

   * Either sort the digits into a string `"128"`.
   * Or use an array of length 10 representing frequency of digits `[count_0, count_1, ...]`.
2. Precompute the **digit signatures** for all powers of 2 up to $10^9$.
3. Compare `n`’s signature against this set.
4. If a match is found → return `true`; else → return `false`.

---

### 4. **Why this works**

* We avoid brute-force permutations.
* Checking digit signatures is **O(1)** after precomputation.
* Precomputation of $2^0$ to $2^{30}$ is small (only 31 numbers).

---

### 5. **Complexity**

* **Precomputation:** 31 powers of two × O(log(number)) for digit sorting → negligible.
* **Query:** O(log(n)) for sorting digits or O(1) for counting digits.
* **Space:** O(31) for storing signatures.

---

### 6. **Example Walkthrough**

`n = 821`

1. Sorted digits: `"128"`.
2. Precomputed set includes `"1"`, `"2"`, `"4"`, `"8"`, `"16"`, `"128"`, etc.
3. `"128"` is in the set → ✅ return `true`.

---
