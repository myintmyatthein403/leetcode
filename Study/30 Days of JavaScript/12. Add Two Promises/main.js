/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(([a, b]) => a + b);
  // or
  // return (await promise1) + (await promise2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Test cases
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4
addTwoPromises(Promise.resolve(2), Promise.resolve(3))
