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

// EXAMPLE CASES:
// a = [], b = [] // true
// a = [2], b = [4] // true

// a = [1, 2, 3], b = [1, 4, 9] // true
// a = [1, 2, 3], b = [4, 9, 1] // true
// a = [1, 2, 3], b = [9, 4, 2] // false

// a = [1, 2, 2, 3], b = [4, 1, 9, 4] // true
a = [1, 2, 2, 3], b = [4, 1, 9, 2] // false

function same(a, b) {
    const frequencyA = {}
    const frequencyB = {}

    for (const num of a) {
        const numSquared = num * num
        frequencyA[numSquared] = frequencyA[numSquared]++ || 1
    }

    for (const num of b) {
        if (frequencyA[num]) {
            frequencyB[num] = frequencyB[num]++ || 1
        } else {
            return false
        }
    }

    for (const num of Object.keys(frequencyA)) {
        if (frequencyA[num] !== frequencyB[num]) {
            return false
        }
    }

    return true
}

console.log(same(a, b))