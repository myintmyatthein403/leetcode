To solve the problem using JavaScript, we can follow a similar approach as described earlier. Here is the implementation:

```javascript
function checkIfPrerequisite(numCourses, prerequisites, queries) {
    // Initialize the adjacency matrix
    const reachable = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
    
    // Fill the adjacency matrix with direct prerequisites
    for (const [u, v] of prerequisites) {
        reachable[u][v] = true;
    }
    
    // Floyd-Warshall algorithm to compute transitive closure
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (reachable[i][k] && reachable[k][j]) {
                    reachable[i][j] = true;
                }
            }
        }
    }
    
    // Answer the queries
    return queries.map(([u, v]) => reachable[u][v]);
}

// Example usage:
const numCourses = 3;
const prerequisites = [[1, 2], [1, 0], [2, 0]];
const queries = [[1, 0], [1, 2]];
console.log(checkIfPrerequisite(numCourses, prerequisites, queries));  // Output: [true, true]
```

### Explanation:
1. **Initialization**: We initialize a 2D array `reachable` where `reachable[i][j]` is `true` if course `i` is a prerequisite of course `j`, otherwise `false`.

2. **Direct Prerequisites**: We populate the `reachable` matrix with the given direct prerequisites.

3. **Transitive Closure**: Using the Floyd-Warshall algorithm, we update the `reachable` matrix to reflect indirect prerequisites.

4. **Query Processing**: For each query, we simply check the `reachable` matrix to see if the prerequisite relationship exists.

This approach ensures that we efficiently determine the prerequisite relationships for all queries. 
