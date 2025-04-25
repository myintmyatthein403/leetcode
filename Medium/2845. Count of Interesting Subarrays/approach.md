To solve this problem efficiently, we need to avoid checking every possible subarray (which would be O(n²)), and instead use **prefix sums** and **hash maps** to count interesting subarrays in linear time.

---

### 🔍 Understanding the Problem

We're given:
- An array `nums`
- An integer `modulo`
- An integer `k`

We define a subarray `nums[l..r]` as **interesting** if:
- `cnt` = number of elements in that subarray such that `nums[i] % modulo == k`
- and `cnt % modulo == k`

So, we want to **count** how many subarrays satisfy this condition.

---

### ✅ Key Observations

Let’s build a **prefix count** array where:
- Each element represents the cumulative count of numbers satisfying `nums[i] % modulo == k` up to index `i`.

Let `prefixCnt[i]` be that cumulative count at index `i`.

If we know that:
- `prefixCnt[j] - prefixCnt[i]` (number of "valid" elements between i+1 and j) satisfies the condition,
- i.e., `(prefixCnt[j] - prefixCnt[i]) % modulo == k`,
then the subarray `nums[i+1..j]` is interesting.

This leads to the rearranged equation:

> `(prefixCnt[j] - prefixCnt[i]) % modulo == k`  
> → `prefixCnt[j] % modulo == (prefixCnt[i] + k) % modulo`

This is the key formula!

---

### 🚀 Efficient Approach

1. Initialize a **prefix counter** `cnt = 0` to keep track of cumulative count of valid elements.
2. Initialize a **hash map** `freq` to store the frequency of different values of `cnt % modulo` we've seen so far.
   - This helps us quickly look up how many previous `cnt` values would lead to an interesting subarray ending at current index.
3. Iterate through the array:
   - If `nums[i] % modulo == k`, increment `cnt`.
   - Compute `curr_mod = cnt % modulo`.
   - The number of valid starting points for an interesting subarray ending at this index is `freq[(curr_mod - k + modulo) % modulo]`.
     - This is based on rearranging the formula above.
   - Add this number to your running total.
   - Update the `freq[curr_mod]` for future indices.
4. Don’t forget to initialize `freq[0] = 1` to handle subarrays starting at index 0 correctly.

---

### ⏱️ Time & Space Complexity

- **Time Complexity:** O(n), since we iterate once and use constant-time hash map operations.
- **Space Complexity:** O(modulo), since the hash map tracks up to `modulo` different `cnt % modulo` values.
