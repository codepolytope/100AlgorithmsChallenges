function isCaseInsensitivePalindrome(inputString: string): boolean {
    // We need to figure out if the string thats passed in is the same forwards as it is backward ignoring the case differences

    // First we need to set our original string toLowerCase and the reversed string with the split/reverse/join methods
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.split('').reverse().join('');
    // Then we make a comparison and return true only for the ones that pass the palindrome test
    return originalLowerCase === reversedWord;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));