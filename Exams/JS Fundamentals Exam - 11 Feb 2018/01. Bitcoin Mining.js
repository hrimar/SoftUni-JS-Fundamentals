function f(arr) { // 100/100
    //let numsArr = arr.map(Number);
    let bitcoints = 0;
    let firstDay = [];
    let money = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 3 == 0) {
            let gold = arr[i] - arr[i] * 0.3;
            money += +gold * 67.51;
        } else {
            money += +arr[i] * 67.51;
        }
        if (money >= 11949.16) {
            while (money >= 11949.16) {
                bitcoints++;
                money -= 11949.16;
            }
            firstDay.push(i + 1);
        }
    }
    console.log(`Bought bitcoins: ${bitcoints}`)
    if (firstDay.length !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay.shift()}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

f([100, 200, 300])
console.log('');
f([3124.15, 504.212, 2511.124])
console.log('');
f([50, 100])