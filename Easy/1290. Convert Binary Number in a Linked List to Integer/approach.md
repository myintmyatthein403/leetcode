To solve the problem of converting a binary number stored in a singly linked list to a decimal integer, you can follow this conceptual **approach**:

---

### 🧠 **Key Insight**

Each node in the linked list represents a bit in a binary number, with the **most significant bit (MSB)** at the head. This mirrors how binary numbers are typically written left to right.

---

### ✅ **Approach Explanation**

#### 1. **Initialize a result variable**

Start with a result value (e.g., `num = 0`) that will accumulate the final decimal number.

#### 2. **Traverse the linked list**

Go through each node in the linked list from head to tail. For every node:

* **Shift the current result left by one bit** (i.e., multiply it by 2).
* **Add the current node’s value (0 or 1)** to the result.

This simulates binary to decimal conversion as each new bit is read from left to right.

#### 3. **Why this works**

This is equivalent to reading binary digits from left to right and computing the value the way you would on paper:

* If you have bits `a, b, c` (from left to right), then the decimal is:

  ```
  a*(2^2) + b*(2^1) + c*(2^0)
  ```

But instead of calculating powers of 2, the left shift approach builds this up efficiently.

---

### 🧮 **Example: \[1 → 0 → 1]**

* Start with `num = 0`
* Read `1`: `num = (0 << 1) | 1 = 1`
* Read `0`: `num = (1 << 1) | 0 = 2`
* Read `1`: `num = (2 << 1) | 1 = 5`

Final result: `5`

---

### ⏱️ **Time Complexity**

* **O(n)** where *n* is the number of nodes in the linked list.

### 🧵 **Space Complexity**

* **O(1)** since we only use a single integer to keep track of the result.

---

This approach is clean, efficient, and ideal for converting binary digits from a list structure into an integer.
