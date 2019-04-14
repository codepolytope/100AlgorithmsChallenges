function crossingSum(matrix: number[][], a: number, b: number): number {
    // We are passing in a two dimensional matrix and we have three params. First the matrix then a column value and then a row value. We want to find out what the sum of the cross area is 
    
    const columnTotal = matrix[a].reduce((a,b) => a + b);
    let rowTotal = 0;

    for(let i = 0; i < matrix.length; i++) {
        rowTotal += i !== a ? matrix[i][b] : 0;
    }


    return columnTotal + rowTotal;
}

console.log(crossingSum([[1, 1, 1, 1], 
                         [2, 2, 2, 2], 
                         [3, 3, 3, 3]], 1, 3));