
/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
  const n = favorite.length;
  const reversedGraph = Array.from({ length: n }, () => []);

  // Build the reversed graph where each node points to its admirers
  for (let person = 0; person < n; person++) {
    reversedGraph[favorite[person]].push(person);
  }

  const visited = new Array(n).fill(false);
  let longestCycle = 0;
  let twoCycleInvitations = 0;

  // Helper function to calculate the maximum distance from a given start node
  const bfs = (startNode, visitedNodes, reversedGraph) => {
    const queue = [[startNode, 0]];
    let maxDistance = 0;
    while (queue.length > 0) {
      const [currentNode, currentDistance] = queue.shift();
      for (const neighbor of reversedGraph[currentNode]) {
        if (visitedNodes.has(neighbor)) continue;
        visitedNodes.add(neighbor);
        queue.push([neighbor, currentDistance + 1]);
        maxDistance = Math.max(maxDistance, currentDistance + 1);
      }
    }
    return maxDistance;
  };

  // Find all cycles in the graph
  for (let person = 0; person < n; person++) {
    if (!visited[person]) {
      const visitedPersons = new Map();
      let currentPerson = person;
      let distance = 0;
      while (true) {
        if (visited[currentPerson]) break;
        visited[currentPerson] = true;
        visitedPersons.set(currentPerson, distance);
        distance += 1;
        const nextPerson = favorite[currentPerson];

        // Cycle detected
        if (visitedPersons.has(nextPerson)) {
          const cycleLength = distance - visitedPersons.get(nextPerson);
          longestCycle = Math.max(longestCycle, cycleLength);

          // Handle cycles of length 2
          if (cycleLength === 2) {
            const visitedNodes = new Set([currentPerson, nextPerson]);
            twoCycleInvitations += 2 + bfs(nextPerson, visitedNodes, reversedGraph) + bfs(currentPerson, visitedNodes, reversedGraph);
          }
          break;
        }
        currentPerson = nextPerson;
      }
    }
  }

  return Math.max(longestCycle, twoCycleInvitations);
};


// Example usage:
const favorite = [2, 2, 1, 2];
console.log(maximumInvitations(favorite)); // Output: 3
