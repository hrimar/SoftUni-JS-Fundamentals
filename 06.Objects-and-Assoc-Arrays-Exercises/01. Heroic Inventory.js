// var.1: 100/100
function f(input) {
    let heroes = [];
    for (let line of input) {
        // let obj = {};
        // let [name, level, items] = line.split(' / '); // 'Isacc / 25 ', - gives error 80/100
        // obj["name"] = name;
        // obj["level"] = +level;
        // obj["items"] = items.split(', ');

        let args = line.split(' / ');
        let name = args[0];
        let level = +args[1];
        let items = [];
        if (args.length > 2) {
            items = args[2].split(', ');
        }
        let obj = {
            name: name,
            level: level,
            items: items
        };
        heroes.push(obj);
    }

    console.log(JSON.stringify(heroes));
}

// var.2 100/100
// function solve(input) {
//     let all = [];
//
//     for (let line of input) {
//         let heroArgs = line.split(/ \/ |, / );
//         let heroName = heroArgs.shift();
//         let heroLevel = +heroArgs.shift();
//
//         let hero = {name:heroName, level:heroLevel, items:heroArgs};
//
//         all.push(hero);
//     }
//
//     return JSON.stringify(all);
// }
f(['Isacc / 25 ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)