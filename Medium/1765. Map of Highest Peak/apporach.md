To solve this problem, we can use a Breadth-First Search (BFS) approach. The idea is to start from all water cells (which have a height of 0) and then propagate the heights to the adjacent land cells. Here's a step-by-step approach in JavaScript:

1. Initialize a queue with all water cells.
2. Set the height of all water cells to 0.
3. Use BFS to propagate the heights to the adjacent land cells.
4. For each cell, set its height to be one more than the minimum height of its adjacent cells.

Here's the implementation:

```javascript
function highestPeak(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    const height = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Initialize the queue with all water cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // BFS to propagate heights
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return height;
}

// Example usage:
const isWater1 = [[0, 1], [0, 0]];
console.log(highestPeak(isWater1)); // Output: [[1, 0], [2, 1]]

const isWater2 = [[0, 0, 1], [1, 0, 0], [0, 0, 0]];
console.log(highestPeak(isWater2)); // Output: [[1, 1, 0], [0, 1, 1], [1, 2, 2]]
```

This code initializes the heights of all water cells to 0 and then uses BFS to propagate the heights to the adjacent land cells, ensuring that the height difference between adjacent cells is at most 1.

Time Limit Exceeded
```javascript
function highestPeak(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    const height = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Initialize the queue with all water cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // BFS to propagate heights
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return height;
}

// Example usage:
const isWater1 = [[0, 1], [0, 0]];
console.log(highestPeak(isWater1)); // Output: [[1, 0], [2, 1]]

const isWater2 = [[0, 0, 1], [1, 0, 0], [0, 0, 0]];
console.log(highestPeak(isWater2)); // Output: [[1, 1, 0], [0, 1, 1], [1, 2, 2]]
```
