function f(str) { //100/100
    let result = str.toLowerCase().split(' ');
    result = result.map(a=>a.replace(a[0], a[0].toUpperCase()));        // !!!
    console.log(result.join(' '));
}

f('Capitalize these words')
console.log('');
f('Was that Easy? tRY thIs onE for SiZe!')
console.log('');
