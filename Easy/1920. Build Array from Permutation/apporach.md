To solve **Leetcode 1920: Build Array from Permutation**, let's break down the problem and the logic needed:

### Problem Understanding:

You are given an array `nums` that is a **zero-based permutation**, meaning:

* Each element is unique.
* The values are integers ranging from `0` to `n - 1`, where `n = nums.length`.

You are required to construct a new array `ans` such that:

```
ans[i] = nums[nums[i]]
```

In simple terms, for each index `i`, you're first looking up `nums[i]`, then using that result as a new index to look up `nums[nums[i]]`. That value becomes `ans[i]`.

### Example Breakdown:

Let’s take the example: `nums = [0,2,1,5,3,4]`

* Step-by-step:

  * `ans[0] = nums[nums[0]] = nums[0] = 0`
  * `ans[1] = nums[nums[1]] = nums[2] = 1`
  * `ans[2] = nums[nums[2]] = nums[1] = 2`
  * `ans[3] = nums[nums[3]] = nums[5] = 4`
  * `ans[4] = nums[nums[4]] = nums[3] = 5`
  * `ans[5] = nums[nums[5]] = nums[4] = 3`

Thus, the resulting array is `[0, 1, 2, 4, 5, 3]`.

### Approach:

1. **Initialization**: Create a new array `ans` of the same size as `nums`.
2. **Iteration**: Loop through each index `i` from `0` to `nums.length - 1`.
3. **Value Assignment**: For each index, compute `nums[nums[i]]` and assign it to `ans[i]`.
4. **Return** the resulting `ans` array.

### Time and Space Complexity:

* **Time Complexity**: O(n), where n is the length of the array, since we traverse the array once.
* **Space Complexity**: O(n) for the output array `ans`.
