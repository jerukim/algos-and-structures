/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. Solve this using the multiple pointers pattern.

Time - O(N)
Space - O(N)

Bonus:
Time - O(N log N)
Space - O(1)
*/

function areThereDuplicates(...args) {
    // if args.length is less than 2 return false
    if (args.length < 2) return false

    // sort the args (built in sort func is n log n)
    args.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
            a = a.charCodeAt(0)
            b = b.charCodeAt(0)
        }

        return a - b
    })

    console.log(args)

    // initialize two pointers starting at 0 and 1
    let i = 0, j = 1

    // while second pointer is less than args.length
    while (j < args.length) {
        // if args[i] === args[j] return true
        if (args[i] === args[j]) return true
        // increment both pointers
        i++
        j++
    }

    return false
}

console.log(areThereDuplicates(1) === false)
console.log(areThereDuplicates(1, 1) === true)
console.log(areThereDuplicates(1, 2, 3) === false)
console.log(areThereDuplicates(1, 2, 2) === true)
console.log(areThereDuplicates(3, 1, 2, 5, 2) === true)
console.log(areThereDuplicates('a', 'b', 'c', 'a') === true)

/*
   |
a, b, c, d, e, b, f, g, h
                        |
*/