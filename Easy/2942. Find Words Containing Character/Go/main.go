func findWordsContaining(words []string, x byte) []int {
    var result []int

    for i, word := range words {
      if containsChar(word, x) {
        result = append(result, i)
      }
    }

    return result
}

func containsChar(word string, x byte) bool {
  for i := 0; i < len(word); i++ {
    if word[i] == x {
      return true
    } 
  }
  return false
}
