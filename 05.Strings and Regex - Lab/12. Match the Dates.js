// function f(arr) {       // 66/100 - ЗАЩОТО В ЕНО ИЗРЕЧЕНИЕ МОЖЕ ДА ИМА НЯКОЛКО ДАТИ, МАКАР ДА НЕ СЕ КАЗВА
//     let regex = /\b(?<day>[0-9]{1,2})-(?<month>[A-Z][a-z]{2})-(?<year>[1-2][0-9]{3})\b/;
//     //let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/;
//     for (let sequence of arr) {
//         let match = regex.exec(sequence);
//         if (match) {
//             let date = match[0];
//             console.log(`${date} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
//         }
//     }
// }

function f(arr) {    // VAR.2 - LAB 12. Match the Dates - 100/100 !!!
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let match = pattern.exec(arr[i]);
        while (match) {                 // ако в едно изречение има няколко дати
            result += `${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})\n`;
            match = pattern.exec(arr[i]);
        }
    }
    console.log(result);
}

f(['I am born on 30-Dec-1994 and die on 12-Dec-2086.',
    'This is not date: 512-Jan-1996.']
)
// console.log('');
// f(['1-Jan-1999 is a valid date.',
//     'So is 01-July-2000.',
//     'I am an awful liar, by the way – Ivo, 28-Sep-2016.']
// )


// function f(arr) {    // VAR .3 - 100/100
//     let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
//     let dates = []
//     let match;
//     for (let sentence of arr) {
//         while (match = pattern.exec(sentence)) {
//             dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
//         }
//     }
//     console.log(dates.join("\n"));
// }