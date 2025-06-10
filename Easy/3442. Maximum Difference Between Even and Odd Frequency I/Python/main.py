from collections import Counter

class Solution:
    def maxDifference(self, s: str) -> int:
        freq = Counter(s)

        old_frequencies = []
        even_frequencies = []

        for count in freq.values():
            if count % 2 == 0:
                even_frequencies.append(count)
            else:
                old_frequencies.append(count)

        
    max_odd = max(old_frequencies)
    min_even = min(even_frequencies)

    return max_odd - min_even
