// var.1:
function f(str) { //100/100
    let regex = /\b_[A-Za-z0-9]+\b/g;

    let matches = str.match(regex);
    let result = matches.map(a=>a.replace(a[0], ''))
    console.log(result.join());
}

f('The _id and _age variables are both integers.')
console.log('');
f('Calculate the _area of the _perfectRectangle object.')
console.log('');
f('__invalidVariable _evenMoreInvalidVariable_ _validVariable')

