To solve the problem of finding the **maximum absolute difference between adjacent elements** in a **circular array**, here's a clear approach:

---

### **Approach:**

1. **Understand "circular" nature**:

   * In a circular array, the last and first elements are considered adjacent. For an array `nums` of size `n`, both:

     * `|nums[i] - nums[i+1]|` (for `0 <= i < n-1`)
     * `|nums[n-1] - nums[0]|` (last and first)
       need to be checked.

2. **Loop through adjacent pairs**:

   * Iterate through the array from index `0` to `n-2`, and compute the absolute difference between each `nums[i]` and `nums[i+1]`.

3. **Check the circular edge**:

   * After the loop, also compute the absolute difference between `nums[n-1]` and `nums[0]`.

4. **Track the maximum**:

   * Keep a variable to store the maximum absolute difference seen so far.

---

### **Example Walkthrough:**

For `nums = [1, 2, 4]`:

* |1 - 2| = 1
* |2 - 4| = 2
* |4 - 1| = 3 ← circular pair
* Max = 3

For `nums = [-5, -10, -5]`:

* \|-5 - (-10)| = 5
* \|-10 - (-5)| = 5
* \|-5 - (-5)| = 0
* Max = 5

---

### **Time Complexity:**

* **O(n)**, where `n` is the number of elements in the array. You make one pass through the array, and do a constant-time operation at each step.

### **Space Complexity:**

* **O(1)**, since you're only using a few extra variables for tracking differences.
