### Approach Explanation

1. **Initialization**:
   - Initialize a variable `count` to 1. This will be used to keep track of the number of good pairs.
   - Create a new `Map` object to store the frequency of differences `(nums[i] - i)`.

2. **Iterate through the array**:
   - Loop through each element in the array `nums` using a `for` loop.
   - For each element `nums[i]`, calculate the difference `diff = nums[i] - i`.
   - Check if `diff` is already present in the `map`:
     - If it is, it means there are `map.get(diff)` elements before `i` that form good pairs with `nums[i]`. Add this count to `count`.
     - Update the map with the new frequency of `diff` by incrementing the existing value.
     - If `diff` is not present in the map, add it with an initial frequency of 1.

3. **Calculate the total number of pairs**:
   - The total number of pairs in an array of length `n` is given by the combination formula `C(n, 2) = n * (n - 1) / 2`.
   - Subtract the number of good pairs (`count`) from the total number of pairs to get the number of bad pairs.

4. **Return the result**:
   - Return the calculated number of bad pairs.

This approach leverages a hashmap to efficiently count the number of good pairs, reducing the time complexity to `O(n)`.
