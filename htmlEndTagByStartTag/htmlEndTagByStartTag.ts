function htmlEndTagByStartTag(startTag: string): string {
    // We want to find the closing tag based on any input html tag
    const splitString = startTag.split(' ');
    const splitTag = splitString[0].toString().split('');
    let endTag = '</';
    
    for(let i = 1; i < splitTag.length; i++) {
        endTag += splitTag[i];
    }

    endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += '>';
     
    return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))