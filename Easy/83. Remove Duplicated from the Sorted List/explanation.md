### Explanation

-   The linked list is sorted, which means that duplicates will always be consecutive. This allows us to remove duplicates by simply comparing each node with its next node.
-   The algorithm operates in O(n) time complexity, where `n` is the number of nodes in the linked list, because each node is visited once.
-   The space complexity is O(1), as we are modifying the linked list in place and not using any additional data structures.
