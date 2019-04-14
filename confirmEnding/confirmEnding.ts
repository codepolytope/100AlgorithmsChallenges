function confirmEnding(str: string, target: string) {
   // We need to find out if the string end with a certain word (series of characters), if it does, return true and if it doesnt return false
    // First we need to compare our strings by the distance of one string minus the other and coming up with the remainder and just return the start of our substring and compare it with the lengh of the input
    // The point at which we need to make our comparison
    const start = str.length - target.length;
    // Finally we compare the substring to the target
    return str.substr(start) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));