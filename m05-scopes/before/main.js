let maxAltitudeMeters = 10000;

const changeAltitude = (altitudeMeters) =>{
    //local variable:
    let minAltitudeMeters = 0;

    if(altitudeMeters < maxAltitudeMeters && altitudeMeters > minAltitudeMeters)
        {
            console.log(`Changing altitude to ${altitudeMeters}`);
            return;
        }
        console.log('Can not change altitude: out of bounds');
}

changeAltitude(50000);
console.log(minAltitudeMeters);  // undefined




                  // CLOSURE


let child;

(initFlight = () =>{
    let nbPassengers = 100;

    const addPassenger = () => {
        nbPassengers ++;
        console.log(nbPassengers);
    }
        child = addPassenger;
})();

child();
