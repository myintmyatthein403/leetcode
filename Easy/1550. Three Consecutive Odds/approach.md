To solve the problem of checking whether there are **three consecutive odd numbers** in a given array `arr`, you can use a simple **linear scan** approach. Here's how you can approach and explain it step-by-step:

---

### **Approach: Sliding Window of Size 3**

1. **Initialize a counter** to keep track of how many consecutive odd numbers you've seen.

2. **Iterate through the array** one element at a time.

3. **Check if the current number is odd:**

   * If it is, **increment the counter**.
   * If it is not, **reset the counter to 0**, because the sequence is broken.

4. **At each step**, check if the counter has reached **3**. If it has, it means you've found three consecutive odd numbers — so return `true`.

5. If the loop finishes without the counter ever reaching 3, return `false`.

---

### **Why this works:**

* It's efficient: only a **single pass** through the array (O(n) time).
* It uses **constant space** (O(1)), since you only need one counter.

This method is simple, fast, and doesn't require any additional data structures or nested loops.
