function f(meals, commands) { // 62/100
    let eatenMeals = 0;

    for (let command of commands) {
        command = command.split(' ');
        if(command[0].toLowerCase() === 'serve') {
            if (meals.length < 1) {             // !!!!!!!!!
                break;
            }
            serve();
        } else if(command[0].toLowerCase() ===  'eat') {
            if (meals.length < 1) {             // !!!!!!!!!
                break;
            }
                  eat();
        } else if(command[0].toLowerCase() === 'add'){
            add(command[1]);
        } else if(command[0].toLowerCase() === 'shift'){
            shift(command[1], command[2]);
        } else if(command[0].toLowerCase() === 'consume'){
            consume(command[1], command[2]);
        } else if(command[0].toLowerCase() === 'end'){
            if(meals.length===0){
                console.log('The food is gone');
            } else {
                console.log(`Meals left: ${meals.join(', ')}`);
            }
            console.log(`Meals eaten: ${eatenMeals}`);
            break;
        }
    }

    function serve() {
        console.log(`${meals.pop()} served!`);
    }
    function add(meal) {
        if(meals != undefined) {       // !
            meals.unshift(meal);
        }
    }
    function eat() {
        console.log(`${meals.shift()} eaten`);
        eatenMeals++;
    }
    function shift(index1, index2) {
        if(meals[index1] != undefined && meals[index2] != undefined) {
            let meal1 = meals[index1];
            let meal2 = meals[index2];
            meals[index1] = meal2;
            meals[index2] = meal1;
        }
    }
    function consume(index1, index2) {
        if(meals[index1] != undefined && meals[index2] != undefined) {
            let count = index2 - index1 + 1;
            meals.splice(index1, count);
            eatenMeals += count;
            console.log('Burp!');
        }
    }
}

f(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        //'Add cool',
        'End',
        'Consume 0 1']
)
console.log('');
f(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']
)
console.log('');
f(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]
)
console.log('');
f(['chicken', 'steak', 'eggs'],
['Serve',
'Eat',
'End',
'Consume 0 1'])