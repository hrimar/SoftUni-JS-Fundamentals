function f(lines) {  // 100/100
    let text = lines.join(' ').toLowerCase();
    let words = text.match(/\w+/g);

    let result = new Map();
    for (let word of words) {
        result[word] ? result[word]++ :result[word]=1;
    }

    // Sort by keys and print:
    let orderedResult = Object.keys(result).sort((a, b) => a.localeCompare(b));
    for (let key of orderedResult) {
        console.log(`'${key}' -> ${result[key]} times`)
    }
}
f(['Far too slow, you\'re far too slow.'])
console.log('');
f(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'])