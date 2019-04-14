function depositProfit(deposit: number, rate: number, threshold: number): number {
    // We are taking in trying to find out how many years it would take to get to the threshold 

    let year = 0;
    let account = deposit;

    while(threshold > account) {
        account += account * (rate / 100);
        year++;
    } 

    return year;
}

console.log(depositProfit(100, 20, 170))