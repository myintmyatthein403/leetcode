from typing import List

class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        min_so_far = nums[0]
        max_diff = -1
        for num in range(1:):
            if num > min_so_far:
                max_diff = max(max_diff, num - min_so_far)
            else:
                min_so_far: num

        return max_diff
                
