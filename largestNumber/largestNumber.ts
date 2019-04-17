function largestNumber(n: number): number {
    // We are taking in a single digit and we want to print out the largest number that can come out of that many digits

    // SOLUTION ONE
    // First we need to create an empty string , then we iterate through n digits array and concat 9 on every interation , and finally we need to parse int and return it
    // let word = '';
    // for(let i = 0; i < n; i++) {
    //     word = word.concat('9');
    // }
    // return parseInt(word);

    // SOLUTION TWO
    let word = '9'.repeat(n);
    return parseInt(word);
}

console.log(largestNumber(2));