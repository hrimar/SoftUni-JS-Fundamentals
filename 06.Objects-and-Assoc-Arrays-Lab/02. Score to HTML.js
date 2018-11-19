// var.1 - 100/100
function f(arr) {

    let replaced = function(text){      // !!!!!!
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    let html = '<table>\n';
    html+='\t<tr><th>name</th><th>score</th></tr>\n'
            //let objects = arr[0].split(','); // strange???
    for (let object of JSON.parse(arr)) {
        //console.log(object);
       html+=`\t<tr><td>${replaced(object["name"])}</td><td>${+object["score"]}</td></tr>\n`;
    }

    html+='</table>';

    console.log(html);
}
f(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'])
console.log('')
f(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'])