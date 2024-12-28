package main

import "fmt"

func main() {
  fmt.Println(findTheDifference("abcd", "abcde"))
  fmt.Println(findTheDifference("", "y"))
  fmt.Println(findTheDifference("a", "aa"))
  fmt.Println(findTheDifference("ae", "aea"))
}


func findTheDifference(s string, t string) byte {
  var result byte
  for i := 0; i < len(s); i++ {
    result ^= s[i] // XOR
  } // XOR of all elements in s and t will be the extra element in t
  for i := 0; i < len(t); i++ {
    result ^= t[i] // XOR
  } // XOR of all elements in s and t will be the extra element in t

  return result
}
