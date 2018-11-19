function maxNum(input) {
    let num1 = input[0];
    let num2 = input[1];
    let num3 = input[2];

    let result = Math.max(num1, num2, num3);
    console.log(result);
}

maxNum([5,-2, 7]); // 100/100

// or shorter var.2:
(num) => Math.max(num[0], num[1], num[2]); // 100/100

// or var 3:
([num1, num2, num3])= Math.max(num1, num2, num3); //no

