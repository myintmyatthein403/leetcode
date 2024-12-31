### Example 1: User Interface Event Handling
Suppose you have a user interface where you want to handle button clicks and form submissions using the `EventEmitter` class.

```javascript
const emitter = new EventEmitter();

// Subscribe to button click event
const buttonClickCallback = () => console.log('Button clicked!');
const buttonClickSubscription = emitter.subscribe('buttonClick', buttonClickCallback);

// Simulate button click
emitter.emit('buttonClick'); // Output: Button clicked!

// Unsubscribe from button click event
buttonClickSubscription.unsubscribe();
emitter.emit('buttonClick'); // No output
```

### Example 2: Real-time Chat Application
In a real-time chat application, you can use the `EventEmitter` class to handle incoming messages and user status updates.

```javascript
const chatEmitter = new EventEmitter();

// Subscribe to new message event
const newMessageCallback = (message) => console.log(`New message: ${message}`);
const newMessageSubscription = chatEmitter.subscribe('newMessage', newMessageCallback);

// Subscribe to user status update event
const userStatusCallback = (status) => console.log(`User status: ${status}`);
const userStatusSubscription = chatEmitter.subscribe('userStatus', userStatusCallback);

// Simulate receiving a new message
chatEmitter.emit('newMessage', ['Hello, world!']); // Output: New message: Hello, world!

// Simulate user status update
chatEmitter.emit('userStatus', ['Online']); // Output: User status: Online

// Unsubscribe from new message event
newMessageSubscription.unsubscribe();
chatEmitter.emit('newMessage', ['Hello again!']); // No output
```

These examples demonstrate how the `EventEmitter` class can be used to handle events in real-world scenarios, such as user interface interactions and real-time communication.

