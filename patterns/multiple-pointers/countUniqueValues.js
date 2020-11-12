/* PROBLEM:
Implement a function called countUniqueValues which accepts a sorted array, and counts the unqiue values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

// INPUT: sorted array
// OUTPUT: integer of unique numbers in array

/* EDGE CASES:
empty array
*/

/* OPTIMIZATION:
we can improve space complexity by using the array and 'i' to keep track of unique values by:
iterate i when array[j] is new number and set array[i] to that number
*/

function countUniqueValues(array) {
    if (array.length === 0) return 0

    let i = 0

    for (let j = 1; j < array.length; j++) {

        if (array[i] !== array[j]) {
            i++
            array[i] = array[j]
        }

    }

    return i + 1
}

// TEST CASES:
console.log(countUniqueValues([]) === 0)
console.log(countUniqueValues([1]) === 1)
console.log(countUniqueValues([1, 1]) === 1)
console.log(countUniqueValues([1, 2]) === 2)
console.log(countUniqueValues([-1, 1, 2]) === 3)
console.log(countUniqueValues([-4, -4, -1, 0, 1, 2, 5, 5, 7]) === 7)