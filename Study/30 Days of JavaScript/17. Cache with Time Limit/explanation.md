### Example 1: Caching API Responses

When making API requests, you might want to cache the responses for a short period to reduce the number of requests made to the server and improve performance. This is especially useful for data that doesn't change frequently.

```javascript
class TimeLimitedCache {
  constructor() {
    this.cache = {}; // { key: { value, expirationTime } }
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const existingCache = this.cache[key];
    const isUnexpired = existingCache && existingCache.expirationTime > currentTime;

    this.cache[key] = {
      value,
      expirationTime: currentTime + duration
    };

    return isUnexpired;
  }

  get(key) {
    const cache = this.cache[key];
    if (cache && cache.expirationTime > Date.now()) {
      return cache.value;
    }
    return -1;
  }

  count() {
    const currentTime = Date.now();
    return Object.keys(this.cache).reduce((count, key) => {
      const cache = this.cache[key];
      return cache.expirationTime > currentTime ? count + 1 : count;
    }, 0);
  }
}

// Usage example
const apiCache = new TimeLimitedCache();

async function fetchData(url) {
  const cachedData = apiCache.get(url);
  if (cachedData !== -1) {
    return cachedData;
  }

  const response = await fetch(url);
  const data = await response.json();
  apiCache.set(url, data, 60000); // Cache for 1 minute
  return data;
}

// Fetch data with caching
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Example 2: Session Management

In a web application, you might want to manage user sessions with a time limit. If a user is inactive for a certain period, their session should expire.

```javascript
class TimeLimitedCache {
  constructor() {
    this.cache = {}; // { key: { value, expirationTime } }
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const existingCache = this.cache[key];
    const isUnexpired = existingCache && existingCache.expirationTime > currentTime;

    this.cache[key] = {
      value,
      expirationTime: currentTime + duration
    };

    return isUnexpired;
  }

  get(key) {
    const cache = this.cache[key];
    if (cache && cache.expirationTime > Date.now()) {
      return cache.value;
    }
    return -1;
  }

  count() {
    const currentTime = Date.now();
    return Object.keys(this.cache).reduce((count, key) => {
      const cache = this.cache[key];
      return cache.expirationTime > currentTime ? count + 1 : count;
    }, 0);
  }
}

// Usage example
const sessionCache = new TimeLimitedCache();

function createSession(userId) {
  sessionCache.set(userId, { loggedIn: true }, 1800000); // Session valid for 30 minutes
}

function getSession(userId) {
  const session = sessionCache.get(userId);
  if (session !== -1) {
    return session;
  }
  return null;
}

function isLoggedIn(userId) {
  return getSession(userId) !== null;
}

// Create a session for a user
createSession('user123');

// Check if the user is logged in
console.log(isLoggedIn('user123')); // true

// Simulate user inactivity
setTimeout(() => {
  console.log(isLoggedIn('user123')); // false (after 30 minutes)
}, 1800000);
```

These examples demonstrate how a `TimeLimitedCache` can be used to manage temporary data efficiently, such as caching API responses and managing user sessions.
