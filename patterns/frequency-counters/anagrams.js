/* PROBLEM:
given two strings, write a function to determine if the second string is an anagram of the first.
an anagram is a word, phrase or name formed by rearranging the letters of another
example: 'cinema' can be formed from 'iceman'
*/

// INPUT: two strings (a, b)
// OUTPUT: boolean

/* EDGE CASES:
strings with different lengths > return false
phrase with spaces > ignore spaces
special characters and numbers > ignore them completely
capital and lowercase letters > capital cases should count as lowercase
*/

function validAnagram(a, b) {
    // return false if string lenghts are not equal

    // create a frequency counter object

    // loop over characters of a
    // check if that the character is alphabetical
    // lowercase the character
    // iterate counter in frequency object for that letter

    // loop over characters of b
    // check if that the character is alphabetical
    // lowercase the character
    // if character exists in frequency
    // decrement counter in frequency object for that letter
    // else return false

    // loop over values of frequency object
    // if value is not 0, return false

    // return true

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