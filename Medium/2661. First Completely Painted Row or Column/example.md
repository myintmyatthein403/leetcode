Here are two real-world examples where this function could be useful:

### Example 1: Bingo Game
In a Bingo game, players mark numbers on their cards as they are called out. The goal is to complete a row, column, or diagonal. This function can be used to determine the first time a player completes a row or column.

```javascript
let bingoNumbers = [15, 3, 7, 22, 5, 18, 10, 12, 25];
let bingoCard = [
  [5, 10, 15],
  [3, 18, 22],
  [7, 12, 25]
];

console.log(firstCompleteIndex(bingoNumbers, bingoCard)); // Output: 4
```

### Example 2: Task Completion in a Project
In a project management scenario, tasks are assigned to different rows (teams) and columns (days). The function can help determine the first day when a team completes all its tasks or when all tasks for a day are completed.

```javascript
let taskCompletionOrder = [101, 202, 303, 102, 203, 301, 302, 201, 103];
let taskMatrix = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303]
];

console.log(firstCompleteIndex(taskCompletionOrder, taskMatrix)); // Output: 5
```

In both examples, the function helps identify the point at which a significant milestone (completing a row or column) is achieved.
