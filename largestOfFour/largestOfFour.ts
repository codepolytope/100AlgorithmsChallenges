function largestOfFour(nums: number[][]): number[] {
    //   We have four nested arrays (double nested array but there are 4 arrays of numbers in them), and we want to return the largest value for each array in a new array
    // First we need to init a empty array variable highestNumbers
    const highestNumbers: number[] = [];
    // Then we need to iterate through both arrays. We have a variable that gets reset for everytime we go to a new array to 0. And then each iteration we are looking to see if our numbers is in fact larger then our current one, if it is set it, if its not just set it toit own value and when its done going all the way through we push it into the array and do it again. 
    for(let numberGroup of nums) {
        let largest = 0;
        for(let number of numberGroup) {
            largest = largest < number ? number : largest;
        }
        highestNumbers.push(largest);
    } 
    // Finally we return the highestNumbers array with the numbers in it
    return highestNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));