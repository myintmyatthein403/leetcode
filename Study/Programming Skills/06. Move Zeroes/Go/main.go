package main

import (
  "fmt"
)

func main() {
  fmt.Println(moveZeroes([]int{0,1,0,3,12}))
  fmt.Println(moveZeroes([]int{0}))
  fmt.Println(moveZeroes([]int{1}))
}


func moveZeroes(nums []int)  {
  n := len(nums)
  if n == 0 {
    return
  }

  j := 0
  for i := 0; i < n; i++ {
    if nums[i] != 0 {
      nums[j] = nums[i]
      if i != j {
        nums[i] = 0
      }
      j++
    }
  }
  return nums
}
