// function diagonalSum(matrix) {
//     let sum1 = 0;
//     let sum2 = 0;
//
//     // var1:  //100/100
//     // for (let i = 0; i < matrix.length; i++) {
//     //     for (let j = 0; j < matrix[i].length; j++) {
//     //         if (i === j) {
//     //             sum1 += Number(matrix[i][j]);
//     //             sum2 += Number(matrix[i][matrix[i].length-j-1]);
//     //         }
//     //     }
//     // }
//
//     // var.2:  //100/100
//     for (let row = 0; row < matrix.length; row++){
//         sum1 += matrix[row][row];
//         sum2 += matrix[row][matrix[row].length-1-row];
//     }
//     console.log(`${sum1} ${sum2}`);
// }

// // var3:  //100/100 - but impure function
// function diagonalSum(matrix) {
//     let sum1 = 0, sum2 = 0;
//
//    matrix.forEach((item, index) => {
//        sum1 += +item.filter((innerItem, innerIndex) => {
//             return innerIndex === index;
//         });
//     });
//    matrix.forEach((item, index) => {
//         sum2 += +item.filter((innerItem, innerIndex) => {
//             return innerIndex === item.length-1-index;
//         });
//     });
//     console.log(`${sum1} ${sum2}`);
// }

// var4:  //100/100 - pure function !!1 - YES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function diagonalSum(matrix) {
    let sum1 = 0, sum2 = 0;

    sum1 = matrix.map((item, index) => {
        return item
            .map( (e) => +e)
            .filter((innerItem, innerIndex) => {
            return innerIndex === index;
        })[0];
    }).reduce((acc, cur) => acc+cur);

    sum2 = matrix.map((item, index) => {
        return +item.filter((innerItem, innerIndex) => {
            return innerIndex === item.length-1-index;
        });
    }).reduce((acc, cur) => acc+cur);

    console.log(`${sum1} ${sum2}`);
}

diagonalSum([[20, 40], [10, 60]]);
console.log('');
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);
