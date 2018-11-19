// От масива със стрингове да се проброят коклко пъти се появява всяка дума:
// var.1 - 100/100 !!!
function f(arr) {
    let result = {};
    let text = arr.join(' ')
    let words = text.match(/[A-Za-z]+/g);   // !!
    for (let elem of words) {
      result[elem] ? result[elem]++ : result[elem] = 1; // !!!
    }
    console.log(JSON.stringify(result));
}

// var.2 - 100/100 !!!
function f(inputLines) {
    let text = inputLines.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/)    // !
        .filter(w => w != '');

    let wordsCount = {};
    for (let w of words){
        wordsCount[w] ? wordsCount[w]++ :  wordsCount[w] = 1;
    }

    console.log(JSON.stringify(wordsCount));
}

f(['Far too slow, you\'re far too slow.']);
console.log('');
f(['JS devs use Node.js for server-side JS.-- JS for devs'])