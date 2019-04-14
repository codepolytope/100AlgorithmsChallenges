function companyBotStrategy(trainingData: number[][]): number {
    // We need to find out our average when we have a time and a correctness for a right answer
    // First we initialize the time and correctness variables to 0 and then iterate through the training data in a for each loop to add up the time and correctness for each training exercise 
    let time = 0;
    let correctness = 0;

    trainingData.forEach((data: number[]) => {
        if(data[1] === 1) {
            time += data[0]
            correctness += data[1];
        }
    });
    // Then we return the average by diving time by correctnes & Finally we return the average score 
    return time / correctness || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
