To solve **Leetcode 1957: Delete Characters to Make Fancy String**, the goal is to remove as few characters as possible so that **no three consecutive characters are the same**.

---

### 💡 **Key Idea**

We only need to **ensure that we never have three identical characters in a row**. So as we **iterate through the string**, we can **build the result character by character**, but **skip any character that would cause three consecutive duplicates**.

---

### 🧠 **Approach (Greedy + One-Pass Iteration)**

1. **Initialize a result string** (or use a list for efficient appending).
2. **Iterate through the input string `s`** character by character.
3. At each step, check the **last two characters added** to the result:

   * If both are the **same as the current character**, then **skip the current character**.
   * Otherwise, **append** the current character to the result.
4. At the end, return the joined result as the final string.

---

### 🔍 Why This Works

* This approach ensures that **you never allow three of the same letter in a row**.
* It’s **greedy**, because it keeps as many characters as allowed at each step while maintaining the constraint.
* Because it goes left to right and always makes the locally optimal choice (skip the character only when it's the 3rd repeat), it gives the **minimal number of deletions** needed.

---

### 🕒 Time and Space Complexity

* **Time Complexity**: O(n), where `n` is the length of the string. Each character is processed once.
* **Space Complexity**: O(n), for storing the final result.

