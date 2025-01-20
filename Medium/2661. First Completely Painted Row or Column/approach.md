To solve the problem of finding the smallest index at which either a row or a column in the matrix `mat` is completely painted, you can follow these steps:

1. **Initialize Tracking Structures**:
   - Create two arrays to keep track of the number of painted cells in each row and each column.
   - Use a dictionary to map each value in `mat` to its corresponding row and column indices.

2. **Iterate Through `arr`**:
   - For each value in `arr`, find its position in `mat` using the dictionary.
   - Increment the count of painted cells for the corresponding row and column.
   - Check if the current row or column is completely painted (i.e., the count equals the number of columns or rows, respectively).

3. **Return the Index**:
   - As soon as a row or column is completely painted, return the current index.

Here is a Python implementation of the approach:

```python
def firstCompleteIndex(arr, mat):
    m, n = len(mat), len(mat[0])
    row_count = [0] * m
    col_count = [0] * n
    position = {}

    # Map each value in mat to its (row, col) position
    for i in range(m):
        for j in range(n):
            position[mat[i][j]] = (i, j)

    # Iterate through arr and paint the cells
    for index, value in enumerate(arr):
        row, col = position[value]
        row_count[row] += 1
        col_count[col] += 1

        # Check if the current row or column is completely painted
        if row_count[row] == n or col_count[col] == m:
            return index

    return -1  # In case no row or column is completely painted

# Example usage:
arr1 = [1, 3, 4, 2]
mat1 = [[1, 4], [2, 3]]
print(firstCompleteIndex(arr1, mat1))  # Output: 2

arr2 = [2, 8, 7, 4, 1, 3, 5, 6, 9]
mat2 = [[3, 2, 5], [1, 4, 6], [8, 7, 9]]
print(firstCompleteIndex(arr2, mat2))  # Output: 3
```

This approach ensures that you efficiently track the painting process and determine the smallest index at which a row or column is completely painted.
