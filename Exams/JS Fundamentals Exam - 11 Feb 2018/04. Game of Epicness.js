function solve(kingdomsArr, battlesArr) {  // 100/100 !!!!
    // Map(kingdom, Map(general, {army, losses, wins}))
    let kingdomsMap = new Map();

    // Step 1. Fill the kingdom map
    for(let kingdomObj of kingdomsArr) {
        let kingdomName = kingdomObj['kingdom'];
        let generalName = kingdomObj['general'];
        let army = kingdomObj['army'];

        if (!kingdomsMap.has(kingdomName)) {
            kingdomsMap.set(kingdomName, new Map());
        }

        let generalsMap = kingdomsMap.get(kingdomName); // the inner Map

        if (!generalsMap.has(generalName)) {
            generalsMap.set(generalName, {armyCount: 0, wins: 0, losses: 0});
        }

        let generalObj = generalsMap.get(generalName);
        generalObj['armyCount'] += army;
    }

    // Step 2. Battle
    for(let row of battlesArr) {
        let [attackingKingdom, attackingGeneral,
            defendingKingdom, defendingGeneral] = row;

        if (attackingKingdom === defendingKingdom) {
            continue;
        }

        let attackingArmy = kingdomsMap
            .get(attackingKingdom)
            .get(attackingGeneral);

        let defendingArmy = kingdomsMap
            .get(defendingKingdom)
            .get(defendingGeneral);

        if (attackingArmy['armyCount'] > defendingArmy['armyCount']) {
            attackingArmy['wins']++;
            defendingArmy['losses']++;
            attackingArmy['armyCount']
                = Math.floor(attackingArmy['armyCount'] * 1.1);
            defendingArmy['armyCount']
                = Math.floor(defendingArmy['armyCount'] * 0.9);
        }

        if (attackingArmy['armyCount'] < defendingArmy['armyCount']) {
            defendingArmy['wins']++;
            attackingArmy['losses']++;
            attackingArmy['armyCount']
                = Math.floor(attackingArmy['armyCount'] * 0.9);
            defendingArmy['armyCount']
                = Math.floor(defendingArmy['armyCount'] * 1.1);
        }
    }

    // Step 3. Sort the map
    // 1. General wins descending
    // 2. General losses ascending
    // 3. Kingdom name ascending
    let sortedKingdom = [...kingdomsMap.entries()]
        .sort(sortKingdoms)[0];
    console.log(`Winner: ${sortedKingdom[0]}`);
    let sortedGenerals = [...sortedKingdom[1].entries()]
        .sort((a, b) => {
            let aCount = a[1]['armyCount'];
            let bCount = b[1]['armyCount'];

            return bCount - aCount;
        });

    for(let [generalName, generalObj] of sortedGenerals) {
        console.log(`/\\general: ${generalName}`);
        console.log(`---army: ${generalObj['armyCount']}`);
        console.log(`---wins: ${generalObj['wins']}`);
        console.log(`---losses: ${generalObj['losses']}`);
    }

    function sortKingdoms(a, b) {
        let [kingdomAName, generalsAMap] = a;
        let [kingdomBName, generalsBMap] = b;

        let kingdomAWins = [...generalsAMap.entries()]
            .map(kA => kA[1].wins)
            .reduce((c, d) => c + d);
        let kingdomBWins = [...generalsBMap.entries()]
            .map(kB => kB[1].wins)
            .reduce((c, d) => c + d);

        let firstCriteria = kingdomBWins - kingdomAWins;
        if (firstCriteria === 0) {
            let kingdomALosses = [...generalsAMap.entries()]
                .map(kA => kA[1].losses)
                .reduce((c, d) => c + d);
            let kingdomBLosses = [...generalsBMap.entries()]
                .map(kB => kB[1].losses)
                .reduce((c, d) => c + d);

            let secondCriteria = kingdomALosses - kingdomBLosses;
            if (secondCriteria === 0) {
                return kingdomAName.localeCompare(kingdomBName);
            }

            return secondCriteria;
        }

        return firstCriteria;
    }
}
solve([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
)