func mergeArrays(nums1 [][]int, nums2 [][]int) [][]int {
    i, j := 0, 0
    result := [][]int{}

    for i < len(nums1) && j < len(nums2) {
      if nums1[i][0] == nums2[j][0] {
        // If IDs match, sum the values
        result = append(result, []int{nums1[i][0], nums1[i][1] + nums2[j][1]})
        i++
        j++
      } else if nums1[i][0] < nums2[j][0] {
        // If nums1 ID is smaller, add it to the result
        result = append(result, nums1[i])
        i++
      } else {
        // If nums2 ID is smaller, add it to the result
        result = append(result, nums2[j])
        j++
      }
    }

    // Add remaining elements from nums1 (if any)
    for i < len(nums1) {
      result = append(result, nums1[i])
      i++
    }

    // Add remaining elements from nums2 (if any)
    for j < len(nums2) {
      result = append(result, nums2[j])
      j++
    }

    return result
}
