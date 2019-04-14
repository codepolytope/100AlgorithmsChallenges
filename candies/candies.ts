function candies(n: number, m: number): number {
    // We want all the kids to have an equal amount of candy
    
    // First we need to make a variable to round down the amount of candy divided by the number of children to give us a multiplyer
    const candy = Math.floor(m / 3);
    // Then we return the multiplyer times the number of children
    return candy * n;
}

console.log(candies(3, 10));