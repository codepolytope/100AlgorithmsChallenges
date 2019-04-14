function compareIntegers(a: string, b: string): string {
    // We are taking in two integers as strings and we want to find out if a is less then b and we want to return less , if a is greater then b we want to return greater and if a is equal to be we want to return equal

    // First we want to set up a double ternary to check if the parsed a string is greated then the parsed b string , if so return greater if not and the parsed a string is less then parsed b string we return less and else (by process of elimination) if they are equal we return equal
    return parseInt(a) > parseInt(b) ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));