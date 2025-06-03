/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {
  let totalCandies = 0;
  const n = status.length;
  const visited = new Array(n).fill(false);  // To avoid reprocessing boxes
  const hasBox = new Array(n).fill(false);   // Boxes we have in possession
  const canOpen = new Array(n).fill(false);  // Boxes we can open (either status is 1 or we have the key)
  const queue = [];

  // Initially, mark the boxes we have and process the ones we can open
  for (let box of initialBoxes) {
    hasBox[box] = true;
    if (status[box] === 1) {
      queue.push(box);
    }
  }

  while (queue.length > 0) {
    const box = queue.shift();
    if (visited[box]) continue;
    visited[box] = true;

    // Collect candies
    totalCandies += candies[box];

    // Use keys to open new boxes
    for (let key of keys[box]) {
      canOpen[key] = true;
      if (hasBox[key] && !visited[key]) {
        queue.push(key);
      }
    }

    // Get contained boxes
    for (let contained of containedBoxes[box]) {
      hasBox[contained] = true;
      if (canOpen[contained] || status[contained] === 1) {
        queue.push(contained);
      }
    }
  }

  return totalCandies;
};
