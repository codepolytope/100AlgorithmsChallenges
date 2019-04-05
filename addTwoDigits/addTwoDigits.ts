function addTwoDigits(n: any): number {
    //We want to take any two digit number and return the sum of its digits
    // First we take in a number and convert it to an array of characters after we convertred it to a string
    const nums = n.toString().split('');
    // Then interating through that array and parsing the integers out and adding them together

    // return nums.reduce((a: string, b: string) => {
    //     return parseInt(a) + parseInt(b);
    // });


    // Solution Two without the reduce method and with array index , uncomment only the above for solution one
    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));