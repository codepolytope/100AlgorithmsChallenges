function extractMatrixColumn(matrix: number[][], column: number): number[] {
    // We have a two dimensional Array and a column/index value. What we are expecting to return is an array of those values. 
    // First we need to create an empty array 
    const matrixColumn: number[] = [];
    // Then we take our two dimensional array matrix and iterate over it with the row iterator. On each one of the rows, go ahead and push the column value that we want .
    matrix.forEach((row) => matrixColumn.push(row[column]));
    // Finally we return the matrix column array
    return matrixColumn;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));