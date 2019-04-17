function lateRide(n: number): number {
    // We have a digital times thats been keeping track of minutes, we want to convert those minutes into a standard hour/minute combination which then will give the total value of that as one number
    // First we need to get the hours and the minutes and separate them out . Then from there we need to take the hours to string , concatenate the minutes which are converted to a string also.
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    const time = hours.toString().concat(minutes.toString()).split('').map((char) => parseInt(char));
    // Then we reduce it after we parse the strings as intigers 
    return time.reduce((a,b) => a + b);
}

console.log(lateRide(240));
console.log(lateRide(808));
