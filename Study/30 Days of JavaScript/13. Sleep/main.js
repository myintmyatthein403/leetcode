/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// Test cases
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
sleep(1000).then(() => console.log('1000ms passed'));
sleep(2000).then(() => console.log('2000ms passed'));
sleep(3000).then(() => console.log('3000ms passed'));
