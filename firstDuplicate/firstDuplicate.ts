function firstDuplicate(a: number[]): number {
    // We are trying to return the first duplicate value in an array and if there isnt a duplicate value, return a -1. Duplicate meaning the first occurence of the second number.
    // First we create an object that will store keys based on the values being passed in , and when we finally hit one that already exists , we are just going to return that value , we found it .
     // We have and object we are mapping to
    const firstDup = {};
    // We then check if the property exists, meaning that we already mapped a number to it
    for(let num of a){
        if(firstDup.hasOwnProperty(num)) {
            // IF we have , we just return that number because we found the first duplicate
            return num;
        }
            //  IF we havent then we add that key to it 
        firstDup[num] = num;
    }
    // And if it never hits, meaning it gets through this whole loop, we just return -1
    // Our faliure case if we didnt find anything will return -1
    return -1 ;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
