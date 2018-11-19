// function locator(params) { //100/100
//     for (let i = 0; i < params.length; i+=2) {
//         checkTheseCoordnates([params[i], params[i+1]])
//     }
//
//     function checkTheseCoordnates([x,y]) {
//         if(pointsInRectangle([x,y, 1, 3, 1, 3])){
//            console.log('Tuvalu');
//        }else if(pointsInRectangle([x,y, 0, 2, 6, 8])){
//            console.log('Tonga');
//        }else if(pointsInRectangle([x,y, 5, 7, 3, 6])){
//            console.log('Samoa');
//        }else if(pointsInRectangle([x,y, 4, 9, 7, 8])){
//            console.log('Cook');
//        }else if(pointsInRectangle([x,y, 8, 9, 0, 1])){
//             console.log('Tokelau');
//        }else{
//            console.log('On the bottom of the ocean');
//        }
//     }
//
//    function pointsInRectangle([x, y, xMin, xMax, yMin, yMax]) {
//         //let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
//         if (x>=xMin && x<=xMax && y>= yMin && y<= yMax){
//             return true;
//         } else {
//           return false;
//         }
//     }
// }


// var.2:        100/100
function locator(params) {
    for (let i = 0; i < params.length; i+=2) {
        checkTheseCoordnates([params[i], params[i+1]])
    }

    function checkTheseCoordnates([x,y]) {
        if( x>=1 && x<=3 && y>=1  && y<=3){
            console.log('Tuvalu');
        }else if(x>=0 && x<=2 && y>=6  && y<=8){
            console.log('Tonga');
        }else if(x>=5 && x<=7 && y>=3  && y<=6){
            console.log('Samoa');
        }else if(x>=4 && x<=9 && y>=7  && y<=8){
            console.log('Cook');
        }else if(x>=8 && x<=9 && y>=0  && y<=1) {
            console.log('Tokelau');
        } else{
            console.log('On the bottom of the ocean');
        }
    }
}
locator([4, 2, 1.5, 6.5, 1, 3]);
console.log('');
locator([6, 4]);
