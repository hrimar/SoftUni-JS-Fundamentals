function averageModify(n) { // 100/100 !!!
    n = n.toString();

    let avr = function (arr) {
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += +(arr[i]); // !!!
        }
        return sum / arr.length;
    }

    let addNine = n => n + '9';

    while (avr(n) <= 5) {
        n = addNine(n);
    }

    console.log(n);
}

averageModify(101);
averageModify(5835);
