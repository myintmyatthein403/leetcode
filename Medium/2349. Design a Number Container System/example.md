### Real World Example 1: Library Book Management System

Imagine you are managing a library where each book is assigned a unique index, and each book can be categorized by a unique number representing its genre. You want to efficiently manage the books and quickly find the smallest index of a book in a specific genre.

#### Usage:
- **Change Method**: When a book is moved to a different genre, update its index and genre.
- **Find Method**: Quickly find the smallest index of a book in a specific genre.

```javascript
let library = new NumberContainers();
library.change(1, 'Fiction');
library.change(2, 'Non-Fiction');
library.change(3, 'Fiction');
console.log(library.find('Fiction')); // Output: 1
library.change(1, 'Non-Fiction');
console.log(library.find('Fiction')); // Output: 3
console.log(library.find('Non-Fiction')); // Output: 1
```

### Real World Example 2: Employee Task Management System

Consider a task management system where each task is assigned a unique index, and each task can be categorized by a unique number representing its priority level. You want to efficiently manage the tasks and quickly find the smallest index of a task with a specific priority level.

#### Usage:
- **Change Method**: When a task's priority level changes, update its index and priority level.
- **Find Method**: Quickly find the smallest index of a task with a specific priority level.

```javascript
let taskManager = new NumberContainers();
taskManager.change(1, 'High');
taskManager.change(2, 'Low');
taskManager.change(3, 'High');
console.log(taskManager.find('High')); // Output: 1
taskManager.change(1, 'Low');
console.log(taskManager.find('High')); // Output: 3
console.log(taskManager.find('Low')); // Output: 1
```

In both examples, the `NumberContainers` class helps efficiently manage the indices and categories (genres or priority levels) of items (books or tasks), allowing for quick updates and retrievals. 
