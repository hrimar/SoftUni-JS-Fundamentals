// // var1:
// function insideVolume(input) {            // 100/100 again
//     for (let i = 0; i < input.length; i += 3) {
//         if (inVolume(input[i], input[i + 1], input[i + 2])) {
//             console.log('inside');
//         } else {
//             console.log('outside');
//         }
//     }
//
//     function inVolume(x, y, z) {
//         if (x >= 10 && x <= 50 && y >= 20 && y <= 80 && z >= 15 && z <= 50) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }


// var2:
function insideVolume(input) {            // 100/100 again
    let inVolume =  function (x, y, z) {
        if (x >= 10 && x <= 50 && y >= 20 && y <= 80 && z >= 15 && z <= 50) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < input.length; i += 3) {
        if (inVolume(input[i], input[i + 1], input[i + 2]) == true) {
            console.log('inside');
        } else  if (inVolume(input[i], input[i + 1], input[i + 2]) == false) {
            console.log('outside');
        }
    }
}
insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);

