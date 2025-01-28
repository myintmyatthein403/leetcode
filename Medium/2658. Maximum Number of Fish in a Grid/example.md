Here are two real-world examples of how the `getMaximumFish` function can be used:

### Example 1: Fishing in a Lake
Imagine you have a grid representation of a lake where each cell contains the number of fish in that part of the lake. You want to find the maximum number of fish you can catch starting from any part of the lake and moving to adjacent parts.

```javascript
const lakeGrid = [
    [0, 2, 1, 0],
    [4, 0, 0, 3],
    [1, 0, 0, 4],
    [0, 3, 2, 0]
];
console.log(getMaximumFish(lakeGrid)); // Output: 7
```

In this example, starting from the cell with 4 fish at (1, 0), you can move to (2, 0) and then to (3, 1) to catch a total of 7 fish.

### Example 2: Harvesting Fish in a Fish Farm
Consider a fish farm where each cell in the grid represents a pond with a certain number of fish. You want to determine the maximum number of fish you can harvest by starting from any pond and moving to adjacent ponds.

```javascript
const fishFarmGrid = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1]
];
console.log(getMaximumFish(fishFarmGrid)); // Output: 1
```

In this example, each pond is isolated, so the maximum number of fish you can catch starting from any pond is 1.

These examples demonstrate how the `getMaximumFish` function can be applied to real-world scenarios involving grids representing areas with fish.

