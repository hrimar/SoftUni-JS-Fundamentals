function f(str, delimiter) { // 100/100
let result = str.split(delimiter)
    console.log(result.join('\n'));
}
f('One-Two-Three-Four-Five', '-')