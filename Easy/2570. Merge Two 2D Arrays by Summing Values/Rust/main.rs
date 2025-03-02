impl Solution {
    pub fn merge_arrays(nums1: Vec<Vec<i32>>, nums2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let (mut i, mut j) = (0, 0);
        let mut result = Vec::new();

        while i < nums1.len() && j < nums2.len() {
            if nums1[i][0] == nums2[j][0] {
                // If IDs match, sum the values
                result.push(vec![nums1[i][0], nums1[i][1] + nums2[j][1]]);
                i += 1;
                j += 1;
            } else if nums1[i][0] < nums2[j][0] {
                // If nums1 ID is smaller, add it to the result
                result.push(nums1[i].clone());
                i += 1;
            } else {
                // If nums2 ID is smaller, add it to the result
                result.push(nums2[j].clone());
                j += 1;
            }
        }

        // Add remaining elements from nums1
        while i < nums1.len() {
            result.push(nums1[i].clone());
            i += 1;
        }

        // Add remaining elements from nums2
        while j < nums2.len() {
            result.push(nums2[j].clone());
            j += 1;
        }

        result
    }
}
