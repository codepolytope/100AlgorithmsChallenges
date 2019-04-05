function arrayConversion(inputArray: number[]): number {
    // We have an array of numbers and what we want to happen is on the odd numbers we want to add the next index values together and on the evens we want to multiply those values until we get a single array value

    // We create a boolean value that lets us know if we are on an even or odd number, and then use a while loop to keep track of that iteration and call a separate function sumProduct()
    let isOdd = true;

    while(inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd;
    }

    return inputArray[0];
}
function sumProduct(nums: number[], isOdd: boolean): number[] {
    const sumProducts: number[] = [];
    if(isOdd) {
        for(let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] + nums[i + 1]);
        }
    } else {
        for(let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] * nums[i + 1]);
        }
    }

    return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
