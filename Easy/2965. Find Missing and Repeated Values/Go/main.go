func findMissingAndRepeatedValues(grid [][]int) []int {
  n := len(grid)
  count := make(map[int]int)
  for i := 0; i < n; i++ {
      for j := 0; j < n; j++ {
          count[grid[i][j]]++
      }
  }
  repeated, missing := 0, 0
  for i := 1; i <= n*n; i++ {
      if count[i] == 2 {
          repeated = i
      } else if count[i] == 0 {
          missing = i
      }
  }
  return []int{repeated, missing}
}
