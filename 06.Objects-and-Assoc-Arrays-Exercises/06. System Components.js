// Example for Map() !!!
function f(input) {
    let catalogue = new Map();
    // 1.
    for (let line of input) {
        let [system, comp, subComp] = line.split(' | ');

        if(!catalogue.has(system)){
            catalogue.set(system, new Map());
        }

        if(!catalogue.get(system).has(comp)){
            catalogue.get(system).set(comp, []) // ako e new Set() dava 60/100
        }
        //catalogue[system][comp].add(subComp);
        catalogue.get(system).get(comp).push(subComp);
    }

    // 2. SORT - in order to receive an array of keys and then sort them:
    let sortedCatalogue = Array.from(catalogue.keys())          // 100/100
        .sort((a, b) => catalogue.get(b).size- catalogue.get(a).size || a.localeCompare(b));
    // let sortedCatalogue = Array.from(catalogue.keys())        // 100/100
    //     .sort((a, b) => a.localeCompare(b))    // === .sort()          // 1st - second criteria
    //     .sort((a, b) => catalogue.get(b).size- catalogue.get(a).size); // 2nd - first criteria

        // console.log(sortedCatalogue);
     for (let system of sortedCatalogue){
         console.log(system);
         let sortedComp =Array.from(catalogue.get(system).keys())
             .sort((a, b) => catalogue.get(system).get(b).length- catalogue.get(system).get(a).length);
         //console.log(sortedComp);
         for (let component of sortedComp) {
            console.log(`|||${component}`);
             for (let subComp of catalogue.get(system).get(component)) {
                 console.log(`||||||${subComp}`);
             }
        }
    }
}

// TODO with Object
// function f(input) {
//     let catalogue = {};
//     for (let line of input) {
//         let [system, comp, subComp] = line.split(' | ');
//
//         if(!catalogue[system]){
//             catalogue[system]= {};
//         }
//        // catalogue[system]=comp; - NO!
//         if(!catalogue[system][comp]){
//             catalogue[system][comp]= new Set();
//         }
//         catalogue[system][comp].add(subComp);
//     }
//
//    // console.log(catalogue);
//     for (let system of Object.keys(catalogue
//         .sort((a, b) => a.count().localeCompare(b.count())))) {
//        // let sortetSuytem = system.map(c=>c.sort((a,b) => a.localeCompare(b)));
//         for (let components of Object.keys(system)) {
//             console.log(components);
//         }
//         console.log(system);
//     }
// }

f(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)