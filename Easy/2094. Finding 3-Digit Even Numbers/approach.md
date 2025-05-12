To solve this problem, follow these **conceptual steps** (no code yet):

---

### **1. Understand the Requirements**

You are to form 3-digit integers from the given digits list. These integers must:

* Be formed by **choosing 3 digits** from the array (respecting how many times each digit appears — i.e., duplicates are allowed).
* **Have no leading zero** (the first digit must not be 0).
* **Be even**, meaning the **last digit must be even** (0, 2, 4, 6, or 8).
* All valid numbers must be **unique** and returned in **sorted order**.

---

### **2. Generate All Valid 3-Digit Permutations**

Think in terms of permutations:

* For every **unique combination of 3 digits from the input (including duplicates)**, generate all possible permutations of those 3 digits.
* Use all combinations of 3 digits that respect the count of each digit in the input (i.e., don't use '8' three times if it appears only twice).

---

### **3. Filter Out Invalid Numbers**

For each generated permutation (which is a candidate number):

* **Check if the first digit is 0** → discard if so.
* **Check if the last digit is even** → discard if not.
* **If both conditions are met**, this is a valid number.

---

### **4. Use a Set for Uniqueness**

* To ensure no duplicates are returned, store valid numbers in a **set**.

---

### **5. Return the Final Result**

* Convert the set of valid numbers to a list.
* **Sort** the list.
* Return it.

---

### Example Walkthrough

**Input:** `[2, 1, 3, 0]`

* Possible digit triplets include: (2,1,3), (2,1,0), (2,3,0), (1,3,0), etc.
* From (2,1,0) you get permutations like 102, 120, 201, 210, 012 (invalid), 021 (invalid).
* Only keep permutations like 102, 120, 210 that are valid (start ≠ 0, end is even).
* Final result: sorted list of all such valid and unique numbers.
