function integerToStringOfFixedWidth(number: number, width: number): string {
    //   We are going to take in a number and a width, and we want to modify that number by either making it the size of the width (which could be smaller, which means we have to chop values off), or when the width is the same we return just the number , and when the width is greater we are going to prepend values of 0 to the front of it
    let stringifiedNum = number.toString();
    const numberWidth = stringifiedNum.length;
    const widthDiff = width - numberWidth;
    
    if(numberWidth < width) {
        let padStart = '';
        for(let i = 0; i < widthDiff; i++){
            padStart = padStart.concat('0');
        }
        return padStart.concat(stringifiedNum)
    }
    
    if(numberWidth < width){
        return stringifiedNum.substring(widthDiff, stringifiedNum.length);
    }

    return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
