// var.1:
function properties(input) { // 100/100
    let obj = {};
    for (let i = 0; i < input.length - 1; i += 2) {
        obj[input[i]] = input[i + 1];
    }

    console.log(obj);
}

// // var.2  - ОК but Judge does nat accept it
// function properties([name, nameP, age, ageP, gender, genderP]) {
//     let obj = {
//         name: nameP,
//         age: ageP,
//         gender: genderP
// }
//
//     console.log(obj);
// }

// // var.3  - ОК but Judge does nat accept it
// function properties(input) {
//     let name= input[0];
//     let nameP= input[1];
//     let age= input[2];
//     let ageP = input[3]
//     let gender=input[4];
//     let genderP =input[5]
//     let obj = {
//         name: nameP,
//         age: ageP,
//         gender: genderP
// }
//
//     console.log(obj);
// }

properties(['name', 'Pesho', 'age', '23', 'gender', 'male']);