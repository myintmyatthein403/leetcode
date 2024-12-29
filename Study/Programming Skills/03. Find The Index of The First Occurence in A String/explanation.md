### Example 1: Search Functionality in a Text Editor

In a text editor, you might want to implement a search functionality that allows users to find the first occurrence of a specific word or phrase within the document.

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  switch (true) {
    case needle.length === 0:
      return 0;
    case haystack.length < needle.length:
      return -1;
    default:
      return haystack.indexOf(needle);
  }
};

// Example usage: Search in a text editor
const documentText = "The quick brown fox jumps over the lazy dog.";
const searchTerm = "fox";
const index = strStr(documentText, searchTerm);

if (index !== -1) {
  console.log(`The term "${searchTerm}" found at index ${index}.`);
} else {
  console.log(`The term "${searchTerm}" not found.`);
}
```

### Example 2: URL Parameter Extraction

When working with URLs, you might need to find the position of a specific parameter within the query string to extract its value.

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  switch (true) {
    case needle.length === 0:
      return 0;
    case haystack.length < needle.length:
      return -1;
    default:
      return haystack.indexOf(needle);
  }
};

// Example usage: Extracting a parameter from a URL
const url = "https://example.com/search?query=javascript&sort=asc";
const param = "query=";
const startIndex = strStr(url, param);

if (startIndex !== -1) {
  const endIndex = url.indexOf("&", startIndex);
  const queryValue = endIndex === -1 ? url.substring(startIndex + param.length) : url.substring(startIndex + param.length, endIndex);
  console.log(`The value of the "query" parameter is "${queryValue}".`);
} else {
  console.log(`The "query" parameter not found.`);
}
```

In both examples, the `strStr` function is used to find the first occurrence of a substring within a larger string. This can be useful in various applications, such as implementing search functionality in a text editor and extracting parameters from URLs. 
