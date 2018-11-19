function f(string) { // 100/100
    let regex = /^([a-zA-Z0-9]+)@([a-z]+(\.[a-z]+)+)$/;
    let match = regex.test(string);

    if(match){
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}
f('valid@email.bg')
console.log('');
f('invalid@emai1.bg')