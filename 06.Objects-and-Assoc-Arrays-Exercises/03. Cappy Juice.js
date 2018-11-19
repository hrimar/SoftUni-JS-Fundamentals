// AGAIN !!!!!!!

function f(arr) { // 100/100
    let quant = new Map();
    let bottles = new Map();

    for (let line of arr) {
        let args = line.split(' => ');
        let juse = args[0];
        let quantity = +args[1];

        if (!quant[juse]) {
            quant[juse] = quantity;
        } else {
            quant[juse] += quantity;
        }
        // оr
        // if (!quant[juse]) {
        //     quant[juse] = 0;
        // }
        // quant[juse] += quantity;

        if(quant[juse] >= 1000){
            if (!bottles[juse]) {
                bottles[juse] = quant[juse];
            } else {
                bottles[juse] += quantity;
            }
        }
    }

    Object.keys(bottles).forEach((key) => {
        let value = +quant[key] / 1000;
            console.log(`${key} => ${parseInt(value)}`)

    })
}


//f(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']
// )
// console.log('');
f(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)