function f(input) {     // 100/100
    let set = new Set();
    for (let name of input) {
        set.add(name);
    }
    // //console.log(set);
    // let sortedNames = Array.from(set).sort((a, b) => a.length - b.length ||  // !!!
    //         a.localeCompare(b));

    let sortedNames = [...set].sort((a, b) => a.length - b.length ||  // !!!
        a.localeCompare(b));

   console.log([...sortedNames].join('\n'));
}
f(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
)