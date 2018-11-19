// function figure(n) {
//     //var .    100 / 100
//
//     function dash(n) {
//         console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
//     }
//
//     function space(n) {
//         console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
//     }
//
//
//     if (n <= 4) {
//         if (n % 2 == 0) {
//             for (let i = 1; i < n; i++) {
//                 dash(n);
//             }
//         }
//         else {
//             for (let i = 0; i < n; i++) {
//                 dash(n);
//             }
//         }
//     }
//     else if (n > 4) {
//         console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');
//         for (let i = 7; i <= n; i += 2) {
//             space(n);
//         }
//         space(n);
//         dash(n);
//         space(n);
//         for (let i = 7; i <= n; i += 2) {
//             space(n);
//         }
//         dash(n);
//     }
// }

// var.2: 100/100
function figure(n) {
    if (n == 2) {
        console.log('+'.repeat(3));
    }
    else {
        console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
        for (let i = 1; i < n / 2 - 1; i++) {
            console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
        }
        console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
        for (let i = 1; i < n / 2 - 1; i++) {
            console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
        }
        console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+')
    }
}


figure(4);
figure(5);
figure(6);
figure(7);

