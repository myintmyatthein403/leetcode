class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        i, j = 0, 0
        result = []

        while i < len(nums1) and j < len(nums2):
            if nums1[i][0] == nums2[j][0]:
                # IDs match, sum the values
                result.append([nums1[i][0], nums1[i][1] + nums2[j][1]])
                i += 1
                j += 1
            elif nums1[i][0] < nums2[j][0]:
                # nums1 ID is smaller, add it to result
                result.append(nums1[i])
                i += 1
            else:
                # nums2 ID is smaller, add it to result
                result.append(nums2[j])
                j += 1

        # Add remaining elements from nums1
        while i < len(nums1):
            result.append(nums1[i])
            i += 1

        # Add remaining elements from nums2
        while j < len(nums2):
            result.append(nums2[j])
            j += 1

        return result

# Example Test Cases
print(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]]))
# Output: [[1,6],[2,3],[3,2],[4,6]]

print(mergeArrays([[2,4],[3,6],[5,5]], [[1,3],[4,3]]))
# Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]

