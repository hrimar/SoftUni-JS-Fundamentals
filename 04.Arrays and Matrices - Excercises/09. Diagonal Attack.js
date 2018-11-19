function atac(arr) { // 100/100  See it again!
   // 1. create matrix:
    let matrix = [[]];
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(' ').map(a => +a);
    }

    // 2. take diagonals sums:
    let sum1 = 0;
    let sum2 = 0;
    // var 1:
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         if (i === j) {
    //             sum1 += matrix[i][j];
    //             sum2 += matrix[i][matrix.length - 1 - j]
    //         }
    //     }
    // }
    // var 2 - само за квадратна матрица:
    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length - 1 - i]
    }

    // 3. change all elements instead of diagonals:
    if(sum1 === sum2){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && j !== matrix[i].length-i-1) { //both diagonals!!!
                     matrix[i][j] = sum1;
                }
            }
        }
    }

    //  // print of matrix - var.1:
    // for (let i = 0; i < matrix.length; i++) {
    //     console.log(matrix[i].join(' '));
    // }
    // // print of matrix - var.2:
         console.log(matrix.map(row => row.join(' ')).join('\n'));

}

atac(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);