// // 1. Map in Map -> brand: model: points
// let map = new Map();
// map.set("Opel", new Map());
// map.get("Opel").set("Vectra", 50);
// map.get("Opel").set("Astra", 55);
// map.get("Opel").set("Corsa", 10);map
//
// let sorByPoints = Array.from(map.keys()) //[...map]
// for (let brand of sorByPoints) {
//         console.log(`${brand}`);
//     // let sortedModel = [...map.get(brand).keys()] // sort by model A->Z
//     //     .sort((a, b) => map.get(brand).get(a) - map.get(brand).get(b))
//     let sortedDescPoints =  [...map.get(brand).keys()] // sort by points 10->1
//         .sort((p1, p2) => map.get(brand).get(p2)-map.get(brand).get(p1));
//     for (let model of sortedDescPoints) {
//               console.log(`-- ${model} -> ${map.get(brand).get(model)}`);
//     }
// }

// 2. Object in Object -> brand: model: points
let obj = {
    Opel: {
        Vectra: 50,
        Astra: 55,
        Corsa: 10
    }
}
// console.log(obj);
// console.log('');

// Var.1 for Destruct of Objects with Object.keys(obj) - YES!
// Object.keys(obj)
//     .forEach((brand) => {
//         console.log(`${brand}`)
//
//         Object.keys(obj[brand])
//             // .sort((m1, m2) => { // sort by point
//             //     return m2.localeCompare(m1)
//             // })
//                         //.filter(b=> b !=="Vectra") // to ignore this model
//             .sort((m1, m2)=>{ // sort by point
//                 return obj[brand][m2]-obj[brand][m1]
//             })
//             .forEach((model) => {
//                 console.log(`-- ${model} - ${obj[brand][model]}`)
//             })
//     })

// Var.2 for Destruct of Objects with Object.entries(obj) - YES!
for (let brand of Object.entries(obj)) {
    console.log(brand[0]);

    let sortedModels =  Object.entries(brand[1])
            // .sort((m1, m2) => {         // sort by point
            //     return m2[1] - m1[1]
            // })
        .sort((m1, m2) => {         // sort by model name
            return m1[0].localeCompare(m2[0])
        })
    for (let model of sortedModels) {
        console.log(`${model[0]} - ${model[1]}`)
    }
}




