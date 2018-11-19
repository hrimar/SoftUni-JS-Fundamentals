function f(input) {
    // var.2 - 100/100 -with .EXEC
    let surveyReg = /<svg>((.|\n)*?)<\/svg>/g;
    let catReg = /<cat><text>((.|\n)*?)\[((.|\n)*?)]((.|\n)*?)<\/text><\/cat>\s*<cat>((.|\n)*?)<\/cat>/g;
    let ratingsReg = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g;

    if(!surveyReg.test(input)) {
        console.log('No survey found');
    } else if (!catReg.test(input)) {
        console.log('Invalid format');
    } else {
        catReg = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
        let matches = catReg.exec(input);
        let label = matches[3];
        let ratings = ratingsReg.exec(input);
        let sum = 0;
        let votesCount = 0;
        while(ratings) {
            let value = Number(ratings[1]);
            let count = Number(ratings[2]);

            if (value <= 0 || value > 10) {
                ratings = ratingsReg.exec(input);
                continue;
            }

            sum += value * count;
            votesCount += count;
            ratings = ratingsReg.exec(input);
        }

        let avg = +(sum / votesCount).toFixed(2);
        console.log(`${label}: ${avg}`);
    }

   //  // var.1  100/100 - with .MATCH
   //  if (!/<svg>[\s\S]*<\/svg>/gm.exec(input)) {
   //      console.log('No survey found');
   //      return;
   //  }
   //
   // let pattern = /<svg>[\s\S]*?<cat>[\s\S]*?<text>[\s\S]*?\[([\s\S]+)\][\s\S]*?<\/text>[\s\S]*?<\/cat>[\s\S]*?<cat>([\s\S]+)<\/cat><\/svg>/;
   //
   //  //let match = regex.exec(input)
   //  let match = input.match(pattern)
   //  if(!match){
   //      console.log('Invalid format');
   //      return;
   //  }
   //  let label = match[1];
   //  let votesCount = 0;
   //  let totalVotes = 0;
   //
   //  //let matches = input.match(/(<g><val>(1|2|3|4|5|6|7|8|9|10)<\/val>\d+<\/g>)+/mg);
   //  let matches = input.match(/<g><val>(-{0,1}[0-9]+)<\/val>(-{0,1}[0-9]+)<\/g>/gm);
   //
   //  for (let match of matches) {
   //      // let currentVote = /<val>(1|2|3|4|5|6|7|8|9|10)<\/val>\d+/mg.exec(match);
   //      let currentVote = match.match(/<val>(-{0,1}[0-9]+)<\/val>(-{0,1}[0-9]+)/);
   //      let value = +currentVote[1];
   //     // console.log(value);
   //      let count = +currentVote[2];
   //     // console.log(count);
   //
   //      votesCount += count;
   //      totalVotes += value * count;
   //  }
   //
   //  let votesAverage = precisionRound(totalVotes * 1.0 / votesCount, 2);
   //
   //  console.log(`${label}: ${votesAverage}`);
   //
   //  function precisionRound(number, precision) {
   //      let factor = Math.pow(10, precision);
   //      return Math.round(number * factor) / factor;
   //  }
}
f('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')
console.log('');
f("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>")