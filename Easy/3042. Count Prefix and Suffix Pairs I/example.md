### Example 1: DNA Sequence Analysis

In bioinformatics, researchers often analyze DNA sequences to find patterns that might indicate certain genetic traits or functions. Suppose you have a list of DNA sequences and you want to find pairs of sequences where one sequence is both a prefix and a suffix of another sequence. This could help in identifying overlapping regions in DNA sequences.

```javascript
const dnaSequences = ["ATG", "ATGCG", "CGT", "ATGCGT"];
console.log(countPrefixSuffixPairs(dnaSequences)); // Output: 2
// Explanation: 
// i = 0 and j = 1 because "ATG" is a prefix and suffix of "ATGCG".
// i = 1 and j = 3 because "ATGCG" is a prefix and suffix of "ATGCGT".
```

### Example 2: URL Matching

In web development, you might want to analyze a list of URLs to find patterns where one URL is both a prefix and a suffix of another URL. This could be useful for URL rewriting or redirection rules.

```javascript
const urls = ["http://example.com", "http://example.com/page", "https://example.com", "http://example.com/page/subpage"];
console.log(countPrefixSuffixPairs(urls)); // Output: 1
// Explanation: 

