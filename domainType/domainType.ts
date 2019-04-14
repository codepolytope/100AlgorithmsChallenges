function domainType(domains: string[]): string[] {
    // We have an array that takes in domain names and what we want is to find out if its an information site , commercial , network or organization type domain .
    // First we need to create and array called domain types to store the values for the types we want to match 
    const domainType: string[] = [];
    // Then we need to iterate through the array thats passed in and split it up on each individual dot and then we check the very last one to see if it matched any of the domain types we have in the domain types array and if it did we push the type of domain it was to it accordingly.
    for(let i = 0; i < domains.length; i++) {
        const domain = domains[i].split('.');
        const lastDomain = domain[domain.length - 1];
        if(lastDomain === 'org') {
            domainType.push('organization')
        } else if(lastDomain === 'com') {
            domainType.push('commercial')
        } else if(lastDomain === 'net') {
            domainType.push('network')
        } else if(lastDomain === 'info') {
            domainType.push('information')
        }
    }
    // Finally we return the domain types array
    return domainType;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));