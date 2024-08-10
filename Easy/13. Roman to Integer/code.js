/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Create a map of Roman numbers to their integer values;
  const romanToIntMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let total = 0;

  // loop through the string, s;
  for (let i = 0; i < s.length; i++) {
    // Get the value of the current symbol
    let currentValue = romanToIntMap[s[i]]

    // Get the next value of the next symbol (if it exists)
    let nextValue = romanToIntMap[s[i + 1]]

    // If the current value is less than the next value, subtract it
    if (nextValue > currentValue) {
      total -= currentValue;
    } else {
      // Otherwise, add it to the total
      total += currentValue
    }
  }
  return total;
};

// Test Case
console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
