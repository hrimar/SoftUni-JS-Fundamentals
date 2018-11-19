// // 100/100 AGAIN = how many times has appeared word in a string:
function f(str, surch) {
    let regex = new RegExp(`\\b${surch}\\b`, 'gi'); //!!!! placeholder
    let matches = str.match(regex);

    if(str.match(regex) !== null){      // !!!
        console.log(matches.length);
    } else{
        console.log(0);
    }
}

f('The waterfall was so high, that the child couldn’t see its peak.', 'the')
console.log('');
f('How do you plan on achieving that? How? How can you even think of that?',
    'how')
console.log('');
f('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there')

// (a,b)=>RegExp('\\b'+b+'\\b','i').test(a) ? a.match(RegExp('\\b'+b+'\\b','gi')).length : 0