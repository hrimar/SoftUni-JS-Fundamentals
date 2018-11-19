function f(text) { // 100/100
    let arrText = text.match(/\w+/g);
    console.log(arrText.join('|'));
}
f('A Regular Expression needs to have the global flag in order to match all occurrences in the text')
console.log('');
f('_(Underscores) are also word characters')
console.log('');
f('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !')
console.log('');
f('A #%^ lo^#^t of@%*symbols(@i@%~n~)`this......sentence...123456789*&%#0:"">>?:{{!@#@@#$%The+_)(*&^%$#@!End.')