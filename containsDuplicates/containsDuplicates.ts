function containsDuplicates(a: number[]): boolean {
    // We taking in an array of values and we want to find out if there are any duplicate numbers in here
    // First we need to modify the input array and sort it to get each value in certain order
    a = a.sort((a,b) => a - b);
    // Then we iterate through the array we just sorted to find out if there are any cases when there are duplicates
    for(let i = 0; i < a.length; i++) {
        if(a[i] === a[i + 1]) {
            return true;
        }
    }    
    // Finally we return false for the cases that we didnt find duplicates
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
