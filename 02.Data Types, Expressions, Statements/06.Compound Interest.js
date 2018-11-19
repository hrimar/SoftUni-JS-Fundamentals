function compountd(input) {
    let sum = input[0];
    let interestRate = input[1];
    let compoundingPeriod = input[2];
    let timespan = input[3];

    let compoundInterest = sum * Math.pow(1 + interestRate/(100*( 12/compoundingPeriod)), 12/compoundingPeriod * timespan);
    console.log(compoundInterest.toFixed(2));
}
compountd([1500, 4.3, 3, 6]); // 100/100