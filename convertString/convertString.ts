function convertString(s: string, t: string): boolean {
    // We are taking in a string and another string, we need to find out if we remove some letters if we can get the second word
    // We are creating an array of characters based on the total available letters. We are keeping track of an index value and we are keeping track of a string. We then iterate through that array of characters and if it happens to match the letter that we are currently on in our answer string t , we go ahead and concat that character onto it add one , and if at any point our word ever equal our t were going to return true , else we return false
    let word = '';
    let tIndex = 0;
    const sChars: string[] = s.split('');
    
    for(let i = 0; i < s.length; i++ ){
        if(s[i] === t[tIndex]) {
            word = word.concat(s[i]);
            tIndex++;
            if(word === t) {
                return true;
            }
        }
    }
    // Finally if we dont have the characters we need we return false
    return false; 
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
