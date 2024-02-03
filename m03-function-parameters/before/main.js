'use strict';

const createFlightEntry = function(flight, from, status, color = 'lightgreen'){
    const row = document.createElement('tr');

    const flightCol = document.createElement('td');
    flightCol.innerText = flight;

    const fromCol = document.createElement('td');
    fromCol.innerText = from;

    const statusCol = document.createElement('td');
    statusCol.innerText = status;
    statusCol.style.color = color;

    row.appendChild(flightCol);
    row.appendChild(fromCol);
    row.appendChild(statusCol);

    const parent = document.getElementById('arrivalList');
    parent.appendChild(row);
}

// createFlightEntry('RO12345', 'Paris', 'On time');
// createFlightEntry('US67957', 'Berlin', 'On time');
// createFlightEntry('AF89756', 'New York', 'Delayed', 'orange');
// createFlightEntry('UAL7897', 'Bucharest', 'Cancelled', 'red');
// createFlightEntry('OS4782', 'Vienna', 'On time');



const displayFlights = function (...flights){
flights.forEach(f => {
    createFlightEntry(f.flight, f.from,f.status,f.color);
});
}

displayFlights(
    {flight: 'RO12345', from: 'Paris', status: 'On time'},
    {flight: 'US67957', from: 'Berlin', status: 'On time'},
    {flight: 'AF89756', from: 'New York', status: 'Delayed', color: 'yellow'},
    {flight: 'UAL7897', from: 'Bucharest', status: 'Cancelled', color: 'red'},
    {flight: 'OS4782', from: 'Vienna', status: 'On time'}
)



//displaying current time in the header:

const displayTime = () =>{
    const time = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = time;
}

displayTime();

// set interval is high order  js function that uses a callback:
//when we are passing cllbacks we are not using parenthesis, just function name

setInterval(displayTime,1000);






