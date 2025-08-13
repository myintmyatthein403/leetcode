For **"Power of Three"**, the idea is to check whether a given integer can be expressed as $3^x$ for some integer $x \geq 0$.

---

## **Key Observations**

1. **Positive numbers only**
   A power of three must be **greater than 0** — negative numbers or zero cannot be $3^x$.

2. **Divisibility property**
   If $n$ is a power of three, then repeatedly dividing by 3 should eventually give 1.
   Example: $27 \rightarrow 9 \rightarrow 3 \rightarrow 1$.

3. **Termination check**
   If at any step $n$ is not divisible by 3 (and not yet 1), it’s not a power of three.

4. **Alternative: Math/logarithm approach**
   Since $n = 3^x$, taking logarithms gives:

   $$
   x = \frac{\log(n)}{\log(3)}
   $$

   If $x$ is an integer (within floating-point tolerance), then $n$ is a power of three.
   However, this method needs careful handling of precision errors.

5. **Precomputation trick**
   Since $n$ is limited to 32-bit signed integers, the largest power of 3 in that range is $3^{19} = 1,162,261,467$.
   Any valid power of 3 must be a divisor of this number.

---

## **Step-by-step approach (iterative divisibility)**

1. If $n \leq 0$, return **false**.
2. While $n$ is divisible by 3, divide it by 3.
3. At the end, check if $n = 1$:

   * If yes → it’s a power of three.
   * If no → it’s not.

---

### **Example**

**n = 27**

* $27 \div 3 = 9$
* $9 \div 3 = 3$
* $3 \div 3 = 1$ → **true**

**n = 45**

* $45 \div 3 = 15$
* $15 \div 3 = 5$ → not divisible by 3 anymore, not 1 → **false**

---
