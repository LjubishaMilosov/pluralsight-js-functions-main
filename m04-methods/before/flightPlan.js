
//       this class has a constructor that initializes three fields
class FlightPlan 
{
    constructor(callSign = '', departure = '', destination = '')
    {
        this.callSign = callSign;
        this.departure = departure;
        this.destination = destination;
    }

     /// method:
print(){
    let info = `${this.callSign} departs from ${this.departure}` + 
    `and lands at ${this.destination}`;
    console.log(info);
}


}

const berlinToParis = new FlightPlan('FR5639', 'Berlin', 'Paris');
berlinToParis.print();
