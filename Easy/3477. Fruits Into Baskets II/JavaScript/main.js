/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const n = fruits.length;
  const used = new Array(n).fill(false); // To track used baskets
  let unplaced = 0;

  for (let i = 0; i < n; i++) {
    let placed = false;

    for (let j = 0; j < n; j++) {
      if (!used[j] && baskets[j] >= fruits[i]) {
        used[j] = true;  // Mark basket as used
        placed = true;
        break;           // Stop searching once placed
      }
    }

    if (!placed) unplaced++;
  }

  return unplaced;
};
