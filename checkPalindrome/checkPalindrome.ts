function checkPalindrome(inputString: string): boolean {
    // We need to find out if a string is a palindrome which is a string which is the same forward as it is backwards
    const originalWord = inputString.toLowerCase();
    const reversedWord = originalWord.split('').reverse().join('');

    return originalWord === reversedWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
