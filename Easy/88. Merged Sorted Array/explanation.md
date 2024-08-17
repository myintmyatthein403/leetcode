### Explanation

By merging from the end, we ensure that we don't overwrite elements in `nums1` that haven't been checked yet. The in-place merging allows efficient use of space since no extra arrays are created, and the time complexity is `O(m + n)` because we traverse both arrays exactly once.
