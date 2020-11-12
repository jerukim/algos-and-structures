/* PROBLEM:
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
*/

// INPUT: array of intergers and a number n (numbers, n)
// OUTPUT: largest sum (Int)

/* EDGE CASES:
1. n larger than numbers array length > return null
*/

function maxSubarraySum() {

}

// TEST CASES:
console.log(maxSubarraySum([], 3) === null)
console.log(maxSubarraySum([1], 1) === 1)
console.log(maxSubarraySum([1, 2, 3], 1) === 3)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17)
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13)