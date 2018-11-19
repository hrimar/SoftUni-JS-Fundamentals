function processNumbers(arr) { // 100/100
    let result = arr
        .filter((a, i) => i % 2 === 1)
        .map(a => a * 2)
        .reverse()
        .join(' ');

    console.log(result);
}

processNumbers([10, 15, 20, 25]);
console.log('');
processNumbers([3, 0, 10, 4, 7, 3]);