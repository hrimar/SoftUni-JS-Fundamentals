function f(input) {  //100/100 BETTER SOLUTION !!!
    String.prototype.htmlEscape = function(){ // var.1 !!!
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    // let escape = function (text){ // var.2
    //    if(typeof text === 'string'){
    //        return text.replace(/&/g, '&amp;')
    //            .replace(/</g, '&lt;')
    //            .replace(/>/g, '&gt;')
    //            .replace(/"/g, '&quot;')
    //            .replace(/'/g, '&#39;');
    //    } else {
    //        return text;
    //    }
    // };

    let html = '<table>\n';

    for (let json of input) {
        html += '\t<tr>\n';
        let obj = JSON.parse(json);

        for (let value of Object.values(obj)) {
            html += `\t\t<td>${value.toString().htmlEscape()}</td>\n`;  // !!!
        }
        html += '\t</tr>\n';
    }
    html += '</table>'
    console.log(html);


}


// function f(input) {  //100/100
//     let html = '<table>\n';
//
//     for (let json of input) {
//         html += '\t<tr>\n';
//         let obj = JSON.parse(json);
//
//         for (let key of Object.keys(obj)) {
//             html += `\t\t<td>${obj[key]}</td>\n`;
//         }
//         html += '\t</tr>\n';
//     }
//     html += '</table>'
//     console.log(html);
// }
f(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)