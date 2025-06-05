/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  // Step 1: Initialize the parent of each character to itself
  const parent = new Array(26).fill(0).map((_, i) => i);

  // Helper to find the root of a character
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); // Path compression
    }
    return parent[x];
  }

  // Helper to union two characters
  function union(x, y) {
    let rootX = find(x);
    let rootY = find(y);

    // Always keep the smaller lexicographic character as the root
    if (rootX < rootY) {
      parent[rootY] = rootX;
    } else if (rootY < rootX) {
      parent[rootX] = rootY;
    }
  }

  // Step 2: Union the equivalent characters
  for (let i = 0; i < s1.length; i++) {
    let index1 = s1.charCodeAt(i) - 'a'.charCodeAt(0);
    let index2 = s2.charCodeAt(i) - 'a'.charCodeAt(0);
    union(index1, index2);
  }

  // Step 3: Build the result string
  let result = '';
  for (let ch of baseStr) {
    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    let smallestIndex = find(index);
    result += String.fromCharCode(smallestIndex + 'a'.charCodeAt(0));
  }

  return result;
};
