1. **Search Engine Optimization (SEO):**
   - When analyzing a list of keywords for SEO purposes, you might want to find keywords that are substrings of other keywords. This can help in identifying long-tail keywords that are part of more general keywords.
   ```javascript
   const keywords = ["apple", "apple pie", "pie", "apple tart", "tart"];
   const result = findSubstrings(keywords);
   console.log(result); // Output: ["apple", "pie", "tart"]
   ```

2. **Text Analysis:**
   - In text analysis, you might want to identify phrases or words that are contained within other phrases. This can be useful for summarizing text or finding common themes.
   ```javascript
   const phrases = ["machine learning", "learning", "deep learning", "artificial intelligence", "intelligence"];
   const result = findSubstrings(phrases);
   console.log(result); // Output: ["learning", "intelligence"]
   ```

In both examples, the function helps in identifying smaller components that are part of larger strings, which can be useful for various analytical purposes.

