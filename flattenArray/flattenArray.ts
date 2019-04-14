function flattenArray(arr: any[]): any[] {
    // We take in an nested array and we need to flatten it to be one array, without caring how nested it is
    // First we create an empty array
    const oneArray = [];
    flatten(arr);
    // Then we iterate through the nested array and checking if its an Array, if its not we add the value to the empty array and continue to check with recursion
    function flatten(arr: any[]) {
        arr.forEach((element) => {
            if(Array.isArray(element)) {
                flatten(element)
            } else {
                oneArray.push(element);
            }
        });
    }
    // Finally we return the filled/flat array 
    return oneArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
