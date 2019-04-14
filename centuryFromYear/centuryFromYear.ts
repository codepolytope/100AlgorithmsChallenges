function centuryFromYear(year: number): number {
    // We have to get the century from the 4 digit year

    // First we need to make a condition for when the value is even or odd. If something divides evenly , we want it to return Century which is number divided by a 100. Then we modify that for when the number isnt even.
    const century = year / 100;
    // Then we handle the even edge case 
    if(year % 100 === 0) {
        return century;
    }
    // Finally we return the rounded down year and add one to make it the correct century
    return Math.floor(century) + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));