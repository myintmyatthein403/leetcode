package main

import "fmt"

func main() {
  fmt.Println(strStr("hello", "ll"))
  fmt.Println(strStr("aaaaa", "bba"))
}

func strStr(haystack string, needle string) int {
    if len(needle) == 0 {
        return 0
    }
    if len(haystack) < len(needle) {
        return -1
    }
    for i := 0; i < len(haystack) - len(needle) + 1; i++ {  
      if haystack[i] == needle[0] {
          if haystack[i:i+len(needle)] == needle {
              return i
          } // if the substring of the haystack is equal to the needle
      } // if the first character of the needle is found in the haystack
    } // for loop to iterate over the haystack
    return -1
  }

