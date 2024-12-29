### Example 1: API Request with Timeout

When making an API request, you might want to ensure that the request completes within a certain time limit. If the request takes too long, you can reject it and handle the timeout accordingly.

```javascript
const fetchWithTimeout = timeLimit(fetch, 5000); // 5 seconds timeout

fetchWithTimeout('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

In this example, if the fetch request to `https://api.example.com/data` takes longer than 5 seconds, it will be rejected with the message "Time Limit Exceeded".

### Example 2: Database Query with Timeout

When querying a database, you might want to ensure that the query completes within a certain time limit to avoid long-running queries that could impact performance.

```javascript
const queryWithTimeout = timeLimit(database.query, 3000); // 3 seconds timeout

queryWithTimeout('SELECT * FROM users')
  .then(results => console.log(results))
  .catch(error => console.error('Error:', error));
```

In this example, if the database query `SELECT * FROM users` takes longer than 3 seconds, it will be rejected with the message "Time Limit Exceeded".

These examples demonstrate how the `timeLimit` function can be used to enforce time limits on asynchronous operations, ensuring that they complete within a specified duration or are rejected if they take too long.
