/* PROBLEM:
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
*/

// INPUT: array of intergers and a number n (numbers, n)
// OUTPUT: largest sum (Int)

/* EDGE CASES:
1. n larger than numbers array length > return null
*/

function maxSubarraySum(numbers, n) {
    if (n > numbers.length) return null

    let maxSum = 0
    let subsetSum = 0

    for (let i = 0; i < n; i++) {
        maxSum += numbers[i]
    }

    subsetSum = maxSum

    for (let i = 1; i < numbers.length - n + 1; i++) {

        subsetSum = subsetSum - numbers[i - 1] + numbers[i + n - 1]

        if (subsetSum > maxSum) {
            maxSum = subsetSum
        }
    }

    return maxSum
}

// TEST CASES:
console.log(maxSubarraySum([], 3) === null)
console.log(maxSubarraySum([1], 1) === 1)
console.log(maxSubarraySum([1, 2, 3], 1) === 3)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17)
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13)

/* n = 4, length = 7, last index to check = 3 > 7 - 4 = 3
       |
[1, 2, 5, 2, 8, 1, 5]
                |

calculate first subset total and set it as max, max = 10, subTotal = 10

start iteration from first index
subract left value from subtotal, subtotal = 9
add value at i + n - 1 to subtotal, subtotal = 17
if subtotal is greater than max, replace it, max = 17

next iteration
subtract left value from subtotal = 16
add right value to subtotal, 17

and so on
*/