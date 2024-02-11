
                     // INSTANCE METHODS:

//defining methods inside objects:

const aircraft = {
    altitude: 2000,

    changeAltitude: function(value){
        this.altitude += value;
        console.log(this.altitude);
    }
};
aircraft.changeAltitude(100);


//defining methods inside a class:

class Aircraft{



    constructor(altitude){
        this.altitude = altitude;
    }


    changeAltitude(value){
        this.altitude += value;
        console.log(this.altitude);
     }

}

const a1 = new Aircraft(2000);
a1.changeAltitude(500);



                     // STATIC METHODS:



