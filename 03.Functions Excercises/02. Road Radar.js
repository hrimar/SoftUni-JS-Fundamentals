function roadRadar([speed, typeRoad]) {  // 100/100
    function getLimit(typeRoad) {
        switch(typeRoad){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
let overSpeed = speed-getLimit(typeRoad);

    if(overSpeed <= 0) {
        console.log('');
    } else if(overSpeed > 40 ){
        console.log('reckless driving');
    } else if(speed-getLimit(typeRoad) <= 20 ) {
        console.log('speeding');
    } else if(speed-getLimit(typeRoad) <= 40 ){
        console.log('excessive speeding');
    }
}
roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);