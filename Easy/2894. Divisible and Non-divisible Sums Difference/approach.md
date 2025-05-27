To solve the problem **"2894. Divisible and Non-divisible Sums Difference"**, we need to compute the difference between:

* `num1`: The sum of all numbers from 1 to `n` that are **not divisible** by `m`.
* `num2`: The sum of all numbers from 1 to `n` that **are divisible** by `m`.

---

### Step-by-step Explanation:

#### 1. **Total Sum of 1 to n**

We know the formula to compute the sum of the first `n` natural numbers:

$$
\text{total\_sum} = \frac{n \times (n + 1)}{2}
$$

This gives the sum of all numbers from 1 to `n`, regardless of divisibility.

---

#### 2. **Sum of Numbers Divisible by m**

We need to find the sum of all numbers in the range `[1, n]` that are divisible by `m`. These numbers form an arithmetic progression:

$$
m, 2m, 3m, ..., km \quad \text{where } km \leq n
$$

The number of such terms is:

$$
\text{count} = \left\lfloor \frac{n}{m} \right\rfloor
$$

The sum of this arithmetic sequence is:

$$
\text{div\_sum} = m \times \frac{\text{count} \times (\text{count} + 1)}{2}
$$

---

#### 3. **Compute `num1` and `num2`**

* `num1 = total_sum - div_sum` (removing divisible numbers from total)
* `num2 = div_sum`

---

#### 4. **Return the Difference**

$$
\text{result} = num1 - num2 = (total\_sum - div\_sum) - div\_sum = total\_sum - 2 \times div\_sum
$$

This gives us a very efficient approach using simple arithmetic — no loops needed.

---

### Time & Space Complexity:

* **Time Complexity:** O(1), because all operations are constant-time arithmetic.
* **Space Complexity:** O(1), no additional space used.

---

This method is optimal for the problem constraints `1 <= n, m <= 1000`.
