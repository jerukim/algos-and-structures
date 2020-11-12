/*
Write a function called sameFrequency. Given two positive integers, find out if the two numers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)
*/

function sameFrequency(num1, num2) {
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()

    if (strNum1.length !== strNum2.length) return false

    const frequency = {}

    for (const num of strNum1) {
        frequency[num] = (frequency[num] || 0) + 1
    }

    for (const num of strNum2) {
        frequency[num] = (frequency[num] || 0) - 1
    }

    for (const num in frequency) {
        if (frequency[num] !== 0) return false
    }

    return true
}

console.log(sameFrequency(182, 281) === true)
console.log(sameFrequency(34, 14) === false)
console.log(sameFrequency(3589578, 5879385) === true)
console.log(sameFrequency(22, 222) === false)
console.log(sameFrequency(1114, 1144) === false)