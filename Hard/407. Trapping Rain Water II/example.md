
Here are two real-world examples where the algorithm for trapping rainwater can be applied:

### 1. Urban Flood Management
In urban areas, managing rainwater is crucial to prevent flooding. The algorithm can be used to simulate and analyze how water would accumulate in different parts of a city based on the terrain and infrastructure. By inputting a height map of the city's landscape, urban planners can identify potential flood zones and design better drainage systems to mitigate the risk of flooding.

```javascript
const cityHeightMap = [
  [1, 4, 3, 1, 3, 2],
  [3, 2, 1, 3, 2, 4],
  [2, 3, 3, 2, 3, 1]
];

const trappedWater = trapRainWater(cityHeightMap);
console.log(`Total trapped water in the city: ${trappedWater} units`);
```

### 2. Agricultural Land Irrigation
In agriculture, efficient water management is essential for crop growth. The algorithm can help farmers understand how water will distribute across their fields after rainfall. By using a height map of the farmland, farmers can optimize irrigation systems to ensure even water distribution, preventing waterlogging in low-lying areas and ensuring that all crops receive adequate water.

```javascript
const farmHeightMap = [
  [2, 3, 4, 5, 4, 3],
  [3, 1, 2, 3, 2, 4],
  [4, 3, 2, 1, 2, 3],
  [5, 4, 3, 2, 3, 4]
];

const trappedWater = trapRainWater(farmHeightMap);
console.log(`Total trapped water on the farm: ${trappedWater} units`);
```

In both examples, the `trapRainWater` function helps in understanding and managing water accumulation, which is critical for urban planning and agricultural efficiency.

