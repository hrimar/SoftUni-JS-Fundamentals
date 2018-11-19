
function negativElem(params) {
     let result =[];

    // var.1: // 100/100
    // for (let i = 0; i < params.length; i++) {
    //     if (params[i]<0){
    //         result.unshift(params[i]);
    //     } else {
    //         result.push(params[i]);
    //     }
    // }

    // var.2: // 100/100
    params.forEach(element => { element < 0
        ? result.unshift(element): result.push(element);
    });

     result.forEach(e=>console.log(e));
}

negativElem([7, -2, 8, 9]);
console.log('');
negativElem([3, -2, 0, -1]);