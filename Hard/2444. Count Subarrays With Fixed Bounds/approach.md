To solve the problem of counting **fixed-bound subarrays**, we need an efficient approach since checking all possible subarrays would take **O(n²)** time, which is too slow for large arrays.

### 🚀 Core Idea:
We scan through the array once (**O(n)**) and keep track of the positions of:
- The last occurrence of `minK`
- The last occurrence of `maxK`
- The last index where any value was **outside the range** `[minK, maxK]`

This helps us identify **valid subarrays ending at each index**.

---

### ✅ Detailed Steps:

1. **Initialize three pointers**:
   - `lastMinK`: The last index where `nums[i] == minK`
   - `lastMaxK`: The last index where `nums[i] == maxK`
   - `lastInvalid`: The last index where `nums[i] < minK or nums[i] > maxK`

2. **Iterate through the array**:
   - For each `i` in `nums`:
     - If `nums[i] == minK`, update `lastMinK = i`
     - If `nums[i] == maxK`, update `lastMaxK = i`
     - If `nums[i] < minK or nums[i] > maxK`, update `lastInvalid = i`
     
     - If both `minK` and `maxK` have occurred after `lastInvalid`, then:
       - The number of valid subarrays ending at `i` is `min(lastMinK, lastMaxK) - lastInvalid`
       - Add this number to the result.

3. **Return the result** after the loop.

---

### 🧠 Why This Works:

- We're effectively counting the number of **contiguous subarrays ending at `i`** that contain both `minK` and `maxK`, and that **do not contain invalid elements**.
- By maintaining just the last seen positions, we avoid recomputing over and over.
