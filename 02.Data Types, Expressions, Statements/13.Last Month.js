function lastMonth(input) { // AGAIN
    let date = new Date(input[2], input[1]-1, 0).getDate(); // !!!

    console.log(date);
}
lastMonth([13, 12, 2004]);


