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


// Test Case 1
const haystack = "hello", needle = "ll";
console.log(strStr(haystack, needle)); // 2

// Test Case 2
const haystack2 = "aaaaa", needle2 = "bba";
console.log(strStr(haystack2, needle2)); // -1
