function template(input) {      // 100/100
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n';
    result+= '<quiz>\n';
    for (let i = 0; i < input.length; i+=2) {
        xml(input[i], input[i+1]);
    }
    result+= '</quiz>';

    function xml(question, reply) {
        result+= '\t<question>\n';
        result+='\t\t'+question+'\n';
        result+= '\t</question>\n';
        result += '\t<answer>\n';
        result+= '\t\t'+reply+'\n';
        result += '\t</answer>\n';
    }

    console.log(result);
}

//template(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
template(["Dry ice is a frozen form of which gas?",   "Carbon Dioxide",    "What is the brightest star in the night sky?",    "Sirius"]);