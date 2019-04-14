function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    // We want to track how many days it will take to get our plant to our desired height while the plant grows in the day and shrinks at night
    let days = 0;
    let totalHeight = 0;

    while(totalHeight < desiredHeight) {
        days++;
        totalHeight += upSpeed;
        
        if(totalHeight < desiredHeight) {
            totalHeight -= downSpeed;
        }
    }

    return days;
}

console.log(growingPlant(100, 10, 910))