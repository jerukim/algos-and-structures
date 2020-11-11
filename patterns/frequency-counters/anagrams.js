/* PROBLEM:
given two strings, write a function to determine if the second string is an anagram of the first.
an anagram is a word, phrase or name formed by rearranging the letters of another
example: 'cinema' can be formed from 'iceman'
*/

/* INPUT: two strings (a, b)
do we need to worry about phrases with spaces or will it always be a single word
do we need to worry about special characters?
how should we handle capital and lower case letters? seperatly or the same?
*/
// OUTPUT: boolean

function validAnagram(a, b) {
}

// TEST CASES
console.log(validAnagram('a', 'a') === true ? 'Pass' : 'Fail')
console.log(validAnagram('a', 'b') === false ? 'Pass' : 'Fail')
console.log(validAnagram('ab', 'a') === false ? 'Pass' : 'Fail')
console.log(validAnagram('', '') === true ? 'Pass' : 'Fail')

console.log(validAnagram('hello', 'olelh') === true ? 'Pass' : 'Fail')
console.log(validAnagram('hello', 'olclh') === false ? 'Pass' : 'Fail')
console.log(validAnagram('tar', 'rat') === true ? 'Pass' : 'Fail')
console.log(validAnagram('tar', 'car') === false ? 'Pass' : 'Fail')