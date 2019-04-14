function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    // We want to get the maximum absolute difference between two adjacent elements 

    // First we create a variable that will be initalized to the absolute difference of the 0 index and the 1 index and then we will iterate through a for loop that will be offset by 1. From there we will check for the absolute difference between the next two values and if they are geater then our current max difference we will set it , and finally return the max difference.
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for(let i = 0; i < inputArray.length; i++) {
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        // use a ternary to check
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
        // or we can do same thing with a if statement
        // if(absoluteDiff > maxDiff) {
        //     maxDiff = absoluteDiff
        // }
    }
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));