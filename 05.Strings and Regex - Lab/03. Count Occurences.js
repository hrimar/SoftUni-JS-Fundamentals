// var.1: // 100/100 !!!!
// function f(surched, text) {
//     let counter = 0;
//     let index = text.indexOf(surched);
//     while (index > -1) {
//         counter++;
//         index = text.indexOf(surched, index+1); // !!!
//     }
//     console.log(counter);
// }

// var.2: with REGEX 75/100 ??????????
function f(surched, text) {
     let regex = new RegExp(`${surched}`, 'gm')
     let result = text.match(regex);
    if(result === null){
        console.log(0);
    }else
         console.log(result.length);
}
f('the', 'The quick brown fox jumps over the lay dog.')
console.log();
f('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')