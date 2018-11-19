function array(arr) {       // Again !!!!!!
    let counter = 1;
    let result = [];

    for (let command of arr) {
        // if (command.toLowerCase() === "add") { // Again 100/100
        //    // console.log(counter);
        //     result.push(counter++);
        // } else if (command.toLowerCase() === "remove") {
        //        result.pop();
        //         counter++
        // }

        command.toLowerCase() === 'add' ? result.push(counter++)  // !!! Again 100/100
            : result.pop(counter++);
    }

    console.log(result.length === 0 ? 'Empty': result.join('\n'));
}

// If arr is empty it is not problem to say: arr.opp(); !!!

array(['add', 'add', 'add', 'add']);
console.log('');
array(['add', 'add', 'remove', 'add', 'add'])
console.log('');
array(['remove', 'remove', 'remove'])