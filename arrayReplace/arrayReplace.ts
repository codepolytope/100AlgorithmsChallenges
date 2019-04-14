function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    // We need to iterate through the array and we need to see if that value is the element to replace , if it is we will swap it out with the substitution element 

    // First we need to create a forEach loop to iterate through our array
    inputArray.forEach((element: number, index: number) => {
        // Then do a check on the index to see if we need to replace that element , and if we do then we set it to that replaced element
        if(element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });
    // Finally we return the modified version of out input array
    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));