function f(arr) { //  75/100 if we check for null 100/100
     let regex = /www\.([A-Za-z0-9-]+)(\.[a-z]+)+/gm;
     let str= arr.join(' ');
    let matches = str.match(regex); // правим ли това, то винаги проверявай дали е === null
    if(matches === null){
        console.log('');
    } else
    console.log(matches.join('\n'));
}

f(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']
)
console.log('');
f(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc']
)
console.log('');

// let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/gm