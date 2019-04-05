function adjacentElementsProduct(inputArray: number[]): number {
    // We are going to take in an array of intigers and we want to find the largest product for adjacent any elements
    // First we init our largest product variable to first and second indexes of the array so we are guaranteed to at least have that
    let largestProduct = inputArray[0] * inputArray[1];
    // Then we interate through a all inpur array values skipping one at start and end 
    for(let i = 1; i < inputArray.length - 1; i++) {
        // We then create a new product to compare it with our existing largest product
        const product = inputArray[i] * inputArray[i + 1];
        // Then we use a ternary to determine if the largest product is less then our product, return that, if its not less then return largest product back to it self
        largestProduct = largestProduct < product ? product : largestProduct;
    }
    // Finaly we return the largest product variable value
    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));