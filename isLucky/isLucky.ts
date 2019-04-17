function isLucky(n: number): boolean {
    // We are taking in a number and need to find out if it is a lucky number. Lucky number when the sum of the first half of the digits is equal to the sum of the second half. 

    // First we need to convert the number to a string and get the length of that String. From there, in a separate function, we simply get the first half and we split it up into characters, then we parse those ints , then we reduce it. After we take the second half and do the same thing.
    const luckyN = n.toString();
    const half = luckyN.length / 2;
    const firstHalf = getTotal(luckyN.substring(0, half));
    const secondHalf = getTotal(luckyN.substring(half, luckyN.length));
    // Finally we compare them to see if its a luky number or not
    return firstHalf === secondHalf;
}   

function getTotal(n: string) {
    return n.split('').map((char) => parseInt(char)).reduce((num1, num2) => num1 + num2 );
}

console.log(isLucky(1230));
console.log(isLucky(239017));