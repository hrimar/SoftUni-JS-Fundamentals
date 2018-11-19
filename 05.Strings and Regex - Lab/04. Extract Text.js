function f(str) {  // 100/100
    let result = [];
    let startIndex = str.indexOf('(');
    let endIndex = str.indexOf(')', startIndex); // !!!
    while (startIndex > -1 && endIndex > -1) {
        result.push(str.substring(startIndex+1, endIndex));
        startIndex = str.indexOf('(', startIndex+1)
        endIndex = str.indexOf(')', endIndex+1)
    }
    console.log(result.join(', '));

//But how to solve this with REGEX:????
//     let matches = str.matches(/\([\w ]*\)/g);
//     for (let match of matches) {
//         console.log(match);
//     }

}

f('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
console.log('');
