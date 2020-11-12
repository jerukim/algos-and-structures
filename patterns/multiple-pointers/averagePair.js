function averagePair(arr, avg) {
    // if array length is less than 2 return false
    if (arr.length < 2) return false

    // create two pointers at beginning and end of array
    let left = 0, right = arr.length - 1

    // while left < right
    while (left < right) {
        // create a variable for current average: (arr[left] + arr[right]) / 2
        const currentAvg = (arr[left] + arr[right]) / 2
        // if current average is equal to avg, return true
        if (currentAvg === avg) return true
        // if current average is greater than avg, decrement right
        else if (currentAvg > avg) right -= 1
        // if current average is less than avg, increment left
        else if (currentAvg < avg) left += 1
    }
    // return false if no pair was found
    return false
}