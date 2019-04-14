function fancyRide(l: number, fares: number[]): string {
    // We want to know, with the length of the ride and with these fare numbers here what is the highest value that we can ride on and not have to pay any money out of pocket and return that specific ride.
    // First we have to create out rides constant and decriment backwards until we come upon our Win condition (which is the first value where its less then or equal to the amount we have when we multiply the fare times the length of the ride)
    const rides: string[] = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];

    for(let i = fares.length - 1; i >= 0; i--){
        if(fares[i] * l  <= 20) {
            return rides[i];
        }
    }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));