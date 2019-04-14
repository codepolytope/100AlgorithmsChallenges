function chessBoardCellColor(cell1: string, cell2: string): boolean {
    // We take in two strings and what we are expecting to find out is if they are indeed the same color
    // First we create the board object
    const board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };
    // Then we need to find out the total value for current board and compare our cells together after we mod them by 2
    const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
    const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;
    // Finally we return to find out if they are both even or they are both odd
    return total1 === total2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
