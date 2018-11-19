function f(input) {     // 100/100 AGAIN !!!
    let towns = new Map();

    for (let line of input) {
      let [town, product, amountANDprice] = line.split(' -> ');
        let totalIncom = amountANDprice.split(' : ')[0]*amountANDprice.split(' : ')[1];

        if (towns.has(town) == false) {
            towns.set(town, new Map());
        }

        if (towns.get(town).has(product) == false){
            towns.get(town).set(product, 0);
        }

        towns.get(town).set(product, towns.get(town).get(product) + totalIncom);
    }

    for (let [key, value] of towns) {
        console.log(`Town - ${key}`);
        for (let [k, v] of value) {
            console.log(`$$$${k} : ${v}`)
        }
    }
}

f(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
)
// towns[town] ? towns[town]=+totalIncom : towns[town]=totalIncom;