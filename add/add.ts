function add(param1: number, param2: number): number {
    return param1 + param2;
}

function add2(...param1: number[]): number {
    // Initialize a counter variable at 0
    let total = 0;
    // Take all of the params from the rest operator and add them 
    param1.forEach((num) => {
        total += num;
    });
    // After adding them, return the total
    return total;
}
// first function cases
console.log(add(1, 2));
console.log(add(3, 2));
// second function cases
console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

