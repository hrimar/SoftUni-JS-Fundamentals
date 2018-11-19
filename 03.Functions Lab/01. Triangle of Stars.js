// function triangleOfStars(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('*'.repeat(i));
//     }
//     downTriangle(n);
//     function downTriangle(n) {
//         for (let i = n-1; i >= 1; i--) {
//             console.log('*'.repeat(i));
//         }
//     }
// }

function triangleOfStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }

    (function downTriangle(n) {
        for (let i = n-1; i >= 1; i--) {
            console.log('*'.repeat(i));
        }
    })(n)
}
triangleOfStars(2)
console.log('');
triangleOfStars(5)

