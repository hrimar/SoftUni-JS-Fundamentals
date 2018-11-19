// function biggestElement(matrix){
//     let max = 0;
//     //let biggest=-555555555555;   //Number.MIN_VALUE НЕ Е < -5  - дава мин положит число!
//     let biggest=Number.NEGATIVE_INFINITY;
//
//     for (let row = 0; row < matrix.length; row++) {
//         max = matrix[row].reduce((a, b)=> Math.max(a, b));
//         if(max>=biggest){
//             biggest=max;
//         }
//     }
//     console.log(biggest);
// }


// var 2: - YES!!!!!!!!!!!!!!!!!!
function biggestElement(matrix) {
   // let matrix = input.map(row => row.split(', ').map(Number));

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(r => r.forEach( c =>  biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
console.log('');
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));
console.log('');
console.log(biggestElement([[-20, -50, -11], [-20, -50, -10]]));