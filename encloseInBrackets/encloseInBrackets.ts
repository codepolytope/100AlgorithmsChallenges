function encloseInBrackets(inputString: string): string {
    // We are given a string in a function and we need to enclose it in brackets
    // All we need to do is use es6 backticks and string interpolation
    return `(${inputString})`;
}

console.log(encloseInBrackets('abacaba'));