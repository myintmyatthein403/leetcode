/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    console.log('sMap -> ', sMap);
  }

  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    console.log('tMap -> ', tMap);
  }

  for (let [key, value] of tMap) {
    if (sMap.get(key) !== value) {
      console.log('key -> ', key);
      return key;
    }
  }

  return "";
};


// Test Cases
console.log(findTheDifference("abcd", "abcde")); // e
console.log(findTheDifference("", "y")); // y
console.log(findTheDifference("a", "aa")); // a
