/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

// For Example
console.log(removeStars("ab**c")); // ac
console.log(removeStars("leet**cod*e")); // lecoe
console.log(removeStars("earse*****")); // ""
