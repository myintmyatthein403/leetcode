Here are two real-world examples where the `highestPeak` function can be useful:

### Example 1: Terrain Elevation Mapping
In a geographical information system (GIS), you might have a map where water bodies are marked, and you need to generate a terrain elevation map. The `highestPeak` function can be used to calculate the elevation of each cell in the map based on its distance from the nearest water body.

```javascript
const isWater = [
  [0, 1, 0],
  [0, 0, 0],
  [1, 0, 0]
];

const elevationMap = highestPeak(isWater);
console.log(elevationMap);
// Output:
// [
//   [1, 0, 1],
//   [1, 1, 1],
//   [0, 1, 2]
// ]
```

### Example 2: Urban Planning
In urban planning, you might need to design a city layout where parks (water cells) are distributed, and you want to calculate the distance of each residential area from the nearest park. The `highestPeak` function can help you determine the optimal placement of residential areas to ensure that all residents have easy access to parks.

```javascript
const cityMap = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
];

const distanceToPark = highestPeak(cityMap);
console.log(distanceToPark);
// Output:
// [
//   [2, 1, 0, 1],
//   [1, 2, 1, 2],
//   [1, 0, 1, 2],
//   [2, 1, 2, 3]
// ]
```

In both examples, the `highestPeak` function helps in calculating the distance from water bodies (or parks) to other cells, which can be crucial for various planning and analysis tasks.

