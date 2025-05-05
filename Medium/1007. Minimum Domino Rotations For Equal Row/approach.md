To solve this domino rotation problem, the key idea is to **find a number (from 1 to 6)** that could **potentially fill all elements** of either the top or bottom row (after rotation if necessary), and then compute the **minimum number of rotations** required to achieve that.

---

### ✅ **Core Insight:**

For a number `x` (from 1 to 6) to be a valid candidate:

* It **must appear in every domino**, either on the top or the bottom (or both).
* If for any domino `i`, neither `tops[i]` nor `bottoms[i]` equals `x`, then `x` **cannot be the target**.

---

### 🧠 **Approach:**

1. **Pick Candidates to Check:**

   * Only check two potential candidates: `tops[0]` and `bottoms[0]`.

     * Why? If a value is to be made uniform across the entire row, it must be present in every domino — and since we can rotate each domino, the only numbers that could work are ones seen in the **first domino**.

2. **For Each Candidate:**

   * Traverse all dominoes.
   * Count how many rotations you'd need to make all `tops` equal to `x`.
   * Count how many rotations you'd need to make all `bottoms` equal to `x`.
   * Skip if the value `x` doesn’t appear in either half of any domino.

3. **Return the Minimum Rotations:**

   * Among all valid options, return the **minimum number of rotations** needed.
   * If no number works for all dominoes, return `-1`.

---

### 🧩 Example Breakdown:

**Input:**
`tops = [2,1,2,4,2,2]`
`bottoms = [5,2,6,2,3,2]`

Check candidate `2`:

* It appears in every domino in at least one side.
* Count how many rotations needed to make all `tops` or all `bottoms` equal to `2`.
* Result: minimum rotations = 2.

---

### ⚠️ Edge Case:

If for some index `i`, the value you're trying to align (`x`) is in **neither** `tops[i]` nor `bottoms[i]`, it's **impossible** — immediately skip or return `-1`.
