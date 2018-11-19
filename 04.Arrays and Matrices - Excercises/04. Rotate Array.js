// //var.1:// 100/100
// function rotationToRight(arr) {
//     let count = arr.pop(); // Number(arr.pop());
//
//     for (let i = 0; i < count % arr.length; i++) {  // !!!
//        let temp = arr[arr.length-1];
//         for (let j = arr.length-1; j >=1; j--) {
//             arr[j]= arr[j-1];
//         }
//         arr[0]=temp;
//     }
//
//    console.log(arr.join(' '));
// }

//var.2:// 100/100 - shortest!
function rotationToRight(arr) {
    let count = Number(arr.pop());
    count %= arr.length;

    for (let i = 0; i < count; i++) {  // !!!
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

rotationToRight([1, 2, 3, 4, 2]);
console.log('');
rotationToRight(['Banana', 'Orange', 'Coconut', 'Apple', 15]);
console.log('');