Sure! Here's the straightforward approach and reasoning for checking if a number is a power of two:

---

## **Problem Understanding**

You want to determine if an integer `n` can be expressed as $2^x$ for some integer $x$.
This means `n` should be exactly one of the powers of two: 1, 2, 4, 8, 16, 32, etc.

---

## **Key Observations**

* Powers of two in binary always have **exactly one bit set** to 1.
  For example:

  * 1 (decimal) = 1 (binary) → one `1` bit
  * 2 (decimal) = 10 (binary) → one `1` bit
  * 4 (decimal) = 100 (binary) → one `1` bit
  * 8 (decimal) = 1000 (binary) → one `1` bit
* Numbers that are powers of two have a special property:

  $$
  n \ \& \ (n - 1) = 0
  $$

  This works because subtracting 1 flips the rightmost set bit and all bits after it, so the bitwise AND clears the only set bit.

---

## **Approach**

1. **Check if `n` is positive:**
   Powers of two are positive integers, so if `n <= 0`, return false immediately.

2. **Use bit manipulation to check the set bits:**

   * Compute $n \ \& \ (n - 1)$.
   * If the result is 0, it means only one bit was set in `n`, so `n` is a power of two.
   * Otherwise, it's not.

---

## **Why This Works**

* If a number has only one `1` bit in its binary form, subtracting 1 flips that bit and all bits after it, so their AND is zero.
* For example:
  $8 = 1000_2$
  $7 = 0111_2$
  $8 \& 7 = 0000_2 = 0$

---

## **Complexity**

* Time complexity is **O(1)** because bitwise operations are constant time.
* Space complexity is **O(1)**, using only a few variables.

---
