function findClosestPair(numbers: number[], sum: number): number {
    // We are trying to find the closest pair of values that equal our sum and return that pair. If there isnt a pair that adds up to the sum, return -1.
    // We can brute force the solution (O(N)(2) which is slow). First we need to create a distance variable to modify later and set it at -1. 
    let distance = -1;
    // Then we need to make a check that iterates through our array twice (nested) and see if its equal to our sum and our distance
    for(let i = 0; i < numbers.length; i++){
        for(j = i + 1; j < numbers.length - 1; j++) {
            const distanceSum = numbers[i] + numbers[j];
            const absDistance = Math.abs(i - j);
            if(sum === distanceSum) {
                if(distance === -1 || absDistance < distance) {
                    distance = absDistance;
                }
            }
        }
    }
    // Finally we return the distance
    return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));