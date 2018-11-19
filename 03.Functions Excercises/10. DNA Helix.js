function helix(n) {         // 100/100
    let rows = Number(n);
    let word = 'ATCGTTAGGG';

    for (let i = 0, j = 0; i < rows; i++) {
        let currentRow = i % 4;
        if (currentRow === 0) {
            console.log(`**${word[j++]}${word[j++]}**`);
        } else if (currentRow === 1 || currentRow === 3) {
            console.log(`*${word[j++]}--${word[j++]}*`);
        } else if (currentRow === 2) {
            console.log(`${word[j++]}----${word[j++]}`);
        }
        if (j >= word.length) {
            j = j % word.length;
        }
    }
}
helix(4);
console.log();
helix(10);