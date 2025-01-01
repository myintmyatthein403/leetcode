package main 

import (
  "fmt"
  "strings"
)

func main() {
  fmt.Println(repeatedSubstringPattern("abab")) // true
  fmt.Println(repeatedSubstringPattern("aba")) // false
  fmt.Println(repeatedSubstringPattern("abcabcabcabc")) // true
}

func repeatedSubstringPattern(s string) bool {
  n := len(s)
	for i := 1; i <= n/2; i++ {
		if n%i == 0 {
			if s == strings.Repeat(s[:i], n/i) {
				return true
			}
		}
	}
	return false}
