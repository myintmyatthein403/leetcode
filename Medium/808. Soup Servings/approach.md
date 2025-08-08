Alright — let’s break this one down step-by-step without touching code.

---

## **1. Understanding the problem**

We have two soups, A and B, each starting with the same amount (`n` mL).
On each turn, one of four serving options happens randomly, each with equal probability:

1. A - 100, B - 0
2. A - 75, B - 25
3. A - 50, B - 50
4. A - 25, B - 75

The game **stops** when at least one soup becomes empty.
We want:

$$
P(\text{A empty before B}) + \frac{1}{2} P(\text{A and B empty at the same time})
$$

---

## **2. The key observations**

* Serving amounts are in **multiples of 25 mL**, so we can think in **units** rather than mL to simplify:

  * Instead of `n`, use `n_units = ceil(n / 25)`.
* The maximum soup poured in one step is 100 mL = **4 units**.
* The problem is essentially:
  "From `(n_units, n_units)`, repeatedly subtract one of four fixed (A, B) amounts, until one reaches 0 — what’s the probability that A finishes first (or at the same time)?"

---

## **3. Recursive thinking**

Let `f(a, b)` = desired probability starting with `a` units of A and `b` units of B.

### Base cases:

* **A empty, B not empty**: probability = **1** (A finishes first).
* **B empty, A not empty**: probability = **0** (B finishes first).
* **Both empty at same time**: probability = **0.5** (split).

### Transition:

From `(a, b)`:

* Next step goes to one of:

  1. `(a - 4, b - 0)`
  2. `(a - 3, b - 1)`
  3. `(a - 2, b - 2)`
  4. `(a - 1, b - 3)`
* Each with probability 0.25.
  So:

$$
f(a, b) = 0.25 \times [ f(a-4, b) + f(a-3, b-1) + f(a-2, b-2) + f(a-1, b-3) ]
$$

with boundaries handled as in the base cases.

---

## **4. Optimization thoughts**

* **n can be huge** (up to $10^9$), so recursion with memoization will only work if we stop early.
* The problem has a property: as `n` grows large, the probability approaches **1** (because A tends to run out before B in the long run).
* In fact, for `n >= ~500` (in units), the answer is very close to 1 within $10^{-5}$, so we can **short-circuit** for large n.

---

## **5. Approach summary**

1. **Scale down**: Convert `n` mL → `ceil(n / 25)` units.
2. **Recursive + memoization**:

   * Base cases for A=0, B=0.
   * Transition from `(a, b)` → sum of next states × 0.25.
3. **Large-n cutoff**:

   * If `n_units > threshold` (e.g., 500), return 1.0 directly.
4. **Return result**.

---

## **6. Why this works**

* The problem is basically a **Markov process** with finite states (when scaled down).
* Memoization avoids recalculating probabilities for the same `(a, b)`.
* Large-n cutoff is mathematically valid due to convergence properties of this probability.

---
