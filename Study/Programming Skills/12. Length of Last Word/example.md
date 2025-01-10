Sure, here are two real-world examples where finding the length of the last word in a string can be useful:

### Example 1: Text Processing in a Chat Application
In a chat application, you might want to analyze the last word typed by a user to provide real-time suggestions or autocomplete options.

```javascript
function lengthOfLastWord(s) {
  let trimmedString = s.trim();
  let words = trimmedString.split(' ');
  let lastWord = words[words.length - 1];
  return lastWord.length;
}

// Example usage
let message = "Hey, how are you doing today?";
console.log(lengthOfLastWord(message)); // Output: 6 (length of "today")
```

### Example 2: Command Line Input Parsing
In a command-line interface (CLI) tool, you might need to parse the last word of a user's input to determine the command or argument they are trying to use.

```javascript
function lengthOfLastWord(s) {
  let trimmedString = s.trim();
  let words = trimmedString.split(' ');
  let lastWord = words[words.length - 1];
  return lastWord.length;
}

// Example usage
let userInput = "git commit -m 'Initial commit'";
console.log(lengthOfLastWord(userInput)); // Output: 6 (length of "commit")
```

In both examples, the function `lengthOfLastWord` is used to determine the length of the last word in a given string, which can be useful for various text processing tasks.

