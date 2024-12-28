class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ''
        for i in range(max(len(word1), len(word2))):
            if word1[i:]:
                result += word1[i]
            if word2[i:]:
                result += word2[i]
        return result


# Test Cases
solution = Solution()
assert solution.mergeAlternately("abc", "pqr") == "apbqcr"
assert solution.mergeAlternately("ab", "pqrs") == "apbqrs"
assert solution.mergeAlternately("abcd", "pq") == "apbqcd"

print('All test cases pass')
