To solve this problem, we need to **reverse-engineer** the hidden sequence based on the given differences and figure out **how many possible valid starting values** lead to a valid full sequence within the bounds `[lower, upper]`.

---

### 🧠 Core Concept

Given `differences = [d0, d1, ..., dn-1]`, we know that:

- `hidden[1] = hidden[0] + d0`
- `hidden[2] = hidden[1] + d1 = hidden[0] + d0 + d1`
- And so on...

So, the entire hidden sequence can be reconstructed as:

```
hidden[0] = x        (initial value)
hidden[1] = x + d0
hidden[2] = x + d0 + d1
...
hidden[n] = x + d0 + d1 + ... + dn-1
```

In general:  
`hidden[i] = x + prefix_sum[i - 1]` (where `prefix_sum` is the running sum of differences)

---

### ✅ Goal

Find how many integer values of `x` (i.e., starting values of the hidden sequence) result in **all elements** of the sequence being within `[lower, upper]`.

---

### 📌 Step-by-Step Approach

1. **Compute all prefix sums** based on `differences`.  
   Let `prefix_sums` = `[0, d0, d0 + d1, d0 + d1 + d2, ..., total_sum]`  
   (We start with 0 since hidden[0] has no difference applied.)

2. **Find the minimum and maximum offset** in the prefix sum.  
   - Let `min_offset = min(prefix_sums)`
   - Let `max_offset = max(prefix_sums)`

3. **Establish the bounds for x**:  
   - Since `hidden[i] = x + offset[i]` must be within `[lower, upper]`,  
     we get:
     ```
     lower ≤ x + offset ≤ upper
     => lower - offset ≤ x ≤ upper - offset
     ```
   - To satisfy **all** offsets, the tightest valid x-range is:
     ```
     x must be in [lower - min_offset, upper - max_offset]
     ```

4. **Count the number of integers in that range**:  
   - If the range is invalid (start > end), return `0`
   - Otherwise, count: `end - start + 1`

---

### ✨ Example (differences = [1, -3, 4], lower = 1, upper = 6)

- prefix_sums = [0, 1, -2, 2]
- min_offset = -2
- max_offset = 2

Then:
- `x ∈ [1 - (-2), 6 - 2] = [3, 4]`
- Count = `4 - 3 + 1 = 2`

✅ Answer is `2`.

---

### 🔚 Summary

We turn this into a **range intersection problem** for the valid values of the starting number `x`. The core idea is to:
- Build prefix sums
- Use their min/max to figure out where `x` can lie
- Count all integer values of `x` within that final valid range.
