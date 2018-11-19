function table(n) {
    n = Number(n);
    let html = '';
    html += '<table border="1">\n';
    html += '\t<tr><th>x</th>';

    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += '</tr>\n';

    for (let i = 1; i <= n; i++) { // rows
        html += `\t<tr><th>${i}</th>`;

        for (let j = 1; j <= n; j++) { // cols
            html += `<td>${i * j}</td>`;

        }

        html += '</tr>\n';
    }
    html+='</table>\n';
    console.log(html);
}

table(5); // 100/100