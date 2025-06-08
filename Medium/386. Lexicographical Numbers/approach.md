To solve the problem **"Lexicographical Numbers"** in **O(n)** time and **O(1)** extra space (not counting output), we need to **generate numbers in lexicographical (dictionary) order** without actually sorting.

---

### 🔍 **Lexicographical Order Insight**

Lexicographical order is the order you'd see in a dictionary:

* `1, 10, 11, 12, 13, ..., 2, 20, 21, ..., 3, ..., 9`

Compare numbers **as strings**:
E.g., `"1"` < `"10"` < `"11"` < `"2"`.

---

### ✅ **Key Observations**

1. The numbers form a **tree structure** where:

   * `1` is the root, with children: `10`, `100`, `1000`, etc.
   * Then comes `2`, with children: `20`, `200`, etc.
   * Continue until `9`.

2. This structure mimics a **pre-order traversal** of a **trie-like tree** built from numbers.

---

### 💡 **Approach (DFS Simulation / Pre-order Traversal)**

Simulate a traversal without recursion or extra space:

* Start at `curr = 1`
* Repeat `n` times (we'll collect `n` numbers):

  1. **Add** `curr` to result
  2. If `curr * 10 <= n`, go **deeper** in tree: `curr *= 10`

     * Example: from `1` to `10`
  3. Else if `curr + 1 <= n` and last digit is not `9`, go to **next sibling**: `curr += 1`

     * Example: from `1` to `2`
  4. Else, go **up** to the next valid ancestor:

     * Keep dividing by 10 until the last digit is not `9`
     * Then do `curr += 1`

---

### 🔄 **Steps Summary**

1. Initialize `curr = 1`
2. For `i = 1` to `n`:

   * Add `curr` to result
   * If `curr * 10 <= n`: go deeper (`curr *= 10`)
   * Else if `curr + 1 <= n` and `curr % 10 != 9`: go to next sibling (`curr += 1`)
   * Else: backtrack up to find next valid number

---

### 📈 Time and Space Complexity

* **Time**: O(n) — each number from `1` to `n` is visited exactly once
* **Space**: O(1) extra (not counting output array)
