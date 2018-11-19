function f(arr) {
    // var 1:  // 100/100
    // let towns = [];
    // let sum = 0;
    // for (let str of arr) {
    //     let token = str.split(/\s*[\t|]\s*/); // REGEX
    //   //  console.log(token[1]);
    //     towns.push(token[1]);;
    //   //  console.log(token[2]);
    //     sum+= +token[2];
    //            // console.log(token);
    // }
    //
    // console.log(towns.join(', '));
    // console.log(sum);

    // var.2:    // 100/100
    let towns = [];
    let sum = 0;
    for (let str of arr) {
        let token = str.split('|');
        towns.push(token[1].trim());    // !!!
        //  console.log(token[2]);
        sum+= +token[2].trim();
        // console.log(token);
    }

    console.log(towns.join(', '));
    console.log(sum);
}
f(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)