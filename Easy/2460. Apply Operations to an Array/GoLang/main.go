func applyOperations(nums []int) []int {
  for i := 0; i < len(nums)-1; i++ {
    if nums[i] == nums[i+1] {
      nums[i] *= 2
      nums[i+1] = 0
    }
  }

  j := 0
  for i := 0; i < len(nums); i++ {
    if nums[i] != 0 {
      nums[j] = nums[i]
      j++
    }
  }

  for i := j; i < len(nums); i++ {
    nums[i] = 0
  }

  return nums

}
