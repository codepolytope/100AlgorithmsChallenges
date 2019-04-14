function factorializeANumber(num: number): number {
    // We need to take in a number and find a factorial of that Number.
    // Initialize the total variable to 1
    let total = 1;
    // Then we iterate up to and including the number that we got passed in while multiplying the digits that came before it in sequence starting at 1 
    for(let i = 1; i <= num; i++) {
        total *= i;
    }
    // Finally we return that factorial total
    return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));