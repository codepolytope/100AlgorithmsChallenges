function evenDigitsOnly(n: number): boolean {
    // We are taking in a number and we want to check if every single digit is even
    // First we need to convert our number into a string and make a character array out of it . Then we return a boolean that checks every element in the array , parses it as an Intiger , divides it by 2 and checks if its even . If it is , we return true and if not we return false.
    const digits = n.toString().split('');
    // Every is an array function that says: return a true or false value if All of these items pass (everysingle item passes)
    return digits.every((digit) => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));