function almostIncreasingSequence(sequence: number[]): boolean {
    // A number is almost increasing if the array goes from left to right and is constantly increasing or it can have one mistake, if two or more items are out of sync, meaning its not an almost increasing sequence we return false
    // First we need to create a count variable that will store how many times the numbers are out of sync
    let count = 0;
    // Now we interate through the array and see if we are going to have an issue with the number order
    for(let i = 0; i < sequence.length; i++) {
        // We check if the first value is less then next value in order and if it is add one to count
        if(sequence[i] <= sequence[i -  1]) {
            count++;
            // Then we need to check if two values back is less then that value and one value ahead is less then the one value behind, if it is that would be the second item to break the count
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
    // Finally we want return true if count is less or equal to 1
    return count <= 1; 
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 