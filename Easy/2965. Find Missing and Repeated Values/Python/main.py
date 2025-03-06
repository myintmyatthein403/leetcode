class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid);

        nums = [0] * (n * n + 1);

        for i in range(n):
            for j in range(n):
                nums[grid[i][j]] += 1;
        
        missing = -1;
        repeated = -1;

        for i in range(1, n * n + 1):
            if nums[i] == 0:
                missing = i;
            if nums[i] == 2:
                repeated = i;
        
        return [repeated, missing];

