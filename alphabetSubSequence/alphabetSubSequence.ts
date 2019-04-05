function alphabetSubsequence(s: string): boolean {
    // We need to return a boolean about whether or not the sequence of it went as you expect in aplhabetical ondragover, if there are duplicates it will fail and if it doest go in order , not nessesarily abc but order like a d f h  it will fail too
    // First we need to split the string into an array of chars and store their charCode value which is the ascii value to an array, then we compare the size to a set which only has unique values in it . If they are not the same size then we have duplicate letters and we can return false, and from there we can sort it to check if the values are in order and if any of them are less then the previous one we can return false. 
    const chars: string[] = s.split('');
    const charValues: number[] = [];

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    });

    if(new Set(charValues).size !== charValues.length) {
        return false;
    }
    for(let i = 0; i < charValues.length - 1; i++) {
        if(charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
