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

function same(a, b) {
    if (a.length !== b.length) {
        return false
    }

    const frequency = {}

    for (const num of a) {
        const numSquared = num * num
        frequency[numSquared] = (frequency[numSquared] || 0) + 1
    }

    for (const num of b) {
        if (frequency[num]) {
            frequency[num]--
        } else {
            return false
        }
    }

    return true
}

// TEST CASES:
a = [], b = []
console.log(same(a, b) === true ? 'Pass' : 'Fail')
a = [1], b = []
console.log(same(a, b) === false ? 'Pass' : 'Fail')
a = [2], b = [4]
console.log(same(a, b) === true ? 'Pass' : 'Fail')

a = [1, 2, 3], b = [1, 4, 9]
console.log(same(a, b) === true ? 'Pass' : 'Fail')
a = [1, 2, 3], b = [4, 9, 1]
console.log(same(a, b) === true ? 'Pass' : 'Fail')
a = [1, 2, 3], b = [9, 4, 2]
console.log(same(a, b) === false ? 'Pass' : 'Fail')

a = [1, 2, 2, 3], b = [4, 1, 9, 4]
console.log(same(a, b) === true ? 'Pass' : 'Fail')
a = [1, 2, 2, 3], b = [4, 1, 9, 2]
console.log(same(a, b) === false ? 'Pass' : 'Fail')

console.log(same([1, 2, 3, 4, 2], [1, 4, 9, 16, 1]) === false ? 'Pass' : 'Fail')
console.log(same([1, 2, 2, 3, 4], [1, 4, 9, 16, 25]) === false ? 'Pass' : 'Fail')