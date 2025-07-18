### Approach: Priority Queue

#### Intuition

The requirement in the question is equivalent to:

-   Choose a positive integer  k  in the interval  [n,2n].
    
-   The first  k  numbers of the array  nums  belong to the first part, but only  n  of them can be retained.
    
-   The last  3n−k  numbers of the array  nums  belong to the second part, but again, only  n  of them can be retained.
    
-   The goal is to minimize the difference between the sum of the first part and the sum of the second part.
    

The reason  k∈[n,2n]  is required is that we must ensure each part has at least  n  elements.

Since we need to minimize the difference between the sum of the first part and the sum of the second part, we want the first part to be as small as possible and the second part to be as large as possible. In other words:

> We need to select the  n  smallest elements from the first part and the  n  largest elements from the second part.

To do this, we can use a priority queue for selection. For the first part, we start by placing  nums[0..n−1]  into a max heap. Then, for each index  i  in  [n,2n), we insert  nums[i]  into the max heap and remove the largest element (i.e., the heap top). The remaining elements in the heap will be the  n  smallest elements in  nums[0..i].

For the second part, we perform a similar process in reverse. We begin by placing  nums[2n..3n−1]  into a min heap, and then iterate through indices  i  in reverse from  2n−1  down to  n. At each step, we insert  nums[i]  into the heap and remove the smallest element. The heap will then contain the  n  largest elements in  nums[i..3n−1].

While modifying the heaps, we maintain the sum of the elements currently in each heap. When an element is inserted, we add its value; when the top element is removed, we subtract its value. This lets us compute  part1​[n−1],…,part1​[2n−1]  and  part2​[n],…,part2​[2n], where:

-   part1​[i]  is the sum of the  n  smallest elements in  nums[0..i],
    
-   part2​[i]  is the sum of the  n  largest elements in  nums[i..3n−1].
    

The final answer is the minimum value of all expressions  part1​[i]−part2​[i+1]  where  i∈[n−1,2n).

We can simplify the indexing by subtracting  n−1  from all subscripts in  part1​  and  n  from all subscripts in  part2​, so that both have index ranges in  [0,n). This means we only need two arrays of length  n+1  to store these values.

Further, while computing  part2​, we don’t actually need an array; we can just use a single variable. At index  i, the relevant value from  part1​  is  part1​[i−n], so we can compute the answer as  part1​[i−n]−part2​  during the iteration.
