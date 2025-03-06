To solve this problem, let's break it down into a structured approach:

### **Understanding the Problem**
- We have an **n × n** matrix where each number from **1** to **n²** appears exactly once **except**:
  - One number (`a`) appears **twice**.
  - One number (`b`) is **missing**.
- Our goal is to find **a** and **b** and return them as `[a, b]`.

---

### **Approach**
1. **Flatten the Matrix**  
   Convert the 2D grid into a **1D list** for easier processing.

2. **Use a Frequency Map (HashMap or Array)**  
   - Since the numbers are in the range **[1, n²]**, we can use:
     - A **dictionary/hashmap** (if we want flexibility).
     - A **list of size n²+1** (since values are from **1 to n²**) to count occurrences.

3. **Identify the Repeated and Missing Numbers**  
   - Iterate through the frequency list:
     - The number that appears **twice** is `a`.
     - The number that **never appears** is `b`.

4. **Return the Result**  
   - Construct an array `[a, b]` and return it.

---

### **Complexity Analysis**
- **Flattening the Matrix** → **O(n²)**
- **Building the Frequency Map** → **O(n²)**
- **Finding `a` and `b`** → **O(n²)**
- **Overall Complexity** → **O(n²)** (which is efficient for this problem size)

---

### **Alternative Approach (Mathematical Method)**
We can also use **sum and sum of squares** formulas:
- Let `S_expected = (n² * (n² + 1)) / 2` (sum of numbers from `1` to `n²`)
- Let `S_actual` be the sum of numbers in `grid`
- Let `S2_expected = (n² * (n² + 1) * (2n² + 1)) / 6` (sum of squares from `1²` to `n²²`)
- Let `S2_actual` be the sum of squares of numbers in `grid`
- Solve for the repeated and missing number using:
  - `a - b = S_actual - S_expected`
  - `a² - b² = S2_actual - S2_expected`
  - Solve these two equations to find `a` and `b`.

This method reduces space complexity to **O(1)** but requires careful implementation to avoid overflow.
