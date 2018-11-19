// function f(arr) { // 100/100
//     let map = new Map();
//     // 1.
//     for (let obj of arr) {
//         let [team, pilot, points] = obj.split(" -> ");
//
//         if(!map.has(team)){
//             map.set(team, new Map());
//         }
//         if(!map.get(team).has(pilot)){
//             map.get(team).set(pilot, +points);
//         } else {
//             map.get(team).set(pilot, map.get(team).get(pilot) + +points);
//         }
//     }
//                 // console.log(map);
//     // 2. Sort
//     let sortedMap = [...map]
//         .sort((a, b) => [...b[1].values()] //
//         .reduce((a, b) => a+b) - [...a[1].values()].reduce((a, b) => a+b))
//         .slice(0, 3);
//
//     // 3. Print
//     for (let [team, pilot] of sortedMap) {
//         console.log(`${team}: ${[...pilot.values()].reduce((a, b) => a+b)}`);
//
//         let sortedPilots = [...pilot].sort((a, b) => b[1] - a[1]);
//         for (let [pil, point] of sortedPilots) {
//             console.log(`-- ${pil} -> ${point}`)
//         }
//     }
// }


// function f(arr) { // with Obejts - 100/100
//     let obj = {};
//     // 1.
//     for (let line of arr) {
//         let [team, pilot, points] = line.split(" -> ");
//
//         if (!obj.hasOwnProperty(team)) {
//             obj[team] = {
//                 totalPoints: 0,
//                 pilots: {}
//             };
//         }
//         if (!obj[team]["pilots"].hasOwnProperty(pilot)) {
//             obj[team]["pilots"][pilot] = 0;
//         }
//         obj[team]["pilots"][pilot] += +points;
//         obj[team]["totalPoints"] += +points;
//
//     }
//
//     //2. Sort
//     let sortedObj = Object.entries(obj) // for Map is [...obj] or Array.from(map.keys())
//         .sort((a,b) => b[1]["totalPoints"] - a[1]["totalPoints"])
//         .slice(0, 3);
//
//     // // 3. Print
//     for(let winnerTeam of sortedObj){
//         console.log(`${winnerTeam[0]}: ${winnerTeam[1]["totalPoints"]}`);
//         let sortedPilots=Object.entries(winnerTeam[1]["pilots"]).sort((a,b)=> b[1]-a[1]);
//
//          for(let pilot of sortedPilots){
//             console.log(`-- ${pilot[0]} -> ${pilot[1]}`);
//         }
//     }
// }

function f(arr) { // with Obejts - TODO
    let obj = {};
    // 1.
    for (let line of arr) {
        let [team, pilot, points] = line.split(" -> ");

        if (!obj.hasOwnProperty(team)) {
            obj[team] = {
                totalPoints: 0,
                pilots: {}
            };
        }
        if (!obj[team]["pilots"].hasOwnProperty(pilot)) {
            obj[team]["pilots"][pilot] = 0;
        }
        obj[team]["pilots"][pilot] += +points;
        obj[team]["totalPoints"] += +points;

    }
    console.log(obj);
    // 2. Sort
    Object.keys(obj)
        .sort((t1, t2) => {
            return obj[t2]["totalPoints"] - obj[t1]["totalPoints"]
        })
        .splice(0, 3)
        .forEach(team => {
            console.log(`${team}: ${obj[team]["totalPoints"]}`)

            Object.keys(obj[team])
                .filter(p=>p !== "totalPoints")
                .forEach((pilot) => {
                    console.log(`-- ${Object.keys(obj[team][pilot]).join('\n')}: ${obj[team][pilot]}`)
                })
        })
}

f(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
)