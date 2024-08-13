### Approach:

1.  **Create a Dummy Node**: This will help to easily manage the head of the new linked list. A pointer `current` will be used to build the merged list.
2.  **Compare the Nodes**: Traverse through both lists, comparing the nodes of `list1` and `list2`. Append the smaller node to the `current` node.
3.  **Move Pointers**: Move the pointer of the list from which the smaller node was selected.
4.  **Handle Remaining Nodes**: If one of the lists is exhausted, append the remaining nodes of the other list to the merged list.
5.  **Return the Merged List**: The merged list starts from `dummy.next`.
