function f(input) { // 100/100
    let text = input.join(' ').toLowerCase();
   let words = text.match(/[A-Za-z]+/gm);

    let result = new Set();

    for (let word of words) {
        result.add(word);
    }

    console.log([...result].join(', ')); // print of Set as string!!!
}

f(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
)