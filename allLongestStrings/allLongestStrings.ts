function allLongestStrings(inputArray: string[]): string[] {
    // We want to find largest strings in an array of strings and return an array of those values
    // Fist we need to find out what the longest length of the largest string is in our array
    let longestLength = 0;
    const longestWords = [];

    inputArray.forEach((word: string) => {
        // Now we want to compare the length of the word to our longest length
        longestLength = longestLength < word.length ? word.length : longestLength;
    });
    // Then we push the largest values we can find into our new longest word array
    inputArray.forEach((word: string) => {
        if(word.length === longestLength) {
            longestWords.push(word);
        }
    })

    // Finally we return the longest words array
    return  longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));