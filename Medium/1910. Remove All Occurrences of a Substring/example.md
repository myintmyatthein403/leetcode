### Example 1: Text Cleaning in Data Processing
In data processing, you might need to clean up text data by removing unwanted substrings. For instance, if you have a dataset of user comments and you want to remove all occurrences of a specific spam phrase, you can use this approach to clean the comments.

**Scenario**: Removing spam phrases from user comments.
- **Input**: `s = "This is a great product! Buy now! Buy now!"`, `part = "Buy now!"`
- **Output**: `"This is a great product! "`

### Example 2: Simplifying File Paths
In file system operations, you might need to simplify file paths by removing redundant parts. For example, in a Unix-like file system, you might want to remove all occurrences of `./` from a path to simplify it.

**Scenario**: Simplifying file paths.
- **Input**: `s = "/home/user/./documents/./files"`, `part = "./"`
- **Output**: `"/home/user/documents/files"`
