### Example 1: Fetching Data from Multiple APIs

Suppose you have a dashboard that needs to display data from multiple APIs. You can use `promiseAll` to fetch data from these APIs in parallel, which will improve the performance of your application.

```javascript
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return Promise.all(functions.map(fn => fn()));
};

// Example usage
const fetchUserData = () => fetch('https://api.example.com/user').then(res => res.json());
const fetchPostsData = () => fetch('https://api.example.com/posts').then(res => res.json());
const fetchCommentsData = () => fetch('https://api.example.com/comments').then(res => res.json());

promiseAll([fetchUserData, fetchPostsData, fetchCommentsData])
  .then(([userData, postsData, commentsData]) => {
    console.log('User Data:', userData);
    console.log('Posts Data:', postsData);
    console.log('Comments Data:', commentsData);
  })
  .catch(error => console.error('Error fetching data:', error));
```

### Example 2: Performing Multiple Database Queries

In a web application, you might need to perform multiple database queries to gather data for a single request. Using `promiseAll`, you can execute these queries in parallel to reduce the overall response time.

```javascript
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return Promise.all(functions.map(fn => fn()));
};

// Example usage with a mock database query function
const queryUser = () => new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'John Doe' }), 100));
const queryPosts = () => new Promise(resolve => setTimeout(() => resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]), 200));
const queryComments = () => new Promise(resolve => setTimeout(() => resolve([{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }]), 150));

promiseAll([queryUser, queryPosts, queryComments])
  .then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch(error => console.error('Error executing queries:', error));
```  
