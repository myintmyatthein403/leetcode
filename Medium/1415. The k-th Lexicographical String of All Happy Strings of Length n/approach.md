### Approach Explanation for `getHappyString(n, k)`

The function generates the *k-th lexicographically smallest "happy" string* of length `n` using the characters `'a'`, `'b'`, and `'c'`. A "happy" string is defined as a string where no two adjacent characters are the same.

---

### **Key Steps in the Approach:**

1. **Backtracking to Generate Strings:**
   - The function uses **backtracking** to construct all possible happy strings of length `n`.
   - It recursively builds the string character by character, ensuring that no adjacent characters are the same.

2. **Lexicographical Order:**
   - The function implicitly generates the strings in lexicographical order because it always picks characters from the set `['a', 'b', 'c']` in that order.
   - The first valid string will be `"ababab..."` (or similar), and it will continue in a systematic sequence.

3. **Tracking the k-th Happy String:**
   - A **counter (`count`)** keeps track of how many valid happy strings have been generated.
   - Once `count` reaches `k`, the function stores the current string as the `result`.
   - The function then stops further exploration to improve efficiency.

4. **Pruning the Search:**
   - If `count` already exceeds `k`, further recursion is unnecessary, and the function **exits early**.
   - This helps avoid unnecessary computations, improving efficiency.

5. **Returning the Result:**
   - If the function finds the `k-th` happy string, it returns it.
   - If there are fewer than `k` happy strings possible, it returns an empty string `""`.

---

### **Time Complexity Analysis**
- The function explores all valid `n`-length happy strings.
- There are at most `2^n` happy strings (since each character has at most 2 valid choices after the first one).
- In the worst case, the function iterates through all of them up to the `k-th` string.
- The complexity is **O(2ⁿ)**, which is feasible for small values of `n` but grows exponentially.

---

### **Example Walkthrough**
#### Input: 
```js
getHappyString(3, 4)
```
#### Backtracking Process:
1. `"aba"` (1st happy string)
2. `"abc"` (2nd happy string)
3. `"aca"` (3rd happy string)
4. `"acb"` (4th happy string) ✅ *k-th string found!*

#### Output:
```js
"acb"
```

---

### **Edge Cases Considered**
- `k` is larger than the number of possible happy strings → return `""`.
- Smallest and largest `n` values to test recursion depth.
- Checking adjacent character constraints.

This method ensures the correct **k-th lexicographical happy string** is found efficiently. 🚀
