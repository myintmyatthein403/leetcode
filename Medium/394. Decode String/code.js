/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      stack.pop();
      let num = "";
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      stack.push(str.repeat(num));
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

// For Example
console.log(decodeString("3[a]2[bc]")); // aaabcbc
console.log(decodeString("3[a2[c]]")); // accaccacc
console.log(decodeString("2[abc]3[cd]ef")); // abcabccdcdcdef
