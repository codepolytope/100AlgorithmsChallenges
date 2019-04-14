function findEmailDomain(address: string): string {
    // We are trying to get the email addresses domain

    const lastAtIndex = address.lastIndexOf('@');

    return address.slice(lastAtIndex + 1, address.length);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
