function validyChecker(input) {   // 100/100 !!!!!!!!!!!
    function check([x1, y1, x2, y2]) {
        if (isDistanceInteger(x1, y1, x2, y2)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    check([input[0], input[1], 0, 0]);
    check([input[2], input[3], 0, 0]);
    check([input[0], input[1], input[2], input[3]]);

    function isDistanceInteger(x1, y1, x2=0, y2=0) {
        let distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        return distance % 1 === 0;
    }
}

validyChecker([3, 0, 0, 4]);
console.log('');
validyChecker([2, 1, 1, 1]);



