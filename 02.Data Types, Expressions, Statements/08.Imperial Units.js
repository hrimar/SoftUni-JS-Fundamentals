function convertInchesToFeet(val) {   // 100/100
  let feet = Math.floor(val/12);
  let inches = val%12;
    return `${feet}'-${inches}"`;
}

console.log(convertInchesToFeet(36));
console.log(convertInchesToFeet(55));