// 1. Array:
let arr = [1, 2, 3, 2];
// let str = arr.join(',');
// console.log(arr);
// console.log(str);
// console.log('');
// let strJ = JSON.stringify(arr);
// console.log(strJ);
// console.log('');
// let strToStr = arr.toString();
// console.log(strToStr);
// console.log('');
// arr.pop();
// console.log(arr);

//let result = arr.find((a) => a===2);

//let result = arr. reduceRight((acc, cur) => {acc.push(cur); return acc}, []);

//let result = arr.sort((a, b) => a-b);

let result  = arr.reduce((acc, cur) => {
    return acc +cur;
}, 10)
console.log(result);

// 2. Print the index of the elements higher then 50:
let matrix = [
    [5, 55, 15],
    [60, 71, 1]
];

let biggest =[];
matrix.forEach((r, j)=>{
    r.forEach((c, i)=> {
        if(matrix[j][i]>50){
            biggest.push(`[${j} : ${i}]`)
        }
    })
});
console.log(biggest);