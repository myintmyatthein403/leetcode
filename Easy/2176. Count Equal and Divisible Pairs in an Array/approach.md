To solve this problem efficiently, we can break it down into **two key conditions** that must be met for any pair `(i, j)`:

1. `nums[i] == nums[j]` → The values at indices `i` and `j` must be the same.
2. `(i * j) % k == 0` → The product of `i` and `j` must be divisible by `k`.

---

### Step-by-Step Approach (No Code):

#### 1. **Group Indices by Value**
- First, identify all indices for each unique number in the `nums` array.
- This helps efficiently find all candidate `i` and `j` pairs where `nums[i] == nums[j]`.

#### 2. **Iterate Over Each Group**
- For each group of indices (i.e., all positions where a specific value appears), generate all pairs `(i, j)` where `i < j`.

#### 3. **Check Divisibility**
- For each pair, compute `i * j % k` and check if it's `0`.
- If so, it's a valid pair — increment the count.

#### 4. **Count and Return**
- Keep a running count of all valid pairs across all groups.
- Return this count at the end.

---

### Why This Works:
- Grouping indices reduces unnecessary comparisons between unequal values.
- Only checking pairs within each group keeps complexity manageable, especially since values often repeat in localized areas.
- This approach trades a bit of space (to store the groups) for better time efficiency.

---

### Time Complexity:
- Let `n` be the length of the array.
- In the worst case (if all values are the same), we check all `n * (n-1) / 2` pairs, but typically it's far fewer due to value grouping.
- So, **average-case performance** is much better than brute-force.
