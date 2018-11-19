// function f(data) { // 60/100
//     // 1. Превръщаме масива от стрингове в масив от обекти:
//     let dataObj = data.map((item) => { // item е всеки нош ред
//         let townInfo = item.split(' | ');
//
//         return {    // t.e. ръщаме нов обект
//             city: townInfo[0],
//             product: townInfo[1],
//             price: townInfo[2]
//         };
//     });
//
// // 2. Правим нов обект с ключове -имена на продуктите и ст-сти - градовете
//  let result =  dataObj.reduce((acc, cur) => { // може и с forEach - TRY !?
//         if(!acc[cur.product]) {
//             acc[cur.product] = cur;
//             return acc;
//         }
//
//         if(acc[cur.product].price > cur.price){
//             acc[cur.product] = cur;
//         }
//
//         return acc;
//     }, {});
//
//  Object.keys(result).forEach(item => {
//      console.log(`${item} -> ${result[item].price} (${result[item].city})`)
//  })
// }

// var.2 100/100!!!
function solve(input) {
    let data = new Map();

    for (let line of input) {
        let [town, product, price] = line.split(' | ');

        if (data.has(product) == false) {
            data.set(product, new Map());
        }

        data.get(product).set(town, +price);
    }

    for (let [product, towns] of data) {
        let minPrice = Number.MAX_VALUE;
        let minTown = '';

        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minTown})`);
    }
}

f(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)
console.log('');
