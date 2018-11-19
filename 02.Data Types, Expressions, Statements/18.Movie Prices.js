// var 2 - 100/100 !
function movie(input) {
    let name = input[0].toLowerCase();
    let day = input[1].toLowerCase();
    if (name === 'The Godfather'.toLowerCase()) {
        switch (day) {
            case "monday":
                return 12;
                break;
            case "tuesday":
                return 10;
                break;
            case "wednesday":
                return 15;
                break;
            case "thursday":
                return 12.50;
                break;
            case "friday":
                return 15;
                break;
            case "saturday":
                return 25;
                break;
            case "sunday":
                return 30;
                break;
            default:
                return 'error';
                break;
        }
    } else if (name === 'Schindler\'s List'.toLowerCase()) {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8.5;
                break;
            case "saturday":
            case "sunday":
                return 15;
                break;
            default:
                return 'error';
                break;
        }
    } else if (name === 'Schindler\'s List'.toLowerCase()) {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8.5;
                break;
            case "saturday":
            case "sunday":
                return 15;
                break;
            default:
                return 'error';
                break;
        }
    } else if (name === 'Casablanca'.toLowerCase()) {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8;
                break;
            case "saturday":
            case "sunday":
                return 10;
                break;
            default:
                return 'error';
                break;
        }
    } else if (name === 'The Wizard of Oz'.toLowerCase()) {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 10;
                break;
            case "saturday":
            case "sunday":
                return 15;
                break;
            default:
                return 'error';
                break;
        }
    }
    else {
        return 'error';
    }
}
console.log(movie(['SoftUni', 'Nineday']));

// //var.1: - // 100/100
// function movie([name, day]) {
//     let price = 8;
//     name = name.toLowerCase();
//     day = day.toLowerCase();
//     if (name === 'The Godfather'.toLowerCase()) {
//         switch (day) {
//             case "monday":
//                 price = 12;
//                 console.log(price);
//                 break;
//             case "tuesday":
//                 price = 10;
//                 console.log(price);
//                 break;
//             case "wednesday":
//                 price = 15;
//                 console.log(price);
//                 break;
//             case "thursday":
//                 price = 12.50;
//                 console.log(price);
//                 break;
//             case "friday":
//                 price = 15;
//                 console.log(price);
//                 break;
//             case "saturday":
//                 price = 25;
//                 console.log(price);
//                 break;
//             case "sunday":
//                 price = 30;
//                 console.log(price);
//                 break;
//             default:
//                 price = 'error';
//                 console.log(price);
//                 break;
//         }
//     } else if (name === 'Schindler\'s List'.toLowerCase()) {
//         switch (day) {
//             case "monday":
//             case "tuesday":
//             case "wednesday":
//             case "thursday":
//             case "friday":
//                 price = 8.5;
//                 console.log(price);
//                 break;
//             case "saturday":
//             case "sunday":
//                 price = 15;
//                 console.log(price);
//                 break;
//             default:
//                 price = 'error';
//                 console.log(price);
//                 break;
//         }
//     } else if (name === 'Schindler\'s List'.toLowerCase()) {
//         switch (day) {
//             case "monday":
//             case "tuesday":
//             case "wednesday":
//             case "thursday":
//             case "friday":
//                 price = 8.5;
//                 console.log(price);
//                 break;
//             case "saturday":
//             case "sunday":
//                 price = 15;
//                 console.log(price);
//                 break;
//             default:
//                 price = 'error';
//                 console.log(price);     break;
//         }
//     } else if (name === 'Casablanca'.toLowerCase()) {
//         switch (day) {
//             case "monday":
//             case "tuesday":
//             case "wednesday":
//             case "thursday":
//             case "friday":
//                 price = 8;
//                 console.log(price);     break;
//             case "saturday":
//             case "sunday":
//                 price = 10;
//                 console.log(price);     break;
//             default:
//                 price = 'error';
//                 console.log(price);     break;
//         }
//     } else if (name === 'The Wizard of Oz'.toLowerCase()) {
//         switch (day) {
//             case "monday":
//             case "tuesday":
//             case "wednesday":
//             case "thursday":
//             case "friday":
//                 price = 10;
//                 console.log(price);
//                 break;
//             case "saturday":
//             case "sunday":
//                 price = 15;
//                 console.log(price);
//                 break;
//             default:
//                 price = 'error';
//                 console.log(price);
//                 break;
//         }
//     }
//     else{
//         console.log('error');
//     }
// }

//movie(['The Godfather', 'Friday']);
//movie(['casablanca', 'sunday']);
//movie(['SoftUni', 'Nineday']);