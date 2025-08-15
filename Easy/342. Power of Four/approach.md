Alright — here’s the thought process for **Power of Four** without diving into code.

---

## **Understanding the Problem**

We need to check if `n` can be expressed as:

$$
n = 4^x
$$

where `x` is a **non-negative integer** (including 0, since $4^0 = 1$).

So valid examples are:

```
1, 4, 16, 64, 256, ...
```

Invalid examples are:

```
0, negative numbers, 2, 5, 8, 12, ...
```

---

## **Key Observations**

1. **Powers of four are also powers of two** —
   Every $4^x$ can be written as $2^{2x}$.
   This means a valid number must have **exactly one bit set in binary**, but that bit must also be in an **odd position** (1st, 3rd, 5th, … from the right).

   Example:

   * $4^0 = 1$ → binary: `0001` (bit in position 1) ✅
   * $4^1 = 4$ → binary: `0100` (bit in position 3) ✅
   * $4^2 = 16$ → binary: `10000` (bit in position 5) ✅
   * $2 = 0010$ (bit in position 2) ❌

2. **It must be positive** —
   No negative or zero values are powers of four.

---

## **Possible Approaches**

### **Approach 1: Iterative Division**

* Keep dividing `n` by 4 while it’s divisible by 4.
* If at the end you get `1`, then `n` is a power of four.
* Pros: Easy to understand.
* Cons: Multiple divisions can be slower for huge numbers.

---

### **Approach 2: Power of Two + Position Check**

* First, check if `n` is a power of two (only one set bit).
* Then check if that set bit is in an odd position.
* The "odd position" test can be done with a mask like `0x55555555` in binary, which has bits set at all odd positions.
* Pros: Constant time check, no loops.
* Cons: Requires knowing about bit manipulation.

---

### **Approach 3: Math Logarithm Check**

* Use the property:

  $$
  \log_4(n) = \frac{\log_2(n)}{2}
  $$
* If the result is an integer, `n` is a power of four.
* Pros: Mathematical elegance.
* Cons: Floating-point precision issues for large numbers.

---

## **Edge Cases to Consider**

* `n = 0` → false
* `n < 0` → false
* `n = 1` → true (`4^0`)
* Very large numbers close to $2^{31}-1$ (integer limit in problem).
* Non-power-of-four powers of two (e.g., 2, 8, 32).

---

