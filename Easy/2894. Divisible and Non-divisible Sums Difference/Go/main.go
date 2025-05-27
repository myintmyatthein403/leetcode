func differenceOfSums(n int, m int) int {
    // Total sum from 1 to n
    totalSum := n * (n + 1) / 2

    // Number of multiples of m in [1, n]
    count := n / m

    // Sum of all numbers divisible by m
    divisibleSum := m * count * (count + 1) / 2

    // Return the difference: totalSum - 2 * divisibleSum
    return totalSum - 2 * divisibleSum
}

