function distanceInTime(input) {
    let speed1 = input[0];
    let speed2 = input[1];
    let timeInSecs = input[2];

    let dist1 = (speed1 / 3.6) * timeInSecs;
    let dist2 = (speed2 / 3.6) * timeInSecs;

    let delta = Math.abs(dist1 - dist2);
    console.log(delta);
}

distanceInTime([0, 60, 3600]); // 100/100
distanceInTime([11, 10, 120]);
distanceInTime([5, -5, 40]);
