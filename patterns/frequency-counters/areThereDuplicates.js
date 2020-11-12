/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. Solve this using the frequency counter pattern.

Time - O(N)
Space - O(N)

Bonus:
Time - O(N log N)
Space - O(1)
*/

function areThereDuplicates(...args) {
    if (args.length < 2) return false
    // create frequency variable
    const frequency = {}

    // loop over each element in args
    for (const element of args) {
        // iterate counter for element
        frequency[element] = (frequency[element] || 0) + 1

        if (frequency[element] > 1) return true
    }

    return false
}

console.log(areThereDuplicates(1) === false)
console.log(areThereDuplicates(1, 1) === true)
console.log(areThereDuplicates(1, 2, 3) === false)
console.log(areThereDuplicates(1, 2, 2) === true)
console.log(areThereDuplicates('a', 'b', 'c', 'a') === true)
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'e', 'b', 'f', 'g', 'h') === true)