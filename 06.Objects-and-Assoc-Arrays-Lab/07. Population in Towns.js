function f(arr) { // 100/100

    let result = new Map();
    for (let element of arr) {
       let [town, population] = [element.split(' <-> ')[0], +element.split(' <-> ')[1]];
        result[town] ? result[town]+=population : result[town]=population;
    }

    for (let key of Object.keys(result)) {
        console.log(`${key} : ${result[key]} `)
    }
}

f(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
console.log('');
f(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)