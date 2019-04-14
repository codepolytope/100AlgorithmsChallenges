function boxBlur(image: number[][]): number[][] {
    // We need to omit the edges and we only need to have the center value which is divided by the total amount of elements in the image.
    // First we create an empty array for our resolution
    const res = [];
    // Then we need to handle the edge cases, thats what the first two nested loops are for
    for(let y = 0; y < image.length - 2; y++){
        // This will be the item that we push once we finish our box blur
        const line = [];
        for(let x = 0; x < image[y].length - 2; x++) {
            // Now that we have the x and y coords we have to find the average value for that and it will take two more nested loops becuase we eliminated some of the endges
            // Second thing we need to do is create variables to keep track of our count
            let sum = 0;
            let count = 0;
            // Third and Fourth thing is to do that 9 by 9 area here which is our objective
            for(let a = y; a < y + 3; a++) {
                for(let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }
            // Then push that value
            line.push(Math.floor(sum/count));
        } 
        // When your done with your 9 by 9s here you will push the line 
        res.push(line);
    }
    // Finally we want to return res(resolution) after we are done modifying it
    return res;
} 

console.log(boxBlur([[1, 1, 1], 
                     [1, 7, 1], 
                     [1, 1, 1]]));