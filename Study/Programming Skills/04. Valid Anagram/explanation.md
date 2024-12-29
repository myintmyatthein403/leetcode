### Example 1: Validating User Input in a Form

Suppose you have a form where users need to enter a word and its anagram. You can use the `isAnagram` function to validate that the second input is indeed an anagram of the first.

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};

// Example usage: Form validation
const wordInput = document.getElementById('word-input');
const anagramInput = document.getElementById('anagram-input');
const resultDisplay = document.getElementById('result-display');

document.getElementById('validate-button').addEventListener('click', () => {
  const word = wordInput.value;
  const anagram = anagramInput.value;
  if (isAnagram(word, anagram)) {
    resultDisplay.textContent = 'Valid anagram!';
  } else {
    resultDisplay.textContent = 'Invalid anagram.';
  }
});
```

### Example 2: Checking Anagrams in a Word Game

In a word game, you might need to check if a player's guess is an anagram of a given word. This can be used to validate the player's input and award points accordingly.

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};

// Example usage: Word game
const givenWord = 'listen';
const playerGuess = 'silent';

if (isAnagram(givenWord, playerGuess)) {
  console.log('Correct! You found an anagram.');
  // Award points to the player
} else {
  console.log('Incorrect. Try again.');
}
```

In both examples, the `isAnagram` function is used to validate whether two strings are anagrams of each other. This can be useful in various applications, such as form validation and word games, where checking for anagrams is required.
