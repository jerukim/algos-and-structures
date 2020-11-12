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

}

// TEST CASES:
console.log(countUniqueValues([]) === 0)
console.log(countUniqueValues([1]) === 1)
console.log(countUniqueValues([1, 1]) === 1)
console.log(countUniqueValues([1, 2]) === 2)
console.log(countUniqueValues([-1, 1, 2]) === 3)
console.log(countUniqueValues([-4, -4, -1, 0, 1, 2, 5, 5, 7]) === 7)