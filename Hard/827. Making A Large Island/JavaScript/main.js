/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const n = grid.length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const islandSizeMap = new Map();
  let islandId = 2; // Start from 2 to avoid confusion with 0 and 1
  let maxIslandSize = 0;

  // Function to perform DFS and label the island
  function dfs(x, y, id) {
    if (x < 0 || y < 0 || x >= n || y >= n || grid[x][y] !== 1) {
      return 0;
    }
    grid[x][y] = id;
    let size = 1;
    for (const [dx, dy] of directions) {
      size += dfs(x + dx, y + dy, id);
    }
    return size;
  }

  // Step 1: Identify and label islands
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const size = dfs(i, j, islandId);
        islandSizeMap.set(islandId, size);
        maxIslandSize = Math.max(maxIslandSize, size);
        islandId++;
      }
    }
  }

  // Step 2: Evaluate changing each `0` to `1`
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const seenIslands = new Set();
        let potentialSize = 1; // Changing this `0` to `1`
        for (const [dx, dy] of directions) {
          const x = i + dx;
          const y = j + dy;
          if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] > 1) {
            const id = grid[x][y];
            if (!seenIslands.has(id)) {
              seenIslands.add(id);
              potentialSize += islandSizeMap.get(id);
            }
          }
        }
        maxIslandSize = Math.max(maxIslandSize, potentialSize);
      }
    }
  }

  return maxIslandSize;
}; 
