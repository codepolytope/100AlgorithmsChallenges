function alternatingSums(a: number[]): number[] {
    // We are taking in an array of numbers and what we want to do is : for the even numbers - add them up and for the odd numbers - add them up, and then return those numbers back as a single array

    let evenSum = 0;
    let oddSum = 0;

    a.forEach((element, index) => {
        if(index % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        } 
    });

    return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))