package main

import (
  "fmt"
  "sort"
)

func main() {
  fmt.Println(isAnagram("anagram", "nagaram"))
  fmt.Println(isAnagram("rat", "car"))
}

func isAnagram(s string, t string) bool {
  return sortString(s) == sortString(t)
}

func sortString(s string) string {
  r := []rune(s) // convert the string to a rune slice
  fmt.Println(r)
  sort.Slice(r, func(i, j int) bool {
    return r[i] < r[j] // sort the rune slice
  }) // sort the rune slice
  return string(r) // convert the rune slice back to a string
}
