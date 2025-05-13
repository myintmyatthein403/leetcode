To solve **Leetcode 3335. Total Characters in String After Transformations I**, we need to **efficiently compute the final length of the string after `t` transformations**, **without building the string explicitly** (since its size can grow exponentially).

---

### 🔍 Key Observations

1. **Transformation Rules**:

   * Any character **not 'z'** becomes the next character → string length stays the same.
   * Character **'z'** becomes `"ab"` → string length increases by 1 (because 1 char becomes 2).

2. **String grows only when 'z' appears**. So we track **how many 'z' characters** exist at each stage of transformation to compute the growth.

3. Since only `'z'` can cause growth (from 1 to 2 characters), we want to **count how many 'z's each character will become** over `t` steps.

---

### 🧠 Strategy (No Code)

We'll **simulate the growth of each character over `t` transformations**, but **only track the character count**, not the characters themselves.

#### Step-by-step Plan:

1. **Initialize a frequency array** `count` of size 26:

   * `count[c]` represents the number of occurrences of character `c` (where `c = 0` for 'a', ..., `25` for 'z') in the current string.
   * For the initial string `s`, count how many times each character appears.

2. For **each transformation step (1 to t)**:

   * Create a new array `new_count` of size 26.
   * For each character `c` from 'a' to 'y' (`c` from 0 to 24):

     * It becomes character `c + 1`, so increment `new_count[c + 1]` by `count[c]`.
   * For character `'z'` (`c = 25`):

     * It becomes `'a'` and `'b'`, so add `count[25]` to `new_count[0]` and `new_count[1]`.
   * Update `count = new_count`.

3. After `t` transformations, the **total length** of the string is the sum of all values in the `count` array.

4. Return the result modulo $10^9 + 7$.

---

### ✅ Why This Works

* We're **simulating the transformation at a frequency level** instead of working with the actual string, which keeps the computation efficient.
* The space complexity is constant (array of 26), and time complexity is $O(t)$, since we perform 26 updates per transformation step.

---

### Example Recap

Let’s apply this idea to `s = "abcyy", t = 2`:

* Initial count: {'a':1, 'b':1, 'c':1, 'y':2}
* After t=1: {'b':1, 'c':1, 'd':1, 'z':2}
* After t=2:

  * 'b' → 'c', 'c' → 'd', 'd' → 'e'
  * 'z' → 'a' and 'b' (2 z’s → 2 a’s, 2 b’s)
  * Final count: {'a':2, 'b':2, 'c':1, 'd':1, 'e':1}
  * Total = 7

✅ Matches expected output.
