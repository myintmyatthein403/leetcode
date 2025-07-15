To determine if the given `word` is **valid**, we follow a **step-by-step validation approach** based on the problem's rules:

---

### **1. Check Minimum Length**

* The word must have **at least 3 characters**.
* If it is shorter, return `false` immediately.

---

### **2. Character Validation**

* Each character in the word must be:

  * a **digit** (0–9),
  * an **uppercase** letter (A–Z),
  * or a **lowercase** letter (a–z).
* If there is **any invalid character** like `@`, `#`, `$`, or others, the word is invalid.

---

### **3. Vowel Presence Check**

* The word must contain **at least one vowel**:

  * `'a', 'e', 'i', 'o', 'u'` (both lowercase and uppercase).
* Scan the word and track if **any vowel** is found.

---

### **4. Consonant Presence Check**

* The word must contain **at least one consonant**:

  * Any **letter** (A–Z or a–z) **that is not a vowel**.
* For each character:

  * If it's a letter but not a vowel, count it as a consonant.

---

### **5. Final Decision**

* Return `true` **only if**:

  * All characters are valid,
  * Word has at least one vowel,
  * Word has at least one consonant,
  * Length ≥ 3.

---

This approach ensures a single pass over the string is efficient, while checking all conditions.
