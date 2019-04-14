function avoidObstacles(inputArray: number[]): number {
    // We are given an array of intigers, and we want to know how many places we can touch to make clean jumps. What defines a clean jump is the how many obstacles we can avoid and our numbers being the obstacles .

    // We sort the array to get it in numeric order, then we create a value that we will iterate up to. Then if every element in the arra is not equal (when we modulo by the current index value) we found the shortest jump and now we know we can return i for that value
    // First we need to sort our array to know how we can jump.
    inputArray = inputArray.sort((a, b) => a-b);
    // Then we need to figure out what the largest array value is and then add one to it becuase we want to numer to be jumpable
    const largestArrayVal = inputArray[inputArray.length - 1];
    // We need the largest value to iterate through our array . We start at one and we go all the way up to what our largest value is plus one.
    for(let i = 1; i < largestArrayVal + 1; i++){
        if(inputArray.every((element) => element % i !== 0)) {
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));