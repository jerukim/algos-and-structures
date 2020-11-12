/* PROBLEM:
Implement a function called countUniqueValues which accepts a sorted array, and counts the unqiue values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

// INPUT: sorted array
// OUTPUT: integer of unique numbers in array

/* EDGE CASES:
empty array
*/

function countUniqueValues(array) {
    // create a counter for unqiue values
    let uniqueValues = 0
    // create two pointers i and j starting at 0
    let i = 0, j = 0

    // run a loop while i is less than array.length
    while (i < array.length) {
        // iterate counter
        uniqueValues++

        // while array[i] === array[j], iterate j
        while (array[i] === array[j]) {
            j++
        }

        // update i to equal j
        i = j
    }
    // return counter
    return uniqueValues
}

// TEST CASES:
console.log(countUniqueValues([]) === 0)
console.log(countUniqueValues([1]) === 1)
console.log(countUniqueValues([1, 1]) === 1)
console.log(countUniqueValues([1, 2]) === 2)
console.log(countUniqueValues([-1, 1, 2]) === 3)
console.log(countUniqueValues([-4, -4, -1, 0, 1, 2, 5, 5, 7]) === 7)