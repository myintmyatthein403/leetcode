/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Handle the case when needle is an empty string 
  if (needle === "") return 0;

  // Get the length of haystack and needle
  let haystackLength = haystack.length
  let needleLength = needle.length

  // Iterate through haystack up to the point where needle can fit
  for (let i = 0; i <= haystackLength - needleLength; i++) {
    // Check if the substring of haystack from i to i + needleLength matches needle
    if (haystack.substring(i, i + needleLength) === needle) {
      return i // Return the index where the match is found.
    }
  }

  // If no match is found, return -1
  return -1;

};


// Example Usage:
let haystack1 = "sadbutsad";
let needle1 = "sad";
console.log(strStr(haystack1, needle1)); // Output: 0

let haystack2 = "leetcode";
let needle2 = "leeto";
console.log(strStr(haystack2, needle2)); // Output: -1
