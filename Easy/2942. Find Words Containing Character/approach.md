To solve the problem **"Find Words Containing Character"**, we can follow a straightforward approach. Here's the step-by-step explanation without code:

---

### **1. Understand the Inputs and Outputs**

* You are given:

  * A **list of words** (strings), indexed from 0.
  * A **character** `x` that you need to search for inside each word.
* You need to **return the indices** of the words where the character `x` appears **at least once**.

---

### **2. Iterate Through the List**

* Go through each word in the list along with its index.
* For each word, check if the character `x` is **present anywhere in the word**.

---

### **3. Track Matching Indices**

* If the character `x` is found in a word, record the index of that word in a result list.

---

### **4. Return the Result**

* After checking all words, return the list of indices where the character was found.
* The order of indices does **not need to be sorted**—any order is acceptable.

---

### **Time and Space Complexity**

* **Time complexity**: O(n \* m), where `n` is the number of words and `m` is the average length of each word, since we may need to look at each character in each word.
* **Space complexity**: O(k), where `k` is the number of words that contain the character `x`, to store the resulting indices.

---

### **Edge Cases**

* If the character does not appear in any word → return an **empty list**.
* If the input list is empty → also return an **empty list**.
* If a word is empty, it obviously cannot contain any characters, so skip it.

---

This approach is efficient and clear for this kind of character search problem.
