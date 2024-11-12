/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var sArr = s.split(' ');
  var result = []
  for (var i = sArr.length - 1; i >= 0; i--) {
    if (sArr[i] === '') {
      sArr.splice(i, 1);
    } else {
      result.push(sArr[i]);
    }
  }
  return result.join(' ');
};

// For Example
console.log(reverseWords("Let's take LeetCode contest")) // Output: "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords(" God Ding ")) // Output: "doG gniD"
console.log(reverseWords("God   Ding")) // Output: "doG gniD"
