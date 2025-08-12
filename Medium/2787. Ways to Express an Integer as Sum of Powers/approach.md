This problem is essentially about **counting the combinations of unique integers** whose `x`-th powers sum exactly to `n`.

The key here is that the integers must be **unique**, and we're dealing with powers, not just the numbers themselves.

---

## **1. Understanding the Problem**

You can think of it like:

* You have numbers `1, 2, 3, ...` (up to some limit).
* For each number `i`, you consider `i^x`.
* You want to find **all subsets** of these powered values whose sum is exactly `n`.
* Since numbers are unique, you cannot reuse the same base number.

Example:
If `n = 10`, `x = 2`:

* Possible powered numbers ≤ 10 are `1² = 1`, `2² = 4`, `3² = 9`.
* We need to sum to exactly `10`.
* The only possible set: `1² + 3² = 1 + 9 = 10`.

---

## **2. Observations**

* The **largest base number** we can use is `floor(n^(1/x))` because any higher number’s `x`-th power exceeds `n`.
* This is a **combinatorics with constraints** problem.
* It’s very similar to **subset sum with unique items**, but with items being powers of integers.

---

## **3. Approach**

### Step A: Precompute powers

* Generate all `i^x` for `i = 1` to `maxBase = floor(n^(1/x))`.
* Only keep powers ≤ `n`.

---

### Step B: Use DFS + memoization or DP

We have **two choices** for each integer:

1. **Take it** — subtract its power from `n` and move to next integer.
2. **Skip it** — move to next integer without changing the target sum.

We recursively explore both choices until:

* **Base case success**: `n == 0` → Found one valid way.
* **Base case fail**: `n < 0` or no more numbers → Not valid.

---

### Step C: Memoization (important for performance)

Since `n ≤ 300` and `x ≤ 5`, recursion without memoization could cause repeated computations.
We can store results for `(currentNumber, remainingSum)`.

---

### Step D: Modular arithmetic

Since the answer can be large, every sum of results is taken **mod 1e9+7**.

---

## **4. Complexity**

* Let `m` be the number of base numbers (`≤ floor(n^(1/x))`).
* Time complexity with memoization: **O(m \* n)**.
* Space complexity: **O(m \* n)** for memo storage.

---

## **5. Why this works**

This works because:

* We systematically explore **all subsets** of possible powers.
* Uniqueness is guaranteed by moving to the **next number** after picking/skipping.
* Memoization ensures we don’t recompute overlapping subproblems.

---

If you like, I can also walk you through a **dry run example** for `n = 10, x = 2` so the recursive tree is clear.
Would you like me to do that?
