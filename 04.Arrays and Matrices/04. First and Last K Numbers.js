// // var.1: 100/100 - long
// function firstAndLastNumbers(params) {
//     let number = params.shift();
//     let first = [];
//     let last = [];
//
//     for (let i = 0; i < number; i++) {
//         first.push(params[i]);
//     }
//
//     for (let i = params.length-number; i < params.length; i++) {
//         last.push(params[i]);
//     }
//     console.log(first.join(' '));
//     console.log(last.join(' '));
// }

// var.2: 100/100
function firstAndLastNumbers(params) {
    let number = params.shift();
    let first = params.slice(0, number);
    let last = params.slice(params.length-number);

    console.log(first.join(' '));
    console.log(last.join(' '));
}
firstAndLastNumbers([2,7, 8, 9]);
console.log('');
firstAndLastNumbers([3, 6, 7, 8, 9]);