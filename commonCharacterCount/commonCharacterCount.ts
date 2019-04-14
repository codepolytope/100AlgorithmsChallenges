function commonCharacterCount(s1: string, s2: string): number {
    // We are taking in two strings and were trying to find out what charachters they have in common and return the amount as a number
    // First we need to split up the strings into an array and iterate through them (after we create and object for both) and we will get a list of chars as an object and we will check those properties and return the lesser of the two
    const s1Chars: string[] = s1.split('');
    const s2Chars: string[] = s2.split('');
    const s1CharCount = getCharList(s1Chars);
    const s2CharCount = getCharList(s2Chars);
    let total = 0;
    // Then we iterate through one of the objects, we dont have to iterate through both because if its not in one its not in the other
    for(const prop in s1CharCount) {
        if(s2CharCount.hasOwnProperty(prop)){
            // Now we want to return the smaller value
            if(s2CharCount[prop] < s1CharCount[prop]) {
                total += s2CharCount[prop]
            } else {
                total += s1CharCount[prop];
            }
        }
    }
    // Finally we return the total of the common characters in both strings
    return total;
}
    // We write a function that will iterate through the array and return an object that has a count of the keys which are the letters
function getCharList(chars: string[]): object {
    const wordCount = {};   
    for(let i = 0; i < chars.length; i++){
        if(wordCount.hasOwnProperty(chars[i])) {
            wordCount[chars[i]]++;
        } else {
            wordCount[chars[i]] = 1;
        }
    }
    return wordCount;
}


console.log(commonCharacterCount('aabcc', 'adcaa'));