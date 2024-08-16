/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "" // Initialzie an empty string to store the final binary sum
  let carry = 0; // Initialzie carry to 0, which will be used to handle carry over during addition
  let i = a.length - 1 // Pointer starting at the last character of string a
  let j = b.length - 1 // Pointer stating at the last character of string b

  // Loop through both strings from right to left, adding corresponding bits and carry
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry; // Start with the carry from the previous addition

    // Add the current bit from a if i is within bounds
    if (i >= 0) sum += parseInt(a[i--])

    // Add the current bit from b if j is within bounds
    if (j >= 0) sum += parseInt(b[j--]);

    //Append the least significiant bit of the sum(sum%2) to the result to string
    result = (sum % 2) + result;

    // Update carry (1 if the sum is 2 or 3, otherwise 0)
    carry = Math.floor(sum / 2)
  }

  // Return the resulting binary sum string
  return result;
};

// Test Case:
console.log(addBinary("11", "1"));  // Output: "100"
console.log(addBinary("1010", "1011"));  // Output: "10101"
