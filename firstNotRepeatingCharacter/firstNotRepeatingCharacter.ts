function firstNotRepeatingCharacter(s: string): string {
    // We are getting a string and we want to return the first character thats not repeating. If there is now such character , we return '_'. We also need to use O(1) additional memory, which means we cant use nested for loops.
    const chars: string[] = s.split('');
    let duplicates = {};
    let answer = '_';
    let indexAnswer = Number.MAX_SAFE_INTEGER;

    chars.forEach((element, index) => {
        if(!duplicates.hasOwnProperty(element)) {
            duplicates[element] = {
                count: 1,
                index
            };
        } else {
            duplicates[element].count++;
            duplicates[element].index = index;
        }
    });
    
    for(const key in duplicates) {
        if(duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
            answer = key;
            indexAnswer = duplicates[key].index;
        }
    }

    return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
