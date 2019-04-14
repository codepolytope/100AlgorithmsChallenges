function chunkyMonkey(arr: any[], size: number): any[][] {
    // We are taking two things, one : an array of values and two: a number by which we need to chunk the array to make a double nested array and if  its not enough we put whater is left
    // First we need to create and array that stores some values and while we still have values we need to slice them out of there and add them to a new array
    const nested = [];
    // Then we initialize a count variable
    let count = 0;
    // and while count is less then the array, continue to iterate through it and push the values into it according to the size number
    while(count < arr.length) {
        nested.push(arr.slice(count, count += size));
    }
    // Finally we return the nested array
    return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));