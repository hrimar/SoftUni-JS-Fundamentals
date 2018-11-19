function processNumbers(arr) { // 100/100
    let result = arr.sort((a, b)=> a-b) // при b>a дава 80/100 !!!
        .slice(0, 2)
        .join(' ');

    console.log(result);
}
processNumbers([30, 15, 50, 5]);
console.log('');
processNumbers([3, 0, 10, 4, 7, 3]);