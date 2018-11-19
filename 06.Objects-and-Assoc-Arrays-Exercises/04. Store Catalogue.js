function f(input) {     // 100/100 again !!!
    let products = {};
    for (let line of input) {
        let [product, price] = line.split(' : ');

        // if(!products[product])  {
        //     products[product]=0;
        // }
        // products[product]+= price;

        products[product] = price;
    }

    let catalogue = {};
    for (let key of Object.keys(products)) {
        let firstLetter = key[0];
        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = {}; // new Map();
        }
        catalogue[firstLetter][key] = products[key];    // !!!
       // catalogue[firstLetter].set(key, products[key]); // new Map(); !!!
    }

    for (let key of Object.keys(catalogue)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))) {
        console.log(key);
        let value = catalogue[key]
        let sorted = Object.keys(value) .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        for (let k of sorted) {
            console.log(`${k}: ${catalogue[key][k]}`);
        }
    }
}

f(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
console.log('');
f(['Banana : 2',
    'Rubic\'s Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)