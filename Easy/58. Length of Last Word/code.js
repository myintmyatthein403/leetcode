/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Step1: Trim any trailing spaces
  s = s.trim();

  // Step2: Find the last space in the trimmed string
  let lastSpaceIndex = s.lastIndexOf(' ')

  // Step3: Calculate the length of the last word
  return s.length - lastSpaceIndex - 1
};


// Test Case
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("  fly me  to  the moon "))
console.log(lengthOfLastWord("luffy is still joyboy"))
