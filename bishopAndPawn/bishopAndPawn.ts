function bishopAndPawn(bishop: string, pawn: string): boolean {
    // The bishop can go diagonaly on the same color board square as the pawn. What we get is the bishop position which will be our first parameter and the pawn position which will be our second paramete and we need to return a true or false value if its going to hit our pawn.
    // One Solution to this is to use a mathematical equation if we create a board object and we can see if they line up when we add a couple of values
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    }
    // Then we need to get the letter value of bishop and pawn
    const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);
    // Then we figure out if the positions can be checked with this formula
    if(bishopX + bishopY === pawnY + pawnX || bishopX + pawnY === pawnX + bishopY) {
        return true;
    }
    // Finally we return true or false depending on if the bishop can hit the pawn
    return false;
}

console.log(bishopAndPawn('a1', 'c3'));