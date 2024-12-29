var TimeLimitedCache = function () {
  this.cache = {} // { key: { value, expirationTime } }
  return this;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now();
  const existingCache = this.cache[key];
  const isUnexpired = existingCache && existingCache.expirationTime > currentTime;

  this.cache[key] = {
    value,
    expirationTime: currentTime + duration
  };

  return isUnexpired == null ? false : true;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const cache = this.cache[key];
  if (cache && cache.expirationTime > Date.now()) {
    return cache.value;
  }
  return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).reduce((count, key) => {
    const cache = this.cache[key];
    return cache.expirationTime > Date.now() ? count + 1 : count;
  }, 0);
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// Test Case
const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1
