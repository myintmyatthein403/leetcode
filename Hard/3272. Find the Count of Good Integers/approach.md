To solve this problem, we need to **count all n-digit integers** such that their **digits can be rearranged** to form a **palindrome that is divisible by `k`**. These are called **good** numbers. Let's break down the approach:

---

### Step 1: Understand What a k-Palindromic Number Is
A number is **k-palindromic** if:
- It's a **palindrome** (reads the same forward and backward).
- It's **divisible by k**.
- It has **no leading zeros**.

---

### Step 2: Understand What a Good Number Is
A number is **good** if:
- It's an **n-digit number** (starts with a non-zero digit).
- Its **digits can be rearranged** to form a **k-palindromic number** (same length, no leading zero, divisible by `k`).

So, for example:
- "2020" can become "2002" → a palindrome and divisible by 2 → good.
- "1010" can become "0110" (invalid due to leading zero) or "1001" (valid) → but if "1001" isn't divisible by `k`, then it's not good.

---

### Step 3: Generate All Possible k-Palindromic Numbers of Length n
To find good numbers:
1. **Generate all palindromes of length `n`** with no leading zeros.
   - For example, if `n = 3`, palindromes are: 101, 111, 121, ..., 999 (where first digit is not zero).
2. **Filter only those palindromes that are divisible by `k`**.

---

### Step 4: Track Which Numbers Can Be Rearranged Into Those Palindromes
For each valid **k-palindromic number**:
- Count how many **distinct permutations** of its digits form valid n-digit numbers (no leading zeros).
- Use a **multiset or digit frequency count** to track this.

But instead of generating permutations of palindromes (which is costly), we flip it:

---

### Step 5: Count Good Numbers by Mapping
1. Iterate over all **n-digit numbers** (e.g. from `10^(n-1)` to `10^n - 1`).
2. For each number:
   - Count its digit frequency (i.e., histogram).
   - Save the histogram as a key in a map/dictionary.
3. Separately, generate all **k-palindromic numbers of length `n`**.
   - For each, get its digit histogram.
   - If that histogram exists in the map of n-digit numbers, add the count.

This way, we avoid checking every rearrangement and instead just match by digit histograms.

---

### Step 6: Summary of the Efficient Steps
- Generate all **n-digit palindromes** without leading zeros.
- For each palindrome:
   - Check if it's divisible by `k`.
   - If yes, store its digit histogram.
- Generate all **n-digit numbers**, store histograms and their counts.
- For each valid k-palindromic histogram:
   - Check how many n-digit numbers share this histogram.
   - Add these counts.

---

### Optimization Notes
- Use memoization or caching for histogram counts.
- Prune early by ignoring palindromes with zero in front.
- Use symmetry in palindromes to generate them faster (e.g., mirror half of the digits).
