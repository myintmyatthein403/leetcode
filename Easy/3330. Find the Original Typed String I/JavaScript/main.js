/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let groups = [];
  let i = 0;

  // Step 1: Group consecutive characters
  while (i < word.length) {
    let j = i;
    while (j < word.length && word[j] === word[i]) {
      j++;
    }
    groups.push(word.slice(i, j));
    i = j;
  }

  // Step 2: For each group of length ≥ 2, count how many ways we could shorten it
  let total = 0;
  for (let group of groups) {
    if (group.length >= 2) {
      total += group.length - 1; // possible shorter versions down to length 1
    }
  }

  // Step 3: Add 1 for the case with no held key
  return total + 1;
};

