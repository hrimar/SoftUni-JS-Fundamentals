function gradToDegrees(nGrad) {
    nGrad = +(nGrad);
    let degrees = nGrad * 3.6 / 4;
    degrees = degrees % 360;

    if(degrees < 0) {
        degrees = 360 + degrees;
    }

    console.log(degrees);
}

gradToDegrees(-50); //100/100

