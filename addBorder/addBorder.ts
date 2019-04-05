function addBorder(picture: string[]): string[] {
    // // We want to build a border around all the strings
    // // First we find out the length of wall
    // const lengthOfWall = picture[0].length + 2;
    // // Then we want to init a wallvariable to and empty string
    // let wall = '';
    // // Then we loop throught the length of the wall concatinating the wall itself
    // for(let i = 0; i < lengthOfWall; i ++) {
    //     wall = wall.concat('*');
    // }
    // picture.unshift(wall);
    // picture.push(wall);
    // // Then we add the wall to the actual strings with a for-loop
    // for(let i = 1; i < picture.length - 1; i++) {
    //     picture[i] = '*'.concat(picture[i], '*');
    // }
    // // Finally we return the wall
    // return picture;

    // Solution TWO, uncomment the full solution if you want to see the first one 
    const wall = '*'.repeat(picture[0].length + 2);
    picture.unshift(wall);
    picture.push(wall);
    for (let i = 1; i < picture.length; i++) {
        picture[i] = '*'.concat(picture[i], '*');    
    }
    return picture;
}   

console.log(addBorder(["abc", "ded"]));