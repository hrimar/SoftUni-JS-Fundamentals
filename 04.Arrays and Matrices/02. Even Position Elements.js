function sumFirtLast(input) { // 100/100
    return input.filter((el, index) => {
        return index % 2 === 0
    }).join(' ');
}

console.log(sumFirtLast(['20', '30', '40']));
;