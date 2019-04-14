function extractEachKth(inputArray:number[], k: number): number[] {
    // We are taking in an array and we want to remove every Kth element from it
    // First we need to use filter to remove the element that we dont need after we specified index plus one because of the 0 based . 
    return inputArray.filter((element, index) => (index + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));