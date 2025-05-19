impl Solution {
    pub fn triangle_type(nums: Vec<i32>) -> String {
        let (a, b, c) = (nums[0], nums[1], nums[2]);

        // Step 1: Check if the three sides form a valid triangle
        if a + b <= c || a + c <= b || b + c <= a {
            return "none".toString();
        }

        // Step 2: Determine the type of triangle
        if a == b && b == c {
            "equilateral".toString()
        } else if a == b || a == c || b == c {
            "isosceles".toString()
        } else {
            "scalene".toString()
        }
    }
}
