## **1. Understanding the Problem**

We start with an integer `n`.
We need to form the **minimum number of powers of 2** that sum to `n`.

* This is basically the **binary representation** of `n`, but expressed as an array of powers of 2, sorted in non-decreasing order.
* Example: `n = 15 → binary 1111 → powers = [1, 2, 4, 8]`.

Then we have multiple queries `[left, right]` asking for:

$$
product = powers[left] \times powers[left+1] \times ... \times powers[right]
$$

Return each product modulo $10^9 + 7$.

---

## **2. Key Observations**

* Since powers are based on the binary representation, there is only **one possible list** of powers for a given `n`.
* The **minimum number of powers of 2** is found by decomposing `n` into the sum of distinct powers of 2 (no duplicates), which is exactly the **set bits** in binary form.
* Querying product over a range is a **prefix product problem** (similar to prefix sums but with multiplication).

---

## **3. Step-by-Step Approach**

### Step A: Build the `powers` array

* Start from `n`, check each bit in binary.
* For every set bit at position `i`, append $2^i$ to `powers`.
* The array will be sorted naturally since we go from smallest to largest bit.

Example:
`n = 15 → binary 1111`
Set bits at positions `0, 1, 2, 3` → powers = `[1, 2, 4, 8]`

---

### Step B: Precompute prefix products

* Since we have **up to 10⁵ queries**, computing each product directly could be slow.
* Instead, make an array `prefixProd` where:

$$
prefixProd[i] = (powers[0] \times powers[1] \times ... \times powers[i]) \mod MOD
$$

* This allows answering a query in **O(1)**:

$$
product(left, right) = prefixProd[right] \times inv(prefixProd[left - 1]) \mod MOD
$$

where `inv(x)` is the modular inverse of `x` (since we are dividing under modulo).

---

### Step C: Modular Arithmetic

* Use $MOD = 10^9 + 7$ (prime).
* Modular inverse is computed via **fast exponentiation** (Fermat’s Little Theorem):

$$
inv(a) = a^{MOD-2} \mod MOD
$$

---

### Step D: Query answering

* If `left == 0` → just return `prefixProd[right]`.
* Else → use the inverse to remove the left segment.

---

## **4. Complexity**

* Building `powers`: **O(log n)** (one step per bit in `n`).
* Precomputing prefix products: **O(len(powers))** (≤ 30 for n ≤ 1e9).
* Answering all queries: **O(queries.length)**.

---

## **5. Why this works**

* We reduce the original problem to:

  * **Binary decomposition** for `powers`.
  * **Prefix product + modular inverse** for fast query answering.
* This is efficient even for 10⁵ queries because `powers` length is very small (max 30).

---

