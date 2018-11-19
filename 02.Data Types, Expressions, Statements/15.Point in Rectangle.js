
// // var.1:
// function pointsInRectangle([x, y, xMin, xMax, yMin, yMax]) { // 100/100
//     if (x>=xMin && x<=xMax && y>= yMin && y<= yMax){
//         console.log('inside');
//     } else {
//         console.log('outside');
//     }
// }

// var.2:
function pointsInRectangle(input) { // 100/100
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
    if (x>=xMin && x<=xMax && y>= yMin && y<= yMax){
        console.log('inside');
    } else {
        console.log('outside');
    }
}

pointsInRectangle([8, -1, 2, 12, -3, 3]);
pointsInRectangle([12.5, -1, 2, 12, -3, 3]);