/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0;
  let maxFruits = 0;
  const count = new Map(); // To store fruit type -> count in current window

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];
    count.set(fruit, (count.get(fruit) || 0) + 1);

    // Shrink the window if there are more than 2 types of fruits
    while (count.size > 2) {
      const leftFruit = fruits[left];
      count.set(leftFruit, count.get(leftFruit) - 1);
      if (count.get(leftFruit) === 0) {
        count.delete(leftFruit);
      }
      left++;
    }

    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
};
