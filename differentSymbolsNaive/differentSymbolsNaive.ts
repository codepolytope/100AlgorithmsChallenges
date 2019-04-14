function differentSymbolsNaive(s: string): number {
    // We need to figure out how many different characters are in a string we are passing in
    // SOLUTION ONE
    // // First We take our string , turn it into a character array and then we add to the letterArray . We can create a constant letterArray and in there we just push values to it that didnt exist. 
    // const uniqueChars: string[] = [];
    // const inpuChars: string[] = s.split('');

    // inpuChars.forEach((char) => {
    //     if(!uniqueChars.includes(char)) {
    //         uniqueChars.push(char)
    //     }
    // });
    
    // // Finally we return the length of the character array
    // return uniqueChars.length;

    // SOLUTION TWO

    // const uniqueChars = {};
    // const inpuChars = s.split('');
    // inpuChars.forEach((char) => {
    //     uniqueChars[char] = 1;
    // })
    // return Object.keys(uniqueChars).length;


    // SOLUTION THREE
    const uniqueChars = new Set();
    const inputChars = s.split('');

    inputChars.forEach((char) => {
        uniqueChars.add(char);
    })
    
    return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));
