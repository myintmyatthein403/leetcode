To solve the problem of finding eventual safe states in a directed graph using JavaScript, you can use a depth-first search (DFS) approach. Here is a step-by-step approach:

1. **Identify Terminal Nodes**: Terminal nodes are nodes with no outgoing edges. These nodes are inherently safe.

2. **DFS to Detect Cycles**: Use DFS to traverse the graph and detect cycles. Nodes involved in cycles are not safe.

3. **Mark Safe Nodes**: During the DFS traversal, mark nodes that lead to terminal nodes or other safe nodes as safe.

Here is a JavaScript implementation of the approach:

```javascript
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const color = new Array(n).fill(0); // 0 = unvisited, 1 = visiting, 2 = safe

    const dfs = (node) => {
        if (color[node] !== 0) {
            return color[node] === 2;
        }
        color[node] = 1;
        for (const neighbor of graph[node]) {
            if (color[neighbor] === 2) {
                continue;
            }
            if (color[neighbor] === 1 || !dfs(neighbor)) {
                return false;
            }
        }
        color[node] = 2;
        return true;
    };

    const safeNodes = [];
    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            safeNodes.push(i);
        }
    }
    return safeNodes.sort((a, b) => a - b);
};

// Example usage:
const graph1 = [[1,2],[2,3],[5],[0],[5],[],[]];
const graph2 = [[1,2,3,4],[1,2],[3,4],[0,4],[]];

console.log(eventualSafeNodes(graph1));  // Output: [2, 4, 5, 6]
console.log(eventualSafeNodes(graph2));  // Output: [4]
```

### Explanation:
- **Color Array**: The `color` array is used to track the state of each node during DFS traversal:
  - `0`: Unvisited
  - `1`: Visiting (part of the current DFS path)
  - `2`: Safe (either a terminal node or leads to a terminal node)

- **DFS Function**: The `dfs` function performs a DFS traversal from the given node. If a cycle is detected (i.e., revisiting a node marked as `1`), the function returns `false`. If the node leads to a terminal node or other safe nodes, it is marked as `2` (safe).

- **Safe Nodes Collection**: After performing DFS for all nodes, the nodes marked as `2` (safe) are collected and returned in sorted order.

This approach ensures that all eventual safe states are identified correctly.

