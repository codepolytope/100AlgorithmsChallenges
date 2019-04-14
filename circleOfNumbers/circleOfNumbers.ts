function circleOfNumbers(n: number, firstNumber: number): number {
    // We are going to take in a set amount of numbers represented by n and we will take a first numbe to find out whats the number on the other side opposite of the first number radially 
    // First we need to create an empty array which will be the circle of numbers and a halfway point on the circle 
    const numArray = [];
    const halfWay = n / 2;

    for(let i = 0; i < n; i++){
        numArray.push(i);
    }
    // Then depending where we are in the cirlce we need to move forward or we need to  move back
    if(firstNumber < halfWay) {
        return numArray[firstNumber + halfWay]
    }
    return numArray[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2));