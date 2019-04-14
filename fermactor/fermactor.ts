function fermactor(n: number): number[] {
    // We take in a single number and and we want to find out what the number is such that: what would be two numbers if we did a minus b to the second power. We return an array with the two numbers.
    // First we need to create a nested for loop with two for loops. For the first for loop we take it to the second power. Then we minus that second power in the second for loop and we check wether it met that number. If it did we return that i and that j iterations to find the fermactor.
    for(let i = 0; i < n; i++){
        for(let j = 1; j < i; j++){
            // first const and second are same, second is more modern version
            // const total = Math.pow(i, 2) - Math.pow(j, 2);
            const total = i ** 2 - j ** 2;
            if(total === n) {
                return [i,j];
            }
        }
    }

}

console.log(fermactor(15));