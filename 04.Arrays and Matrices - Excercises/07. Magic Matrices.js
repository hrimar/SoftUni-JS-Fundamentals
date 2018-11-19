function magixMatrix(matrix) { // 100/100
    function sumRow(row) {
        return matrix[row].reduce((a, b) => a + b)
    };

    function sumCol(col) { // sum by vertical
        //return matrix[col].reduce((a, b) => a + b) //- only 80/100
        return matrix.map(row => row[col]).reduce((a, b) => a + b);
    };

    let sum = 0;
    let currentSum = 0;
    let result = true;
    for (let i = 1; i < matrix.length; i++) {
        if (i === 1) {
            sum = sumRow(0);
        }
        currentSum = sumRow(i);
        if (currentSum !== sum) {
            result = (false);
            break;
        }
        sum = currentSum;
    }

    for (let i = 0; i < matrix[0].length; i++) {
        if (i === 1) {
            sum = sumCol(0);
        }
        currentSum = sumCol(i)
        if (currentSum !== sum) {
            result = (false);
            break;
        }
        sum = currentSum;
     }
    console.log(result === true ? 'true' : 'false');
}

magixMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
console.log('');
magixMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
console.log('');
magixMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);
