To solve **[2411. Smallest Subarrays With Maximum Bitwise OR](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/)**, we need to find, for each index `i`, the **smallest** subarray starting at `i` whose **bitwise OR** equals the **maximum OR** achievable from index `i` to the end of the array.

---

### 🔍 Understanding the Problem

For each starting index `i`, we are looking for:

* The **maximum OR** value obtainable from subarrays starting at `i`.
* The **smallest** subarray (from `i` to some `j`) whose bitwise OR is equal to that max value.

This is a **sliding window** / **bit-tracking** type problem with a focus on:

* Efficient calculation of OR over ranges.
* Minimizing subarray size while maintaining a bitwise condition.

---

### 🧠 Key Observations

1. **Bitwise OR** is **monotonic increasing** with respect to subarray size:

   * As you extend the subarray, the OR can only stay the same or increase.
   * Once you reach the max OR from `i`, there’s no point in going further.

2. **You need to know**, for each index `i`, what’s the maximum OR obtainable from `i` to `n - 1`.

3. Since OR can be represented by **bit positions**, tracking **when each bit appears** going backwards is helpful.

---

### 🪜 Step-by-Step Approach

#### 1. **Traverse from the back** of the array

Start from `n - 1` and move to index `0`. This helps because:

* We know the future max ORs from `i + 1` onward.
* We can use this info to decide the minimal length needed to reach the target OR.

#### 2. **Track the latest occurrence of each bit**

There are at most 32 bits (since `nums[i] ≤ 10^9`).

* For each bit from `0 to 31`, keep track of the **last index** where this bit was set.
* This tells you how far you need to go from `i` to "collect" that bit.

#### 3. **For each index `i`**

* Set the current OR to 0.
* Update the bit positions based on `nums[i]`.
* Compute the max OR from `i` to `n - 1`.
* Figure out the **furthest** index `j` you must include in the subarray to collect all bits required for the max OR.
* `answer[i] = j - i + 1`

#### 4. **Final result**

* Construct the answer array as you go.
* Complexity remains **O(n \* 32)** = **O(n)** in practice.

---

### ✅ Benefits of This Strategy

* Efficient: No nested loops.
* Scalable: Works up to `n = 10^5`.
* Smart use of bit manipulation to avoid full subarray checks.

---
