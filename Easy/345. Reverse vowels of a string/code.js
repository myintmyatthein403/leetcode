/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var sArr = s.split('');
  var i = 0;
  var j = sArr.length - 1;
  while (i < j) {
    if (vowels.includes(sArr[i]) && vowels.includes(sArr[j])) {
      var temp = sArr[i];
      sArr[i] = sArr[j];
      sArr[j] = temp;
      i++;
      j--;
    } else if (vowels.includes(sArr[i])) {
      j--;
    } else {
      i++;
    }
  }
};

// For Example
console.log(reverseVowels('hello')); // Output: 'holle'
console.log(reverseVowels('leetcode')); // Output: 'leotcede'
console.log(reverseVowels('aA')); // Output: 'Aa'
