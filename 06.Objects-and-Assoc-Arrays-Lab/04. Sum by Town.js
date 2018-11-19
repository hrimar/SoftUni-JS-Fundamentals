// // var.1
// function f(arr) { // 100/100
//     let result = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         if(i %2 === 0){
//             result[arr[i]] ? result[arr[i]] += +arr[i+1] : result[arr[i]] = +arr[i+1]; // !!!
//         }
//     }
//     console.log(JSON.stringify(result));
// }

// var.2
function f(arr) { // 100/100
    let sums = {};
    for (let i = 0; i < arr.length; i += 2) {
        let [town, income] = [arr[i], Number(arr[i + 1])];
        if (sums[town] == undefined) {
            sums[town] = income;
        }
        else {
            sums[town] += income;
        }
    }
    console.log(JSON.stringify(sums));
}

f(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
)
console.log('');