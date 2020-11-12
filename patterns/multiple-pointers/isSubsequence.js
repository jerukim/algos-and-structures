function isSubsequence(sub, str) {
    // create two pointers starting at 0
    let i = 0, j = 0

    // while one pointer is less than length of sub or another pointer is less than length of str
    while (i < sub.length || j < str.length) {
        // if sub[i] is equal to str[j], increment both
        if (sub[i] === str[j]) {
            i++
            j++
        }
        // if sub[i] is not equal to str[j], increment j
        else {
            j++
        }
    }

    return i === sub.length
}