function f(arrays) { // 100/100
    let sorted = [];
    for (let line of arrays) {
        let arr = JSON.parse(line).map(a=>+ a).sort((a,b) => b-a)

        let sum = arr.reduce((a, b) => a+b);

        if(!sorted.find(arr=>arr.reduce((a, b) => a+b)=== sum)){
            sorted.push(arr);
        }
    }
    let result = sorted.sort((a,b) => a.length -b.length);
    for (let arr of result) {
        console.log('[' +arr.join(', ') + ']');
    }
}
f(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
)