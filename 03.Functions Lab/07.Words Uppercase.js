function toUpperCase(str) {
    let strUpper = str.toUpperCase();
    let strArr = strUpper.split(/\W+/)
        .filter(w=>w!='')
      //  .map(w=>w.toUpperCase());

    return strArr.join(', ');
   }
console.log(toUpperCase('Hi, how are you?'));