### Approach Explanation for Number Container System

1. **Class Initialization**:
   - Create a class `NumberContainers` that will manage the number container system.
   - Initialize two data structures:
     - A hashmap `indexToNumber` to store the number at each index.
     - A hashmap `numberToIndices` to store a sorted list of indices for each number.

2. **Change Method**:
   - Define a method `change(int index, int number)`:
     - If the index already exists in `indexToNumber`, get the old number and remove the index from the list of indices for that old number in `numberToIndices`.
     - Update `indexToNumber` to associate the given index with the new number.
     - Add the index to the list of indices for the new number in `numberToIndices`.
     - Ensure the list of indices for each number in `numberToIndices` remains sorted.

3. **Find Method**:
   - Define a method `find(int number)`:
     - Check if the number exists in `numberToIndices` and if the list of indices for that number is not empty.
     - If it exists, return the smallest index from the sorted list of indices for that number.
     - If it does not exist, return `-1`.

### Summary
- The `NumberContainers` class uses two hashmaps to efficiently manage the insertion, replacement, and retrieval of numbers and their indices.
- The `change` method updates the mappings and maintains sorted lists of indices.
- The `find` method retrieves the smallest index for a given number in constant time if the number exists.
