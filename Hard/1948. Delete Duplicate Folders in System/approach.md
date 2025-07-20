### Approach: Serialization-Based Representation of Subtrees

#### Intuition

We can approach this problem at an abstract level (without worrying about implementation details at first) in three main steps:

1.  Build a tree representation of the file system using the input  paths. This tree is a multi-way tree rooted at /, where each non-root node represents a folder.
    
2.  Traverse the tree starting from the root. As stated in the problem, if two nodes  x  and  y  contain subfolders with the same structure (i.e., the same nested arrangement of subfolders, recursively), then both  x  and  y  must be deleted. Therefore, to determine the structure of a node’s subtree, we must first traverse all its children and then backtrack to process the node itself. This corresponds to a post-order traversal of a multi-way tree.
    

While backtracking to a node, we serialize its structure and store it in a data structure for later comparison with other nodes.

3.  Traverse the tree again from the root. When visiting a node  x, if its serialized structure appears more than once in the data structure, it means a duplicate exists, and we delete  x  (i.e., skip it). Otherwise,  x  is unique, and we record the path from the root to  x  in the final answer, then recursively visit its children.

After this second traversal, all duplicate folders will have been removed, and we will have collected the remaining unique folder paths.

#### Algorithm

Let’s now solve these three steps one by one:

**Step 1: Build the Tree**

We define a class to represent the nodes of the tree. We create a root node, and for each path in  paths, we insert its folders into the tree. If you're familiar with the Trie data structure, this step will feel familiar.

**Step 2: Serialize and Identify Duplicates**

The challenge here is not the post-order traversal itself, but rather how to represent the "structure" of a node in a way that can be used to compare nodes.

To do this, we adopt a serialization approach similar to what is used in  ["297. Serialize and Deserialize Binary Tree"](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/). Let  serial(x)  represent the serialized structure of node  x. We define it as follows:

-   If  x  is a leaf node (i.e., has no children), then  serial(x)  is an empty string  `""`. For instance, in Example 1, the three leaf nodes  `b`,  `a`, and  `a`  all serialize to  `""`.
    
-   If  x  has children  y1​,y2​,…,yk​, then:
    
    serial(x)=y1​(serial(y1​))y2​(serial(y2​))⋯yk​(serial(yk​))
    
    In words, we recursively serialize each child, attach its folder name in front of its serialization, and wrap its structure in parentheses. The result is a string representing the structure of  x's subtree.
    
    However, this naive approach can be order-sensitive. If  x1​  and  x2​  have the same children but in different orders, their serializations will differ, even though their structures are equivalent. To handle this, we sort the serialized representations of children before concatenating. This ensures consistent serialization for equivalent subtrees.
    
    For example, in Example 4, both child nodes a and b under the root serialize to  `"x(y())z()"`.
    

After a single post-order traversal of the tree, we can record all serializations in a hash map, where the key is the serialization and the value is its frequency.

**Step 3: Collect Unique Paths**

We now perform another DFS traversal from the root. We maintain a list path that tracks the current folder path. At each node:

-   If the node’s serialization appears more than once in the map, it is a duplicate and should be skipped.
-   Otherwise, the path to this node is added to the final answer, and we recursively traverse its children.
