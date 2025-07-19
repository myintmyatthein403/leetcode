/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  // Step 1: Sort the folder paths lexicographically
  folder.sort();

  const result = [];

  for (let path of folder) {
    // If result is empty or current path is not a sub-folder of last added folder
    if (
      result.length === 0 ||
      !path.startsWith(result[result.length - 1] + '/')
    ) {
      result.push(path);
    }
  }

  return result;
};
