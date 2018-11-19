// var.2:    100/100 - SHORTER !!!
function cooking(input) {
    let [n, op1, op2, op3, op4, op5] = [+(input[0]), input[1], input[2],
                                        input[3], input[4], input[5]];

    let  divide = (n) => n/2;
    let square = (n) => Math.sqrt(n);
    let spice = (n) => n+1;
    let bake =(n) => n*3;
    let fillet =(n)=>(n-n*0.2);

    function printResult(n) {
         console.log(n);
    }

    for (let op of [op1, op2, op3, op4, op5]) {
        switch(op){
            case 'chop':
                n= divide(n);
               printResult(n); break;
            case 'dice':n = square(n);
                printResult(n); break;
            case 'spice':
                n= spice(n);
                printResult(n); break;
            case 'bake':
                n=bake(n);
                printResult(n); break;
            case 'fillet':
                n=fillet(n);
                printResult(n); break;
        }
    }
}


// // var.1:    100/100
// function cooking(input) {
//     let n = input[0];
//     for (let i = 1; i < input.length; i++) {
//        let action = input[i];
//        switch(action){
//            case 'chop':
//                n=divide(n);
//                printResult(n); break;
//            case 'dice':
//                n=square(n);
//                printResult(n); break;
//            case 'spice':
//               n= spice(n);
//                printResult(n); break;
//            case 'bake':
//               n= bake(n);
//                printResult(n); break;
//            case 'fillet':
//                n= fillet(n);
//                printResult(n); break;
//        }
//     }
//
//     function divide(n) {
//         return n/2;
//     }
//     function square(n) {
//         return Math.sqrt(n);
//     }
//     function spice(n) {
//         return n+1;
//     }
//     function bake(n) {
//         return n*3;
//     }
//     function fillet(n) {
//         return (n-n*0.2);
//     }
//     function printResult(n) {
//         console.log(n);
//     }
// }
//cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cooking([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])