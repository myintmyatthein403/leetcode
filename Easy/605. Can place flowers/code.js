/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  var count = 0;
  for (var i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      var prev = i === 0 ? 0 : flowerbed[i - 1];
      var next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
      if (prev === 0 && next === 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n;
};


// For Example
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Output: false
