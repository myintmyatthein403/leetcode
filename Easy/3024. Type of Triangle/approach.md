To solve the problem of determining the **type of triangle** given an array of three side lengths, we can follow a clear logical approach:

---

### **1. Check Triangle Validity**

Before classifying the triangle, we must ensure that the three sides **can** form a triangle.

#### Triangle Inequality Theorem:

For any three side lengths `a`, `b`, and `c`, they can form a triangle **if and only if**:

* `a + b > c`
* `a + c > b`
* `b + c > a`

If **any** of these conditions fail, the sides **cannot** form a triangle, and we immediately return `"none"`.

---

### **2. Determine Triangle Type**

Once the sides satisfy the triangle inequality, we classify the triangle based on the equality of side lengths:

* **Equilateral:** All three sides are equal (`a == b == c`)
* **Isosceles:** Exactly two sides are equal (e.g., `a == b`, `a == c`, or `b == c`), but **not all three**
* **Scalene:** All sides are different (`a != b`, `a != c`, `b != c`)

---

### **3. Summary of the Steps**

1. Extract the three sides from the input array.
2. Use the triangle inequality theorem to check if a triangle is possible.

   * If not, return `"none"`.
3. If valid, compare the side lengths:

   * If all are equal → `"equilateral"`
   * Else if exactly two are equal → `"isosceles"`
   * Else → `"scalene"`

---

This approach ensures correctness by first validating the triangle before attempting classification.
