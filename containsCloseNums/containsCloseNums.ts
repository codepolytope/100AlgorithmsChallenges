function containsCloseNums(nums: number[], k: number): boolean {
    // We are taking in an array of values and a number k. We need to find out if there are two values in the array where the absolute difference will be less then or equal our intiger k. Our objective is to find out if the indexes are not the same and if our values match.  
    // First In the array, the values on nums[i] and nums[j], if they match we want to find out the absolute value of i minus j to see if thats less then or equal to k.
    for( let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++) {
            if(i !== j) {
                if(nums[i] === nums[j]) {
                    if(Math.abs(i - j) <= k) {
                        return true;
                    }
                }
            }
        } 
    }
    // Or we return false if they arent less of equal to k 
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));