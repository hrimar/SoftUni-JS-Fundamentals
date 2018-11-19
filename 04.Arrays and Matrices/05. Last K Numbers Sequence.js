// // var.1:  100/100 - long
// function lastNumbers(length, k) {
//     let result = [1];
//
//     for (let i = 1; i < length; i++) {
//         result[i] = sumK(result, k);
//     }
//
//     function sumK(result, k){
//         let sum = 0;
//         for (let i = result.length-k; i < result.length; i++) {
//           if(result[i] != undefined){
//               sum+=result[i];
//           }
//         }
//         return sum;
//     }
//     console.log(result);
// }

// var.2:  100/100 -
function lastNumbers(length, k) {
    let result = [1];

    for (let i = 1; i < length; i++) {
       let start = Math.max(0, i-k); //  not to take negative index!!!
       let sum = result.slice(start, i).reduce((a, b) => a+b);
       result.push(sum);
    }

    console.log(result);
}
lastNumbers(6, 3);
console.log('');
lastNumbers(8, 2);