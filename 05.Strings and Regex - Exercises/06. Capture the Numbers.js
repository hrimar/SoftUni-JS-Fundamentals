// var.1:
function f(arr) {       //100/100
    let regex = /\d+/g;
    let text = arr.join(' ');
    let matches = text.match(regex);
    console.log(matches.join(' '));
}

f(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'])
console.log('');
f(['123a456',
    '789b987',
    '654c321',
    '0'])
console.log('');