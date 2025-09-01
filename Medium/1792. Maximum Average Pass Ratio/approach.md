To solve **Leetcode 1792. Maximum Average Pass Ratio**, we need to **maximize the average pass ratio** across all classes after optimally assigning a limited number of **extra passing students**.

Let’s walk through the **intuitive approach and key insights**, without writing code:

---

### ✅ **Understanding the Problem**

* Each class has a pass ratio: `passi / totali`.
* We are allowed to assign `extraStudents`, each of whom will **definitely pass**.
* When we assign an extra student to a class, both the numerator and denominator increase by 1 → new ratio: `(passi + 1) / (totali + 1)`.
* Our goal is to **assign these students one at a time** to maximize the **average of all class pass ratios**.

---

### 🧠 **Key Insight**

To maximize the overall average, **each extra student should be assigned to the class where they will make the biggest impact** — i.e., the class where assigning a student **increases the pass ratio the most**.

This leads to a **greedy strategy**.

---

### 📊 **Greedy + Priority Queue (Max Heap)** Approach

1. **Define the "gain" or "delta"** for a class if we assign one extra student:

   $$
   \text{delta} = \left(\frac{pass + 1}{total + 1}\right) - \left(\frac{pass}{total}\right)
   $$

   This represents the **increase in pass ratio** if one student is added.

2. **Use a Max Heap** (priority queue) to always pick the class with the **highest delta**.

   * This ensures that each student is allocated to where they have the **maximum marginal benefit**.

3. **Process each extra student one-by-one**:

   * Pop the class with the highest delta from the heap.
   * Add a student (i.e., increment both `pass` and `total`).
   * Recalculate its delta and push it back into the heap.

4. After all `extraStudents` are assigned, **compute the average pass ratio** across all classes.

---

### 📦 **Why This Works**

* The problem is **greedy-optimal** because each decision is **locally best** (maximum delta) and does not hurt global optimality — proven by marginal benefit analysis.
* Using a **heap** gives us efficient access to the class with the best current gain:
  Time complexity: **O(n log n + extraStudents × log n)**

---

### 📌 Summary

| Step | Action                                                                                   |
| ---- | ---------------------------------------------------------------------------------------- |
| 1    | Compute the initial delta for each class and push into max heap                          |
| 2    | For each extra student: pop the best class, assign student, recalculate delta, push back |
| 3    | After all students are assigned, calculate and return the average pass ratio             |

---
