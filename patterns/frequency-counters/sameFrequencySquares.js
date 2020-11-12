/*
write a function called same, which accepts two arrays.
the function should return true if every value in the array has it's corresponding values squared in the second array.
the frequency of values must be the same.
*/

/* INPUT: 2 arrays (arr1, arr2)
arr1 and arr2 must have the same length
do we know which array is going to be squared? 
are the array elements always going to be numbers? we can type check and return false
repeating numbers are possible, frequency must be tracked
*/

// OUTPUT: boolean

/* OPTIMIZATION:
we can improve space complexity by decrementing counter in frequency object and just verify that each key has a value of 0 instead of comparing values
*/

function sameFrequencySquares(a, b) {
    if (a.length !== b.length) {
        return false
    }

    const frequency = {}

    for (const num of a) {
        const numSquared = num * num
        frequency[numSquared] = (frequency[numSquared] || 0) + 1
    }

    for (const num of b) {
        frequency[num] = (frequency[num] || 0) - 1
    }

    for (const num in frequency) {
        if (frequency[num] !== 0) return false
    }

    return true
}

// TEST CASES:
console.log(sameFrequencySquares([], []) === true)
console.log(sameFrequencySquares([1], []) === false)
console.log(sameFrequencySquares([2], [4]) === true)
console.log(sameFrequencySquares([1, 2, 3], [1, 4, 9]) === true)
console.log(sameFrequencySquares([1, 2, 3], [4, 9, 1]) === true)
console.log(sameFrequencySquares([1, 2, 3], [9, 4, 2]) === false)
console.log(sameFrequencySquares([1, 2, 2, 3], [4, 1, 9, 4]) === true)
console.log(sameFrequencySquares([1, 2, 2, 3], [4, 1, 9, 2]) === false)
console.log(sameFrequencySquares([1, 2, 3, 4, 2], [1, 4, 9, 16, 1]) === false)
console.log(sameFrequencySquares([1, 2, 2, 3, 4], [1, 4, 9, 16, 25]) === false)