function f(arr) {       // 85/100
     let regexName = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9\-]{10}(?= |\t|$)/g;
    let idRegex = /![A-Za-z0-9]+(?= |\t|$)/g;
    let codeRegex = /_[A-Za-z0-9]+(?= |\t|$)/g;

    for (let str of arr) {
        let replacedNames=str;
        let namesMatches = replacedNames.match(regexName);
        if(namesMatches !== null){
            for (let match of namesMatches) {
                replacedNames = replacedNames.replace(match, '|'.repeat(match.length));
            }
        }

        let replacedId=replacedNames;
        let idMatches = replacedId.match(idRegex);
        if(idMatches !== null){
            for (let match of idMatches) {
                replacedId = replacedId.replace(match, '|'.repeat(match.length));
            }
        }

        let replacedPhone=replacedId;
        let phoneMatches = replacedPhone.match(codeRegex);
        if(phoneMatches !== null){
            for (let match of phoneMatches) {
                replacedPhone = replacedPhone.replace(match, '|'.repeat(match.length));
            }
        }

        let replacedCode=replacedPhone;
        let codeMatches = replacedCode.match(phoneRegex);
        if(codeMatches !== null){
            for (let match of codeMatches) {
                replacedCode = replacedCode.replace(match, '|'.repeat(match.length));
            }
        }
        console.log(replacedCode);
    }
}

function f(arr) {       // 100/100
    let regexName = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9\-]{10}(?= |\t|$)/g;
    let idRegex = /![A-Za-z0-9]+(?= |\t|$)/g;
    let codeRegex = /_[A-Za-z0-9]+(?= |\t|$)/g;

    for (let str of arr) {
        str = str.replace(regexName, s => '|'.repeat(s.length));
        str = str.replace(phoneRegex, s => '|'.repeat(s.length));
        str = str.replace(idRegex, s => '|'.repeat(s.length));
        str = str.replace(codeRegex, s => '|'.repeat(s.length));

        console.log(str);
    }
}

f(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.'] )
console.log('');
f(['I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work"', 'with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']
)