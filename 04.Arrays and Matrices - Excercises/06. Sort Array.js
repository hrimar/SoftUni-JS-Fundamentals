// // var.1 - // 80/100 ?
// function sortByTwoCriteria(arr) {
//     let result = arr.sort((a, b) =>a.length - b.length)
//         .sort((a, b) => a-b);
//
//     console.log(result.join('\n'));
// }

// // var.2 - // 100/100
// function sortByTwoCriteria(arr) {
//     let result = arr.sort(compare);
//
//     function compare(a, b)  {
//         if (a.length > b.length) {
//             return 1;
//         } else if (a.length < b.length) {
//             return -1;
//         } else {
//             if (a > b) {
//                 return 1;
//             } else if (a < b) {
//                 return -1;
//             } else {
//                 return 0;
//             }
//         }
//     }
//     console.log(result.join('\n'));
// }

// // var.3 - // 100/100 - но ЗАЩО СА РАЗМЕНЕНИ .sort() ????!!!!???
// function sortByTwoCriteria(arr) {
//     let result = arr.sort().sort((a, b) => a.length > b.length);
//
//     console.log(result.join('\n'));
// }

// var.1 - // 100/100
function sortByTwoCriteria(arr) {
    let result = arr.sort((a, b) =>a.length - b.length || a.localeCompare(b));

    console.log(result.join('\n'));
}

// // var.5
// let specialSortedArray = arr => arr.sort((a, b) =>
//     a.length - b.length !== 0 ? a.length - b.length
//         : a.toLowerCase() < b.toLowerCase() ? -1
//         : a.toLowerCase() > b.toLowerCase() ? 1
//             : 0)
//     .join('\n');

sortByTwoCriteria(['alpha', 'beta', 'gamma', 'test']);