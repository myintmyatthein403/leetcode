/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Edge case: If the array is empty, return an empty string 
  if (strs.length == 0) {
    return ""
  }

  // Start with the first string as the potential prefix
  let prefix = strs[0]

  // Compare this prefix with each string in the array
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix by removing the last character
      prefix = prefix.slice(0, prefix.length - 1)

      // If the prefix becomes empty, there is no common prefix
      if (prefix == "") {
        return ""
      }
    }
  }

  return prefix
};
