function f(input) { // 100/100 example forА Map() !!!
    let cars = new Map();
    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');

        if(!cars.has(brand)){ //!cars[brand] != cars.has(brand) === false  !!!
            cars.set(brand, new Map());
        }

        if(!cars.get(brand).has(model)){ // !cars[brand][model] != cars.get(brand).has(model) == false !!!
            cars.get(brand).set(model, 0);
        }
        cars.get(brand).set(model, cars.get(brand).get(model) + Number(quantity)); // !!!
    }

    for (let [brand, value] of cars) {
        console.log(`${brand}`);
        for (let [model, quantity] of value) {
            console.log(`###${model} -> ${quantity}`)
        }
    }
}
f(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)