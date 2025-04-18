package main

import (
  "fmt"
)

func main() {
  fmt.Println(plusOne([]int{1,2,3}))
  fmt.Println(plusOne([]int{4,3,2,1}))
  fmt.Println(plusOne([]int{0}))
  fmt.Println(plusOne([]int{9}))
}

func plusOne(digits []int) []int {
  n := len(digits)
  if n == 0 {
    return digits
  }

  for i := n - 1; i >= 0; i-- {
    if digits[i] < 9 {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }
  return append([]int{1}, digits...)
}
