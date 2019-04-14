function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    // We want to know what is the max number we get if we add 2 numbers (k numbers) together

    // First we need to intialize the counters for sum and max at 0
    let sum = 0;
    let max = 0;
    // Then we need to find consequtive numbers up to k to initialize out max value 
    for(let i = 0; i < k; i++) {
        sum += inputArray[i];
    }

    max = sum;
    // Then we start off at k because we are already there and minus that value and add another one 
    for(let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i - k];
        sum += inputArray[i];
        // Then we do a check to see if we want to reset it and then go throught the whole array 
        if(sum > max) {
            max = sum;
        }
    }
    // Finally we return the max
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));