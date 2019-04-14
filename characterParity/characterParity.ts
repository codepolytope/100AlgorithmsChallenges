function characterParity(symbol: string): string {
    // We are taking in a single charcter which maybe be a stringified number or it may be an actual character. If its a stringified number we want to return if its even or odd and if it is a character we want to return not a digit. 

    // First we need to initialize a result variable which is a parsed int of our symbol param
    const result = parseInt(symbol);
    // Then we can do a double ternary to chech if its not a number when we parse the symbol then we return not a digit , else we do a second ternary to see if its even or odd and return it .

    return isNaN(result) ? 'not a digit' : result % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
