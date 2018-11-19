function rounding(input) {
    let number = +input[0]; // !!!
    let round = +input[1];  // !!!

    if(round > Math.abs(15))    {
        //round = Math.abs(round)%15;
        // or
        round = 15;
    }

    number = +(number.toFixed(round)); //number = Number(number.toFixed(round));
  // let result = number.toString(); // Not necessary!
    console.log(number);
}
rounding([10.5, 3]); // 100/100