// function nonDescending(arr) {       // 100/100
//     let currentElement = arr[0];
//     let resultArr = [currentElement];
//
//     for (let i = 1; i < arr.length; i++) {
//         if (currentElement>arr[i]){
//             continue
//         } else{
//             resultArr.push(arr[i])
//         }
//         currentElement=arr[i];
//     }
//     console.log(resultArr.join('\n'));
// }

// function nonDescending(arr) { // CHECK more for the  .apply !!!!
//     let resultArr = arr
//         .filter((e, i) => e >= Math.max.apply(null, arr.slice(0, i)));
//
//     console.log(resultArr.join('\n'));
// }

function nonDescending(arr) { // a is the samo arr !!!!!!!!
    let resultArr = arr
        .filter((e, i, а) => a[i]<a[i+1}]);

    console.log(resultArr.join('\n'));
}
nonDescending([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ])