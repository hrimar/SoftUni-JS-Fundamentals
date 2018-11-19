// // 100/100 but make it again!!!
// function solve([rows, cols, startRow, startCol]) {
//     // 1. Create matrix:
//     let matrix = new Array(rows);
//
//     for (let row = 0; row < matrix.length; row++) {
//         matrix[row] = new Array(cols);
//     }
//
//     // 2. fill the matrix:
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//             let rowOffset = Math.abs(startRow - row);
//             let colOffset = Math.abs(startCol - col);
//
//             matrix[row][col] = 1 + Math.max(rowOffset, colOffset);
//         }
//     }
//
//     for (let row = 0; row < matrix.length; row++) {
//         matrix[row] = matrix[row].join(' ');
//     }
//
//     return matrix.join('\n');
// }

// var. 2 - 100/100
function solve([rows, cols, starRow, starCol]) {
    // 1. Create matrix:
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }

    // 2. fill the matrix:
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

// console.log(solve([5, 4, 1, 2]));
// console.log();
// console.log(solve([5, 5, 1, 1]));
// console.log();
console.log(solve([4, 4, 0, 0]));