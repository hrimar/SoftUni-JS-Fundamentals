
// // var1 -  //100 /100 but find the shorter way
// function f(arr) {
//     let result =[];
//     for (let i = 0; i < arr.length; i++) {
//
//         let arrStr = arr[i].split('|').map(m=>m.trim()); // or see var.2
//         if(i>0){
//             let obj= {
//                 Town: arrStr[1],
//                 Latitude: +arrStr[2],
//                 Longitude: +arrStr[3]
//             };
//             result.push(obj);
//         }
//     }
//     let final= JSON.stringify(result);
//     console.log(final);
// }

// var2 -
function f(arr) {
    let result =[];
    for (let town of arr.slice(1)) { // to take not column names
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);   // !!!
        let townObj = {
            Town: townName,
            Latitude:  +(lat),
            Longitude: Number(lng)
        };
        result.push(townObj);
    }

    console.log(JSON.stringify(result));
}

f(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)
console.log('');
// f(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']
// )