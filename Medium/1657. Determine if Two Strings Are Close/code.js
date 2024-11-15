/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }
  let arr1 = [...map1.keys()].sort();
  console.log(arr1);
  let arr2 = [...map2.keys()].sort();
  console.log(arr2);
  let str1 = [...map1.values()].sort();
  console.log(str1);
  let str2 = [...map2.values()].sort();
  console.log(str2);
  console.log(arr1.join(''))
  console.log(arr2.join(''))
  console.log(str1.join(''))
  console.log(str2.join(''))
  return arr1.join('') === arr2.join('') && str1.join('') === str2.join('');
};

// For example
console.log(closeStrings('abc', 'bca')); // Output: true
console.log('------------------')
console.log(closeStrings('a', 'aa')); // Output: false
console.log('------------------')
console.log(closeStrings('cabbba', 'abbccc')); // Output: true
