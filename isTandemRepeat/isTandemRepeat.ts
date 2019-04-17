function isTandemRepeat(inputString: string): boolean {
    //   We are trying to find out if we cut our inputString down the middle and concat it back together, will it make our original word or not
    // First we would need to get the length of the string and slice off the first and second halfs and compare them
    const wordLength = inputString.length;
    // We check if the amount of letters is event, if it is we continue the process, if its not we know its not going to make our original word back so we return false.
    if(wordLength % 2 === 0) {
        const firstHalf = inputString.slice(0, wordLength / 2);
        const secondHalf = inputString.slice(wordLength / 2, wordLength);
        // Finally we return true only if the first half matches the second exactly
        return firstHalf === secondHalf;
    }
    return false;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
