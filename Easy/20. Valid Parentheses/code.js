/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Stack to keep track of opening brackets
  const stack = [];

  // Mapping of closing brackets to their corresponding opening brackets
  const matchingBracket = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  // Traverse through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // if it's an open bracket, push it onto the stacks
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char)
    }

    // If it's a closing brackets
    else if (char === ")" || char === "}" || char === "]") {
      // Check if the stack is empty or the top of the stack doesn't match the current closing brackets
      if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
        return false // Invalid string
      }
    }
  }

  // If the stack is empty, all brackets were matched and close correctly
  return stack.length == 0;

};

// TextCase
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([)]"));     // Output: false
console.log(isValid("{[]}"));     // Output: true
console.log(isValid(")("));       // Output: false
