function areSimilar(a: number[], b: number[]): boolean {
    // We are given two arrays and if we swap value from one to another, would they be the same? that would make them similar
    // First if we see that the values are exactly the same in both arrays we return true because it will always pass
   // Then we create a couple of arrays C and D , we then iterate through the first array A and then we check if A[i] is not equal to the B[i], meaning those values are not equal, go ahead push A[i]to array C and B[i] to array D. Then we will reverse the value in the D array and then we do a check whether we only pushed two values here. After we reverse D, when we make C and D a string we check if they match.
   const c: number[] = [];
   let d: number[] = [];

    if(a.toString() === b.toString()) {
        return true;
    }

    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i])
        }
    } 
  
    d = d.reverse();

    if(c.length === 2 && (c.toString() === d.toString())) {
        return true;
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
