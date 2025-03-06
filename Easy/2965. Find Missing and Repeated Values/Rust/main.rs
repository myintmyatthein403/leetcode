impl Solution {
    pub fn find_missing_and_repeated_values(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let n = grid.len();
        let mut counts = vec![0; n * n + 1];
        let mut repeated = 0;
        let mut missing = 0;

        for row in grid.iter() {
            for &val in row.iter() {
                counts[val as usize] += 1;
            }
        }

        for i in 1..=n * n {
            if counts[i] == 0 {
                missing = i as i32;
            } else if counts[i] > 1 {
                repeated = i as i32;
            }
        }

        vec![repeated, missing]

    }
}
