package main

import "fmt"

func main() {
  fmt.Println(mergeAlternately("abc", "pqr"))
  fmt.Println(mergeAlternately("ab", "pqrs"))
  fmt.Println(mergeAlternately("abcd", "pq"))
}

func mergeAlternately(word1 string, word2 string) string {
  var result string
  for i := 0; i < len(word1) || i < len(word2); i++ {
    if i < len(word1) {
      result += string(word1[i])
    }
    if i < len(word2) {
      result += string(word2[i])
    }
  }
  return result
}

// Test Case
// mergeAlternately("abc", "pqr") => "apbqcr"
// mergeAlternately("ab", "pqrs") => "apbqrs"
// mergeAlternately("abcd", "pq") => "apbqcd"
