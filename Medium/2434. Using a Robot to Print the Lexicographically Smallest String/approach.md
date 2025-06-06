To solve this problem optimally, you must simulate the operations intelligently to produce the **lexicographically smallest** result on paper. Let's break it down step-by-step.

---

## **Problem Recap**

You have:

* A string `s` from which characters can be transferred **from the front** to a temporary stack-like structure `t`.
* From `t`, characters can be popped **from the back** (like a stack) and written to the result string `p`.

Your goal is to use these two operations in a way that the final written string `p` is **lexicographically smallest**.

---

## **High-Level Intuition**

You have to carefully decide **when to pop from `t` and write to paper**, and **when to keep pushing from `s` to `t`**.

To write the **smallest possible character earliest**, you need to:

* Look ahead into `s` to know what minimum character is **still left**.
* Compare it with the **last character in `t`**.

At each step:

* If the last character in `t` is **less than or equal to** the smallest character left in `s`, you can safely pop it and write it to paper.
* Otherwise, push more characters from `s` into `t` until it becomes optimal to write from `t`.

---

## **Detailed Approach**

### 1. **Preprocessing:**

* First, for every position in `s`, determine the **smallest character in the suffix** from that point onward.

  * This helps you know the minimum possible future character you could still get from `s`.

### 2. **Simulation:**

* Initialize:

  * `t` as an empty stack.
  * `result` as an empty string (or list).
  * `i = 0` as pointer to traverse `s`.

* While `s` is not fully consumed or `t` is not empty:

  * Compare:

    * The top character of `t` (i.e. `t[-1]`)
    * The **minimum character left in `s`** (from precomputed list)
  * If `t` is non-empty and `t[-1]` is **less than or equal** to the smallest future character in `s`:

    * Pop from `t` and add to result.
  * Else:

    * Push the current character of `s` into `t` and move the pointer forward.

* Finally, empty the remaining `t` into the result.

---

## **Why This Works**

The idea is to **greedily** write the smallest characters as early as possible while ensuring we don't "miss out" on a smaller one that’s still in `s`.

The comparison ensures that we:

* Don't write a character from `t` unless we are sure that any remaining character in `s` isn't smaller.

---

## **Time and Space Complexity**

* **Time Complexity:** O(n)
  (one pass for precomputing suffix minimums + one pass for simulating the operations)
* **Space Complexity:** O(n)
  (for suffix minimums, the `t` stack, and result)

---

Let me know if you'd like a dry-run on an example or the code explanation.
