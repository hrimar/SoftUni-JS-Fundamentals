function f(imput) {  // 100/100
    let products = [];
    let totalPrice = 0;

    for (let i = 0; i < imput.length; i++) {
       if(i %2 ===0){
           products.push(imput[i]);
       } else if(i %2 === 1) {
           totalPrice += +imput[i];
       }
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${totalPrice}`)
}

f(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69'])
console.log('');
f(['Cola', '1.35', 'Pancakes', '2.88']);