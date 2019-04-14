function houseOfCats(legs: number): number[] {
    // We want to return an array of all the values of every possible number of people that can be in the house given that we only know the amount of legs. 
    const peopleCount: number[] = [];

    if(legs === 2) {
        return [1];
    }
    
    while(legs >= 0) {
        peopleCount.unshift(legs/2);
        legs -= 4;
    }

    return peopleCount;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
