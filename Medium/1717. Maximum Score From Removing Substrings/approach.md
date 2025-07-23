To solve **Leetcode 1717 - Maximum Score From Removing Substrings**, the key insight lies in **greedily removing the more valuable substrings first**. Here's the high-level **approach and explanation** (no code):

---

### **1. Greedy Priority Based on Score**

You can remove either `"ab"` or `"ba"` repeatedly. Since each operation gives a different score (`x` for `"ab"` and `y` for `"ba"`), **we should always prioritize removing the substring that gives the higher score first**.

* If `x > y`, remove all `"ab"` substrings first.
* If `y > x`, remove all `"ba"` substrings first.

This greedy choice ensures you always take the highest value per operation, maximizing your total score.

---

### **2. Simulate Removals with a Stack**

To simulate the removal efficiently (especially for large strings), you iterate through the string **once**, maintaining a **stack** to track characters. As you encounter pairs (`"ab"` or `"ba"` depending on which you prioritize), you remove them on the fly and add to your score.

This ensures:

* Linear time complexity `O(n)`
* Characters are processed only once
* Substrings are removed greedily in order of value

---

### **3. Second Pass for the Lower-Value Pair**

Once all instances of the higher-value pair have been removed, you may have created new opportunities to remove the **other** pair (e.g., removing `"ab"` may form new `"ba"`). So you do a **second pass** through the modified string to remove the remaining type of substrings.

Again, simulate this with a similar stack-based process.

---

### **4. Total Score**

Add the score from both passes (first high-priority removals, then the other type) to get the **maximum total score**.

---

### **Summary**

* **Greedy:** Always remove the higher scoring substring first.
* **Efficient:** Use stack simulation to process in linear time.
* **Two Passes:** First for the prioritized substring, second for the remaining one.

This approach guarantees you get the maximum score possible based on the operations.
