/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  try {
    if (Array.isArray(obj)) {
      return obj.filter(Boolean).map(compactObject);
    }
    // If the input is an object, recursively compact each value
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        obj[key] = compactObject(obj[key]);
        // Remove keys with falsy values
        if (!obj[key]) {
          delete obj[key];
        }
      }
    }
    return obj;
  } catch (error) {
    console.error(error);
  }
};


// Test Cases
console.log(compactObject({ a: 1, b: undefined, c: null })); // { a: 1 }
console.log(compactObject([1, undefined, 2, null])); // [1, 2]
