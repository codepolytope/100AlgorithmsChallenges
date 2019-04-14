function composeRanges(nums: number[]): string[] {
    // We will be taking in an array of numbers and we want to figure out how can we travel between. We will be outputting a string showcasing pairs of number iterations with an arrow in between 
    // First we need to create and array and initilize it with an object in it that has a start point and an end point, then we iterate through the values and we will find out if the values can increment by 1. We need to make sure there is a value in the array so we do an intial check.
    if(nums.length < 1) {
        return [];
    }
    const ranges: any[] = [{start: nums[0], end: nums[0]}];
    // Then we increment out end point untill it doenst work anymore
    for(let i = 1; i < nums.length; i++) {
        if(ranges[ranges.length - 1].end + 1 === nums[i]) {
            ranges[ranges.length - 1].end = nums[i];
        } else {
            ranges.push({start: nums[i], end: nums[i]});
        }
    }
    // Then we are going through and applying the transformation that we want
    for(let i = 0; i < ranges.length; i++) {
        if(ranges[i].start !== ranges[i].end) {
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        } else {
            ranges[i] = ranges[i].start.toString();
        }
    }
    // Finally we return the ranges of numbers as an a array
    return ranges;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));