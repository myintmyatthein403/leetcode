/**
 * @param {string} s
 * @return {string}
 */
const clearDigits = (s) => {
  const stack = [];
  for (const char of s) {
    if (char >= '0' && char <= '9') {
      if (stack.length) stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};
