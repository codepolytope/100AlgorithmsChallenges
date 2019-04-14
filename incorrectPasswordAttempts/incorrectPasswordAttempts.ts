function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    // We need to find out if we are going to be able to input our password or if we are going to get locked out after set amount of attempts. We return true if you are locked out or false if you are not.
    let faliedAttempts = 0;

    for(let attempt of attempts) {
        faliedAttempts = attempt === passcode ? 0 : faliedAttempts++;
        if(faliedAttempts === 10) {
            return true;
        }
    }
    return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));