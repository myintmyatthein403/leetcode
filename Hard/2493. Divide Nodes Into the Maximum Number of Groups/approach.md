Let's break down the approach step by step to solve the problem of calculating the maximum number of groups for the entire graph.

### Step-by-Step Approach:

1. **Graph Representation**:
   - Represent the graph using an adjacency list. This helps in efficiently traversing the graph.

2. **Union-Find Data Structure**:
   - Use Union-Find (also known as Disjoint Set Union, DSU) to manage connected components. This helps in efficiently finding and merging components.

3. **Build the Graph**:
   - Iterate through the edges to build the adjacency list.
   - Apply Union-Find operations to merge nodes into their respective components.

4. **Calculate Maximum Groups for Each Component**:
   - For each node, use Breadth-First Search (BFS) to calculate the maximum number of groups for its component.
   - Track the maximum depth reached during BFS traversal, which will give the maximum number of groups.
   - If an invalid partition is detected (i.e., the graph is not bipartite), return `-1`.

5. **Sum Up the Groups**:
   - Sum up the maximum number of groups for all components to get the total number of groups.

### JavaScript Implementation:

Here is the JavaScript implementation of the above approach:

```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
    const adjList = Array.from({ length: n }, () => []);
    const parent = Array(n).fill(-1);
    const depth = Array(n).fill(0);

    // Build the adjacency list and apply Union-Find for each edge
    for (const [u, v] of edges) {
        adjList[u - 1].push(v - 1);
        adjList[v - 1].push(u - 1);
        union(u - 1, v - 1, parent, depth);
    }

    const numOfGroupsForComponent = {};

    // For each node, calculate the maximum number of groups for its component
    for (let node = 0; node < n; node++) {
        const numberOfGroups = getNumberOfGroups(adjList, node, n);
        if (numberOfGroups === -1) {
            return -1; // If invalid split, return -1
        }
        const rootNode = find(node, parent);
        numOfGroupsForComponent[rootNode] = Math.max(
            numOfGroupsForComponent[rootNode] || 0,
            numberOfGroups
        );
    }

    // Calculate the total number of groups across all components
    const totalNumberOfGroups = Object.values(numOfGroupsForComponent).reduce((a, b) => a + b, 0);
    return totalNumberOfGroups;

    // Function to calculate the number of groups for a given component starting from srcNode
    function getNumberOfGroups(adjList, srcNode, n) {
        const nodesQueue = [];
        const layerSeen = Array(n).fill(-1);
        nodesQueue.push(srcNode);
        layerSeen[srcNode] = 0;
        let deepestLayer = 0;

        // Perform BFS to calculate the number of layers (groups)
        while (nodesQueue.length > 0) {
            const numOfNodesInLayer = nodesQueue.length;
            for (let i = 0; i < numOfNodesInLayer; i++) {
                const currentNode = nodesQueue.shift();
                for (const neighbor of adjList[currentNode]) {
                    // If neighbor hasn't been visited, assign it to the next layer
                    if (layerSeen[neighbor] === -1) {
                        layerSeen[neighbor] = deepestLayer + 1;
                        nodesQueue.push(neighbor);
                    } else {
                        // If the neighbor is already in the same layer, return -1 (invalid partition)
                        if (layerSeen[neighbor] === deepestLayer) {
                            return -1;
                        }
                    }
                }
            }
            deepestLayer += 1;
        }
        return deepestLayer;
    }

    // Find the root of the given node in the Union-Find structure
    function find(node, parent) {
        if (parent[node] === -1) {
            return node;
        }
        parent[node] = find(parent[node], parent);
        return parent[node];
    }

    // Union operation to merge two sets
    function union(node1, node2, parent, depth) {
        let root1 = find(node1, parent);
        let root2 = find(node2, parent);

        // If both nodes already belong to the same set, no action needed
        if (root1 === root2) {
            return;
        }

        // Union by rank (depth) to keep the tree balanced
        if (depth[root1] < depth[root2]) {
            const temp = root1;
            root1 = root2;
            root2 = temp;
        }
        parent[root2] = root1;

        // If the depths are equal, increment the depth of the new root
        if (depth[root1] === depth[root2]) {
            depth[root1] += 1;
        }
    }
};

// Example usage:
const n1 = 6;
const edges1 = [[1, 2], [1, 4], [1, 5], [2, 6], [2, 3], [4, 6]];
console.log(magnificentSets(n1, edges1)); // Output: 4

const n2 = 3;
const edges2 = [[1, 2], [2, 3], [3, 1]];
console.log(magnificentSets(n2, edges2)); // Output: -1
```

### Explanation:
- **Graph Representation**: We create an adjacency list to represent the graph.
- **Union-Find**: We use Union-Find to manage connected components.
- **BFS Traversal**: We use BFS to traverse the graph, assigning groups to nodes and checking if the graph is bipartite.
- **Check for Bipartite Graph**: If we find an odd-length cycle, we return `-1` as it's impossible to satisfy the conditions.
- **Calculate Maximum Groups**: We track the maximum depth reached during BFS traversal to determine the maximum number of groups.
