function arrayChange(inputArray: number[]): number {
  // We are gona get an array of intigers and we are trying to find how many shifts in the array (or how many values in the array) do we have to add so that we have a stricktly increasing sequence from the input
  // First we need a count to track
  let count = 0;
  // Then we iterate over the array
  for (let i = 0; i < inputArray.length; i++) {
    // If the input array iteration is more or equal to the next iteration
    if (inputArray[i] >= inputArray[i + 1]) {
      // We make a variable to track the difference between the iterations
      const difference = inputArray[i] + 1 - inputArray[i + 1];
      // Add this difference and modify the array so that the next iteration is only up by one
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }
  // Finally we return the count of how many shifts we need to make it an increasing array
  return count;
}

console.log(arrayChange([1, 1, 1]));
