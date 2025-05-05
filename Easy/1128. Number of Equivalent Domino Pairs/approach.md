To solve **Leetcode 1128: Number of Equivalent Domino Pairs**, the key is to **recognize and count duplicate "normalized" domino pairs** efficiently.

---

### ✅ **Core Insight:**

Each domino `[a, b]` is **equivalent** to `[b, a]`. So we can treat both as the **same key**: the unordered pair `(min(a, b), max(a, b))`.

---

### 🧠 **Approach:**

1. **Normalize Each Domino:**

   * Convert `[a, b]` into a standardized form — always as `[smaller, larger]`.
   * Example: `[2, 1]` → `[1, 2]`.

2. **Count Frequency of Each Normalized Domino:**

   * Use a map (or array) to count how many times each normalized domino appears.

3. **Calculate Pairs:**

   * For each normalized domino that appears `freq` times, the number of **equivalent pairs** is:

     ```
     freq * (freq - 1) / 2
     ```

     (This is the number of unique index pairs you can form from `freq` identical items.)

---

### 📊 **Example Walkthrough:**

Input: `[[1,2],[2,1],[3,4],[5,6]]`

* Normalize:

  * `[1,2]` → `[1,2]`
  * `[2,1]` → `[1,2]`
  * `[3,4]` → `[3,4]`
  * `[5,6]` → `[5,6]`
* Count:

  * `[1,2]`: 2 times → `2 * (2-1)/2 = 1` pair
  * Others: only 1 time → 0 pairs

✔️ Result: **1**

---

### 🧠 Summary:

* Normalize each domino to a standard form.
* Use a hash map (or fixed-size array for fast lookup) to count frequencies.
* Use combination formula to count valid (i, j) pairs from repeated entries.
