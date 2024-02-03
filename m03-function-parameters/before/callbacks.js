//  passing inline functions:

//  let fp = {id : 'R02344', dep:'Paris', dst:''};

// function validateFlightPlan(fp, onErrorHandler){
//     if(fp.dst === '' || fp.dep ===''){
//         onErrorHandler();
//     } else{
//         console.log('VALID');
//     }

// }

// validateFlightPlan(fp,() => console.log('ERROR'));






let fp = {id : 'R02344', dep:'Paris', dst:''};

function validateFlightPlan(fp, onErrorHandler){
    if(fp.dst === '' || fp.dep ===''){
        onErrorHandler();
    } else{
        console.log('VALID');
    }

}

function logValidationError(){
    console.log('Validation Error');
}

// validateFlightPlan(fp,logValidationError);