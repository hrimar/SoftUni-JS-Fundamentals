function f(arr) {       // 100/100
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let string  of arr) {
        let match = regex.exec(string);
        if(match !== null){
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`)
        }
    }
}

f(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
)
console.log('');
f(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader']
)