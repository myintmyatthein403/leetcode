# Prevent Time Limit Exceeded

## Time Complexity Analysis
| Operation | Complexity |
| --------- | ---------- |
| change()  | O(log n)   |
| find()    | O(log n)(due to lazy cleanup in peek())       |
| insert()  | O(log n)   |
| extractMin() | O(log n) |
| remove() | O(1)(set delete)   |
