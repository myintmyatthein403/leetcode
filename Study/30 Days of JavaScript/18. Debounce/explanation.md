### Example 1: Search Input Field

When implementing a search input field that fetches results from a server, you want to avoid making a request for every keystroke. Instead, you can use a debounce function to delay the request until the user has stopped typing for a specified amount of time.

```javascript
// Debounce function
var debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// Example usage: Search input field
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const fetchSearchResults = (query) => {
  // Simulate an API call
  console.log(`Fetching results for: ${query}`);
  // Update searchResults with fetched data
};

const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

searchInput.addEventListener('input', (event) => {
  debouncedFetchSearchResults(event.target.value);
});
```

### Example 2: Window Resize Event

When handling the window resize event, you might want to perform some calculations or update the layout. However, resizing the window can trigger many events in quick succession. Using a debounce function can help to limit the number of times the event handler is called.

```javascript
// Debounce function
var debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// Example usage: Window resize event
const handleResize = () => {
  console.log('Window resized to:', window.innerWidth, window.innerHeight);
  // Perform layout updates or calculations
};

const debouncedHandleResize = debounce(handleResize, 200);

window.addEventListener('resize', debouncedHandleResize);
```

In both examples, the debounce function helps to optimize performance by limiting the number of times a function is called in response to frequent events, such as user input or window resizing. This ensures that the function is only executed after a specified delay, reducing unnecessary computations and improving the overall user experience.

