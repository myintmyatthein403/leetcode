/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  let set = new Set();
  for (let [key, value] of map) {
    if (set.has(value)) {
      return false;
    }
    set.add(value);
  }
  return true;
};

// For example
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurrences([1, 2])); // Output: false
