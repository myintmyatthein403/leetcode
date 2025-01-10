/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  let res = [];
  let b = new Array(26).fill(0);
  for (let word of words2) {
    let a = new Array(26).fill(0);
    for (let c of word) {
      a[c.charCodeAt() - 97]++;
    }
    for (let i = 0; i < 26; i++) {
      b[i] = Math.max(b[i], a[i]);
    }
  }
  for (let word of words1) {
    let a = new Array(26).fill(0);
    for (let c of word) {
      a[c.charCodeAt() - 97]++;
    }
    let flag = true;
    for (let i = 0; i < 26; i++) {
      if (a[i] < b[i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(word);
    }
  }
  return res;
};
