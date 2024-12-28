class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        return chr(sum(map(ord, t)) - sum(map(ord, s)))


# Test Cases
solution = Solution()
# Expected: "e"
print(solution.findTheDifference("abcd", "abcde"))
# Expected: "y"
print(solution.findTheDifference("", "y"))
# Expected: "a"
print(solution.findTheDifference("a", "aa"))
