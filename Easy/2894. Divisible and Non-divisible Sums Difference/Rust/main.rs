impl Solution {
    pub fn difference_of_sums(n: i32, m: i32) -> i32 {
        // Total sum from 1 to n
        let total_sum = n * (n + 1) / 2;

        // Count of numbers divisible by m
        let count = n / m;

        // Sum of all numbers divisible by m
        let divisible_sum = m * count * (count + 1) / 2;

        // Return the final difference
        total_sum - 2 * divisible_sum
    }
}

