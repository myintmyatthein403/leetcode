Alright, let's walk through the **approach** carefully, without code:

---

### Goal:
Find **how many subarrays** have **score** `< k`, where  
**score = (sum of the subarray) × (length of the subarray)**.

---

### Key Observations:
- Since **subarrays** must be contiguous, we can think about using a **sliding window**.
- The **score** depends on both the **sum** and the **length** of the current window.
- We need an efficient method, because a brute-force O(n²) approach (checking all subarrays) would be slow for big inputs.

---

### Plan:

1. **Use two pointers**, `start` and `end`, to define the sliding window:
   - `start` is the beginning index.
   - `end` is the current ending index.
2. **Maintain the current sum** of the elements between `start` and `end`.
3. For every `end`, try to expand the window to include `nums[end]`.
4. **While the score** (sum × length) is **≥ k**, **move `start` right**:
   - Shrink the window from the left to make the score smaller.
5. **At each step**, when `end` is fixed, **count how many subarrays** ending at `end` are valid:
   - It's simply `(end - start + 1)`.
   - Why? Because subarrays starting from any position between `start` and `end` are valid and contiguous.

---

### Intuition:
- The **window is always valid**: we **shrink** it whenever the score gets too large.
- **Every valid window ending at `end`** gives **(end - start + 1)** valid subarrays.
- We're essentially **counting the number of valid starting points** for each ending index.

---

### Example Walkthrough:

Take `nums = [2,1,4,3,5]`, `k = 10`:

| end | nums[end] | sum | length | score | action |
|:---:|:---------:|:---:|:------:|:-----:|:------:|
|  0  |     2     |  2  |   1    |   2   | count subarrays ending at 0 → +1 |
|  1  |     1     |  3  |   2    |   6   | count subarrays ending at 1 → +2 |
|  2  |     4     |  7  |   3    |  21   | score too big, move start |
|     |           |  5  |   2    |  10   | still too big, move start |
|     |           |  4  |   1    |   4   | ok, count subarrays ending at 2 → +1 |
|  3  |     3     |  7  |   2    |  14   | too big, move start |
|     |           |  3  |   1    |   3   | ok, count subarrays ending at 3 → +1 |
|  4  |     5     |  8  |   2    |  16   | too big, move start |
|     |           |  5  |   1    |   5   | ok, count subarrays ending at 4 → +1 |

Sum of counts = 6.

✅ Matches the example output.

---

### Time Complexity:
- **O(n)** overall:
  - Each element is added and removed from the window at most once.
- So it’s **linear** time.
