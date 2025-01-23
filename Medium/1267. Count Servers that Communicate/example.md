Here are two real-world examples where counting servers that can communicate might be useful:

1. **Data Center Management**:
   In a data center, servers are often organized in a grid-like structure. Knowing which servers can communicate with each other is crucial for load balancing, fault tolerance, and efficient resource allocation. For instance, if a server in a row or column fails, the system can quickly identify other servers that can take over its tasks.

   ```javascript
   const dataCenterGrid = [
       [1, 0, 1],
       [0, 1, 0],
       [1, 0, 1]
   ];
   console.log(countServers(dataCenterGrid)); // Output: 4
   ```

2. **Network Topology Analysis**:
   In a corporate network, servers and workstations are connected in a grid-like topology. Analyzing which servers can communicate helps in optimizing network traffic, ensuring redundancy, and planning for network expansions. This analysis can also help in identifying isolated servers that might need reconfiguration.

   ```javascript
   const networkGrid = [
       [1, 1, 0, 0],
       [0, 0, 1, 0],
       [0, 0, 1, 1],
       [1, 0, 0, 1]
   ];
   console.log(countServers(networkGrid)); // Output: 5
   ```

In both examples, the `countServers` function helps in determining the number of servers that can communicate with at least one other server, which is essential for maintaining efficient and reliable operations in data centers and corporate networks.
