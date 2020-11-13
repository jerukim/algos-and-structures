/* PROBLEM:
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a postive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

time - o(n)
space - o(1)
*/

// INPUT: array of positive integers, positive integer (arr, minSum)
// OUTPUT: minimal length that adds up to minsum

/* EDGE CASES:
1. empty array
*/

function minSubArrayLen(arr, minSum) {
    if (arr.length < 2) {
        return arr[0] === minSum ? 1 : 0
    }

    let i = 0, j = 0
    let minLength = arr.length + 1
    let subTotal = arr[i]

    while (j < arr.length) {

        if (subTotal >= minSum) {
            const currLength = j - i + 1
            if (currLength < minLength) {
                minLength = currLength
            }
        }

        if (subTotal < minSum) {
            j++
            subTotal += arr[j]
        } else if (subTotal >= minSum) {
            subTotal -= arr[i]
            i++
        }

    }

    return minLength > arr.length ? 0 : minLength
}

// TEST CASES:
console.log(minSubArrayLen([], 4) === 0)
console.log(minSubArrayLen([4], 4) === 1)
console.log(minSubArrayLen([4], 5) === 0)
console.log(minSubArrayLen([10, 2, 3], 6) === 1)
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2)
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9) === 2)
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1)
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3)
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5)
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) === 2)
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0)