### Example 1: Auto-Save Feature in a Text Editor

In a text editor, you might want to auto-save the user's work every few seconds. However, if the user closes the document or navigates away, you would want to cancel the auto-save interval to avoid unnecessary operations.

```javascript
let autoSaveInterval;

function startAutoSave(documentId) {
  autoSaveInterval = setInterval(() => {
    saveDocument(documentId);
  }, 5000); // Auto-save every 5 seconds
}

function stopAutoSave() {
  clearInterval(autoSaveInterval);
}

function saveDocument(documentId) {
  console.log(`Document ${documentId} saved at ${new Date().toISOString()}`);
}

// Start auto-saving
startAutoSave(123);

// Simulate user closing the document after 20 seconds
setTimeout(() => {
  stopAutoSave();
  console.log('Auto-save stopped');
}, 20000);
```

### Example 2: Real-Time Data Fetching

In a dashboard application, you might want to fetch real-time data from a server at regular intervals. If the user navigates away from the dashboard, you would cancel the interval to stop fetching data.

```javascript
let fetchDataInterval;

function startFetchingData() {
  fetchDataInterval = setInterval(() => {
    fetchData();
  }, 10000); // Fetch data every 10 seconds
}

function stopFetchingData() {
  clearInterval(fetchDataInterval);
}

function fetchData() {
  console.log(`Data fetched at ${new Date().toISOString()}`);
  // Simulate an API call
  // fetch('/api/data').then(response => response.json()).then(data => console.log(data));
}

// Start fetching data
startFetchingData();

// Simulate user navigating away from the dashboard after 30 seconds
setTimeout(() => {
  stopFetchingData();
  console.log('Data fetching stopped');
}, 30000);
```
