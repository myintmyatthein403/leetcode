## Approach to Finding the Longest Nice Subarray

Here's a breakdown of the approach to solve this problem:

**Understanding the "Nice" Subarray Condition**

The core of the problem lies in understanding what it means for a subarray to be "nice".  A subarray is nice if the bitwise AND of *every* pair of distinct elements within that subarray is zero.

* **Bitwise AND and Zero:** The bitwise AND of two numbers is zero if and only if there are no common '1' bits in their binary representations. In other words, if a bit is set to 1 in one number, the corresponding bit in the other number must be 0.
* **Implication for Subarrays:** This means that within a nice subarray, no two numbers can have a '1' bit in the same position.

**Sliding Window Technique**

The problem can be efficiently solved using a sliding window approach. Here's how it works:

1.  **Initialize Variables:**
    * `left`: Start of the sliding window.
    * `right`: End of the sliding window.
    * `maxLength`: Stores the length of the longest nice subarray found so far.
    * `currentAnd`: A variable to keep track of the bitwise OR of the elements within the current window. We use OR because if the AND of any 2 numbers is 0, that means that no bit is set in both of the numbers. Therefore, we can use OR to check if any bits are duplicated within the window.

2.  **Iterate with the Right Pointer:**
    * Move the `right` pointer through the `nums` array.
    * Update `currentAnd`: Perform a bitwise OR of `currentAnd` with `nums[right]`.
    * **Check for Nice Subarray:** If `currentAnd` has any overlapping bits with `nums[right]` then this means that the current window is not nice. This is checked by seeing if `(currentAnd & nums[right]) != 0`.
    * **Shrink the Window:** If the current window is not nice, move the `left` pointer to the right, removing elements from the start of the window until the subarray becomes nice again. While moving the left pointer, update the `currentAnd` variable by removing the left most element from the bitwise OR.
    * **Update `maxLength`:** After each iteration, update `maxLength` with the maximum value between its current value and the length of the current nice subarray (`right - left + 1`).

3.  **Return `maxLength`:** After the `right` pointer reaches the end of the array, return the value of `maxLength`.

**Why This Works**

* The sliding window ensures that we consider all possible subarrays.
* The bitwise AND check efficiently determines if a subarray is nice.
* By using the bitwise OR of the window, we can efficiently check if any bits are duplicated within the window.

**Example Walkthrough (nums = [1, 3, 8, 48, 10])**

1.  **Initial:** `left = 0`, `right = 0`, `maxLength = 1`, `currentAnd = 0`
2.  **right = 0:** `nums[0] = 1`, `currentAnd = 1`, `maxLength = 1`
3.  **right = 1:** `nums[1] = 3`, `currentAnd = 1 | 3 = 3`, `maxLength = 2`
4.  **right = 2:** `nums[2] = 8`, `currentAnd = 3 | 8 = 11`, `maxLength = 3`
5.  **right = 3:** `nums[3] = 48`, `currentAnd = 11 | 48 = 59`, `maxLength = 4`
6.  **right = 4:** `nums[4] = 10`, `currentAnd = 59 | 10 = 59`, `(currentAnd & nums[4]) = (59 & 10) = 10 != 0`, therefore we must shrink the window.
7.  **left = 1:** `currentAnd = currentAnd ^ nums[0] = 59 ^ 1 = 58`, `(currentAnd & nums[4]) = (58 & 10) = 10 != 0`, therefore we must shrink the window.
8.  **left = 2:** `currentAnd = currentAnd ^ nums[1] = 58 ^ 3 = 57`, `(currentAnd & nums[4]) = (57 & 10) = 8 != 0`, therefore we must shrink the window.
9.  **left = 3:** `currentAnd = currentAnd ^ nums[2] = 57 ^ 8 = 49`, `(currentAnd & nums[4]) = (49 & 10) = 0`, therefore the window is now nice. `maxLength = max(maxLength, right - left + 1) = max(4, 4-3+1) = 4`
10. **right = 4:** `maxLength = max(4,1) = 4`
11. Return 4.
