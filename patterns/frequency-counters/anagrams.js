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
    if (a.length !== b.length) {
        return false
    }

    // create a frequency counter object
    const frequency = {}

    // loop over characters of a
    for (let char of a) {
        // check if that the character is alphabetical
        if (isAlphabetical(char)) {
            // lowercase the character
            char = char.toLowerCase()
            // iterate counter in frequency object for that letter
            frequency[char] = (frequency[char] || 0) + 1
        }
    }

    // loop over characters of b
    for (let char of b) {
        // check if that the character is alphabetical
        if (isAlphabetical(char)) {
            // lowercase the character
            char = char.toLowerCase()
            // if character exists in frequency
            if (frequency[char]) {
                // decrement counter in frequency object for that letter
                frequency[char]--
            } else {
                // else return false
                return false
            }

        }
    }

    // loop over values of frequency object
    for (const characterCount of Object.values(frequency)) {
        // if value is not 0, return false
        if (characterCount !== 0) {
            return false
        }
    }

    return true
}

function isAlphabetical(char) {
    const charCode = char.charCodeAt(0)
    const isCapitalLetter = charCode > 64 && charCode < 91
    const isLowercaseLetter = charCode > 96 && charCode < 123

    return isCapitalLetter || isLowercaseLetter
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
console.log(validAnagram('asdfasdfwerwef', 'aspfmsdfcerwsf') === false ? 'Pass' : 'Fail')