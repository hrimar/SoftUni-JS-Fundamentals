function everyNelement(arr) {   //100/100
    let step = +(arr.pop());

    for (let i = 0; i < arr.length; i += step) {
        console.log(arr[i]);
    }
}

everyNelement([5, 20, 31, 4, 20, 2]);
console.log('')
everyNelement(['dsa', 'asd', 'test', 'tset', 2])