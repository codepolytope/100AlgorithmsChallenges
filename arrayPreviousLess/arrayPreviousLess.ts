function arrayPreviousLess(items: number[]): number[] {
    // We have to insert a negative 1 when there isnt a index value thats less then its previous value from the left

    // First we need to create a two dimensional array. Then iterate through twice and when we find an item that was greater then previous item we unshift that item into it, if that never existed and we hit the end of that second iteration we add a negative 1. 
    const lessThanList: number[] = [];

    // We create a for loop and decriment backwards
    for(let i = items.length - 1; i >= 0 ; i--){
        // This will allow us to iterate from the postion that were in, in the array, so that we dont do duplicate checks and we are only checking the previous values
        for(let j = i; j >= 0; j--) {
            // Checking to see if the current item is less then the previous one
            if(items[i] > items[j]) {
                lessThanList.unshift(items[j]);
                break;
            } 
            // else if, means that in our case there isnt a previous value, we unshift a -1
            else if (j === 0) {
                lessThanList.unshift(-1);
            }
        }
    } 
    // Finally we return the array of the less then list
    return lessThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));