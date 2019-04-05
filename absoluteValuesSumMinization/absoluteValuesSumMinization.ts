function absoluteValuesSumMinimization(a: number[]): number {
    // return the median(middle) value in the array and if its and uneven array, return the left most value
    
    // Check if array is even by deviding by 2 with remainder 0
    const isEven = a.length % 2 === 0;

    // Then return only the middle index or if the array is odd , the left most index value
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];

}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));