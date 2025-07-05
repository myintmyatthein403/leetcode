To solve **"1394. Find Lucky Integer in an Array"**, we can use a **frequency counting approach**. Here's the breakdown of the steps:

---

### **Approach & Explanation:**

#### **1. Understand what a "lucky integer" means:**

A **lucky integer** is an integer `x` such that:

* `x` appears in the array exactly `x` times.
* For example, if `x = 2` appears **2 times**, it's lucky.

---

#### **2. Count frequency of all numbers:**

We need to determine how many times each number appears in the array.

* Use a **frequency map** (or a simple array if you want fixed size, since `arr[i] <= 500`).
* This step ensures we know `frequency[x]` for each unique `x` in `arr`.

---

#### **3. Check which numbers are lucky:**

Loop through the frequency map:

* For each number `num`, check if `frequency[num] == num`.
* If so, it qualifies as a lucky integer.

---

#### **4. Find the largest lucky integer:**

Among all lucky integers found, return the **maximum**.

* If **none** are found, return `-1`.

---

### **Time & Space Complexity:**

* **Time Complexity:** `O(n)`

  * We go through the array once to count frequencies (`O(n)`)
  * Then go through possible values up to 500 (`O(500)` ≈ constant).
* **Space Complexity:** `O(1)`

  * Since the range of values is small (`≤ 500`), we can use a fixed-size array or map — effectively constant space.

---

### **Why This Approach Works Well:**

* Input constraints are small (`≤ 500`), so frequency-based counting is efficient.
* It directly matches the problem's definition: match value with frequency.
* Looking for the maximum of a few matching elements is straightforward after filtering.

---

Let me know if you want a step-by-step example walkthrough or the code next.
