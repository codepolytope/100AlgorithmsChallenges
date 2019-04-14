function celsiusToFahrenheit(celsius: number): number {
    // We need to use the formula: temperature in Celsius times 9/5, plus 32 to make the algorhytm work
    return celsius * 9 / 5 + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));