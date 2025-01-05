/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let n = s.length;
  let shiftArr = new Array(n).fill(0);

  // Apply each shift operation
  for (let [start, end, direction] of shifts) {
    if (direction === 1) {
      shiftArr[start] += 1;
      if (end + 1 < n) shiftArr[end + 1] -= 1;
    } else {
      shiftArr[start] -= 1;
      if (end + 1 < n) shiftArr[end + 1] += 1;
    }
  }

  // Calculate the prefix sum of shifts
  for (let i = 1; i < n; i++) {
    shiftArr[i] += shiftArr[i - 1];
  }

  // Apply the shifts to the string
  let result = s.split('');
  for (let i = 0; i < n; i++) {
    let shift = (shiftArr[i] % 26 + 26) % 26;
    result[i] = String.fromCharCode(((s.charCodeAt(i) - 97 + shift) % 26) + 97);
  }

  return result.join('');
};

// Test case
console.log(shiftingLetters("abc", [3, 5, 9])); // "rpl"
console.log(shiftingLetters("aaa", [1, 2, 3])); // "gfd"
