/* PROBLEM:
Given a sorted array of integers, write a function called binarySearch, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/

// INPUT: sorted array, number to look for (array, num)
// OUTPUT: index of num in array

/* EDGE CASES:
1. an empty array
2. num that is not in array > return -1
*/

function binarySearchIterative(array, value) {
    let min = 0
    let max = array.length - 1

    while (max >= min) {
        const center = Math.floor((max + min) / 2)

        if (array[center] === value) return center
        else if (array[center] < value) min = center + 1
        else if (array[center] > value) max = center - 1
    }

    return -1
}

// TEST CASES:
console.log(binarySearchIterative([], 1) === -1)
console.log(binarySearchIterative([1], 1) === 0)
console.log(binarySearchIterative([1, 2, 3], 1) === 0)
console.log(binarySearchIterative([1, 2, 3], 2) === 1)
console.log(binarySearchIterative([1, 2, 3, 4, 5, 6], 4) === 3)
console.log(binarySearchIterative([1, 2, 3, 4, 5, 6], 6) === 5)
console.log(binarySearchIterative([1, 2, 3, 4, 5, 6], 11) === -1)