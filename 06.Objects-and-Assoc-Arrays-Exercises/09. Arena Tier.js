function f(input) {
    // 1. От масива със стрингове правим масив от обекти:
    const gladiatorsData = input
        .filter((item) => item !== "Ave Cesar")
        .map((info) => {
            if (info.indexOf(" vs ") > -1) {
                return {
                    fight: info.split(" vs ")
                };
            } else {
                return {
                    data: info.split(" -> ")
                }
            }
        })
        .reduce((acc, cur) => {
            if (cur.data) {
                const gladiatorName = cur.data[0].trim();
                const technique = cur.data[1];
                const skill = +cur.data[2];

                if (!acc[gladiatorName]) {
                    acc[gladiatorName] = {};

                    acc[gladiatorName][technique] = skill;
                    acc[gladiatorName]["totalSkill"] = skill;// - var.1 new prop for totalSkill
                    return acc;
                }
                if ((acc[gladiatorName][technique] && acc[gladiatorName][technique] < skill)) {
                    acc[gladiatorName].totalSkill += skill - acc[gladiatorName][technique];
                    acc[gladiatorName][technique] = skill;
                } else if (!acc[gladiatorName][technique]) {
                    acc[gladiatorName][technique] = skill;
                    acc[gladiatorName].totalSkill += skill;
                }
            } else if (cur.fight) {
                const first = cur[0];
                const second = cur[1];

                if(!acc[first] || !acc[second]){
                    return acc;
                }

            const hasFight = Object.keys(acc[first])
                .filter((tech) => tech !== "totalSkill")
                .some((technique) => {
                    return Object.keys(acc[second]).includes(technique);
                })

                if(hasFight){
                    const loser = acc[first].totalSkill < acc[second].totalSkill ? first : second;

                    delete acc[loser];
                }
            }


            return acc;
        }, {});

    // // to Sort by total skill for each gladiator - make new prop of the object: totalSkill
    // Object.keys(gladiatorsData).forEach((gladiatorName) => {
    //     gladiatorsData[gladiatorName].totalSkill = Object.values(gladiatorsData[gladiatorName])
    //     // .reduce((a, b) => a+b)) // or
    //         .reduce((acc, cur) => {
    //             return acc + cur;
    //         }, 0);
    // });

    Object.keys(gladiatorsData)
        .sort((g1, g2) => {
            return gladiatorsData[g2].totalSkill - gladiatorsData[g1].totalSkill || g1 - g2; // g1.localeCompare(g2)
        })
        .forEach((name) => {
            console.log(`${name}: ${gladiatorsData[name].totalSkill} skill`);

            Object.keys(gladiatorsData[name])
                .filter(t => t !== "totalSkill")
                .sort((g1, g2) => {
                    return gladiatorsData[name][g2] - gladiatorsData[name][g1] || g1 - g2; // g1.localeCompare(g2)
                })
                .forEach((t) => {
                    console.log(`- ${t} <!> ${gladiatorsData[name][t]}`)
                })
        })

}

// var.2:
// function f(lines) {
//     let result = new Map();
// 1. От масива със стрингове правим масив от обекти:
//     for (let line of lines) {
//         if(line=== "Ave Cesar"){
//             break;
//         }
//
//         let [name, technique, skill]= line.split(/\s+->\s+/);
//         name = name.trim();
//         if(!result.has(name)){
//             result.set(name, new Map());
//         }
//         if(!result.get(name).has(technique)){
//             result.get(name).set(technique, 0);
//         }
//
//         if(!result.get(name).has(technique) ||
//          (result.get(name).has(technique) && result.get(name).get(technique) < skill)) {
//             result.get(name).set(technique, skill);
//         }
//     }
//
// 2. Sort:
//     // как да подредя имената по общите точки - ВИЖ??????????
//     // let sortedGladiators = Object.keys(result).sort((g1, g2) => {
//     //     let skillG1 = Object.values(result.get(g1)).reduce((x, y) => x + y);
//     //     let skillG2 = Object.values(result.get(g2)).reduce((x, y) => x + y);
//     //
//     //     return skillG1- skillG2 === 0 ? g1.localeCompare(g2) : skillG2-skillG1;
//     // })
//     let sortedGladiators = [...result.keys()].sort((g1, g2) => {
//         let skillG1 = [...result.get(g1).values()].reduce((x, y) => x + y);
//         let skillG2 = [...result.get(g2).values()].reduce((x, y) => x + y);
//
//         return skillG1- skillG2 === 0 ? g1.localeCompare(g2) : skillG2-skillG1;
//     })
//
//     for (let gladiator of sortedGladiators) {
//         let totalSkill = [...result.get(gladiator).values()].reduce((x, y) => x + y);
//
//         console.log(`${gladiator}: ${totalSkill} skill`);
//
//         let sortedSkills = [...result.get(gladiator).keys()];
//         sortedSkills.sort((a, b) => {
//             let skillDiff = result.get(gladiator).get(b) - result.get(gladiator).get(a);
//             return skillDiff === 0 ? a.localeCompare(b) : skillDiff;
//         });
//
//         for (let skill of sortedSkills) {
//             console.log(`- ${skill} <!> ${result.get(gladiator).get(skill)}`);
//         }
//     }
// }

f(['Pesho -> BattleCry -> 400',
    '    Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    '    Stamat -> Tiger -> 250',
    // ' Ave Cesar'
])