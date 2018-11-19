function f(imput) { // 100 /100
    let usermanes= [];
    for (let email of imput) {
        [username, domain] = email.split('@');
        let result='';
       // let name = email.substring(0, email.indexOf('@'));
        result+=username +'.';

        let domainParts = domain.split('.');
        domainParts.forEach(p => result += p[0]);
        usermanes.push(result);
    }
    console.log(usermanes.join(', '));
}
f(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])
