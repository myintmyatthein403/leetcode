impl Solution {
    pub fn maximum_difference(nums: Vec<i32>) -> i32 {
        let mut min_so_far = nums[0];
        let mut max_diff = -1;

        for &num in nums.iter().skip(1) {
            if num > min_so_far {
                max_diff = max_diff.max(num - min_so_far);
            } else {
                min_so_far = num;
            }
        }

        max_diff
    }
}

