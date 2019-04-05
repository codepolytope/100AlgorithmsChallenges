function alphabeticShift(inputString: string): string {
    // We are given a string and we need to shift forward one letter of the aphabet each character

    // Solution one using the alphabet array 
    // // First we create a string array in which we store a single char from the english aphabet a to z
    // const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // // Then we create out input shifted variable by splitting the array
    // let inputShifted = inputString.split('');
    // // Then we can check that value, and if its not equal to Z we are going to get the index of that value and reset it plus one, if it is equal to Z we are just going to set it to zero index to be A
    // for(let i = 0 ; i < inputShifted.length; i++) {
    //     let index = 0;
    //     if(inputShifted[i] !== 'z') {
    //         index = alphabet.indexOf(inputShifted[i]) + 1;
    //     }        
    //     inputShifted[i] = alphabet[index];
    // }
    // // Finally we return the shifter input by joining it at every character
    // return inputShifted.join('');

    // Solution two using an alphabet object dictionary
        const alphabet: object = {
            'a': 'b', 'b': 'c', 'c': 'd',
            'd': 'e', 'e': 'f', 'f': 'g',
            'g': 'h', 'h': 'i', 'i': 'j',
            'j': 'k', 'k': 'l', 'l': 'm', 
            'm': 'n', 'n': 'o', 'o': 'p', 
            'p': 'q', 'q': 'r', 'r': 's', 
            's': 't', 't': 'u', 'u': 'v', 
            'v': 'w', 'w': 'y', 'y': 'z',
            'z': 'a' 
        };

        let inputShifted = inputString.split('');
        
        for(let i = 0; i < inputShifted.length; i++) {        
            inputShifted[i] = alphabet[inputShifted[i]];
        }
        return inputShifted.join('');


        // Solution three using the ASCII characters
        // comingsooon
}

console.log(alphabeticShift('crazy'));