// var.1: // 100/100 Again !!!
function calculator(a, b, op) {
    let calc = function(a, b, op) {
        return op(a, b)
    };

let sum = (a, b) => {return a + b};
let minus = (a, b) => {return a - b};
let multiply = (a, b) => {return a*b};
let devide = (a, b) => {return a /b};

        switch (op) {
            case '+':
                return calc(a, b, sum); break; // не се извиква sum(a, b) !!!
            case '-':
                return minus(a, b, minus); break;
            case '*':
                return multiply(a, b, multiply); break;
            case '/':
                return devide(a, b, devide);  break;
        }
}

// // var.2 - shorter, but not good:
//  function calculator(a, b, op) {
//      return eval(a + op + b)
//  }

let c = calculator; // не се извиква sum(a, b) !!!
console.log(c(2, 4, '+'));
console.log('');
console.log(calculator(3, 3, '/'));
console.log('');
console.log(calculator(18, -1, '*'));