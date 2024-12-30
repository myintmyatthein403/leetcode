/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map();

  arr1.forEach(item => map.set(item.id, item));
  arr2.forEach(item => {
    if (map.has(item.id)) {
      Object.assign(map.get(item.id), item);
    } else {
      map.set(item.id, item);
    }
  });

  const result = Array.from(map.values());

  // Sort the result by id
  result.sort((a, b) => a.id - b.id);

  return result;
};
