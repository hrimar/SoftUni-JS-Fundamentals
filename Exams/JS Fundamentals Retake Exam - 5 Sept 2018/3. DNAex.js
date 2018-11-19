function f(arr) { // my 1. with EXEC 100/100
    // let regex = /([!@#$?a-z]+)(=\d+)(--\d+)(<<[a-z]+)/gm;
    let regex = /([!@#$?a-z]+)=([\d]+)--(\d+)<<([a-z]+)/gm; // каква е разликата м/у [\d]+ and \d+ ???
    let map = new Map();
    for (let line of arr) {
        if (line === 'Stop!') {
            break;
        }
         let matches = regex.exec(line); //.EXEC не работи така if(matches!==null), а само в цикъл!
        while (matches) {
            let geneName = matches[1].replace(/[!@#$?]/g, '');
            let nameLength = matches[2];
            let countOfGenes = matches[3];
            let organism = matches[4];
            if (geneName && nameLength && countOfGenes && organism && geneName.length === +nameLength) {
                if (!map.has(organism)) {
                    map.set(organism, 0)
                }
                let sum = map.get(organism);
                map.set(organism, sum + +countOfGenes)
            }
            matches = regex.exec(line)
        }
    }

    // 2. Sort of Map():
    let result = [];
    let sorted= Array.from(map.keys())
        .sort((k1, k2) => map.get(k2) - map.get(k1)); // sort by total count

    for (let key of sorted) {
        result.push(`${key} has genome size of ${map.get(key)}`);
    }
    console.log(result.join('\n'));
}

// function f(inp) { // 2. with MATCH and OBJECT - 100/100
//     let entries = {};
//     let regex = /([a-z\!\@\#\$\?]+)=([\d]+)--([\d]+)<<([a-z]+)/;
//
//     for (let l of inp){
//         if (l=="Stop!"){
//             break;
//         }
//         let matches = l.match(regex);
//
//         if (matches){
//             let name =matches[1].split(/[!@#$?]+/).join(''); // or = exec[1].replace(/[!@#$?]/g, '');
//             let length = matches[2];
//             let count = +(matches[3]);
//             let organism = matches[4];
//
//             if (name.length==  length) {
//                 if(!entries.hasOwnProperty(organism)){
//                     entries[matches[4]]=  +count;
//                 }
//                 else{
//                     entries[matches[4]]+=  +count;
//                 }
//             }
//         }
//     }
//     let sorted=[];
//     // 2. Sort of Object:
//     for(let e in entries){
//         sorted.push([e, entries[e]]);
//     }
//     sorted.sort((a,b)=>{
//         return b[1] - a[1]
//     });
//     // 3. Print:
//     sorted.forEach(x => console.log(`${x[0]} has genome size of ${x[1]}`));
// }

f(['!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!'
])