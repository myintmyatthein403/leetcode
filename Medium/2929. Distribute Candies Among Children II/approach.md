To solve **Leetcode 2929: Distribute Candies Among Children II**, we want to count **the number of integer solutions** to:

> `x + y + z = n`, where `0 ≤ x, y, z ≤ limit`.

This is a classic **bounded integer partition** problem, which can be broken down as follows:

---

### ✅ Step-by-step Approach

#### 1. **Count total combinations without limit**

Count all non-negative integer solutions to `x + y + z = n` (no upper bound).

This is a classic stars and bars problem:

$$
\text{Total solutions without limit} = \binom{n + 3 - 1}{3 - 1} = \binom{n + 2}{2}
$$

---

#### 2. **Subtract invalid combinations (where any variable > limit)**

We need to **exclude** the number of combinations where at least one child receives **more than `limit`** candies.

We apply the **inclusion-exclusion principle**.

Let’s define:

* `A`: combinations where `x > limit`
* `B`: combinations where `y > limit`
* `C`: combinations where `z > limit`

Then:

$$
\text{Valid combinations} = \text{Total combinations} - (|A| + |B| + |C|) + (|A \cap B| + |A \cap C| + |B \cap C|) - |A \cap B \cap C|
$$

---

#### 3. **How to compute |A|?**

If `x > limit`, then let’s define `x' = x - (limit + 1)` so that `x' ≥ 0`.

Now the equation becomes:

$$
x' + y + z = n - (limit + 1)
$$

This gives us:

$$
|A| = \binom{(n - limit - 1) + 2}{2} \text{ if } n - limit - 1 ≥ 0
$$

Do similarly for `|B|`, `|C|`, `|A ∩ B|`, etc., by adjusting **two or more** variables and checking if the remaining total is ≥ 0.

---

### 💡 Key Insight

We are computing **bounded integer partitions** of `n` into 3 variables, each ≤ `limit`. Total = **unbounded count - invalids (using inclusion-exclusion)**.

---

### 🔢 Edge Cases

* If `n > 3 * limit`: No valid distribution.
* If `n ≤ limit`: Many combinations; all possible distributions are valid.

---

### ✅ Final Thoughts

* This approach is **mathematically efficient**, avoids brute-force enumeration.
* You only need to compute a few binomial coefficients.
* Since `n` can be up to 10⁶, precomputing factorials modulo a large prime is needed if code is required.

Let me know if you'd like the code with modular arithmetic for large values.
