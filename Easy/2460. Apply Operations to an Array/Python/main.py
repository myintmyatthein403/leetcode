class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        n = len(nums);

        # Step1: Apply Operations
        for i in range(n - 1):
            if(nums[i] == nums[i+1]):
                nums[i] *= 2;
                nums[i+1] = 0;

        # Step2: Shift Zero to the end
        count = 0;
        for i in range(n):
            if(nums[i] != 0):
                nums[count] = nums[i];
                count += 1;

        # Step3: Fill remaining indices with zero
        while(count < n):
            nums[count] = 0;
            count += 1;

        return nums;

