
// Create a new function that converts gallons
// to liters: convertToLiters


 // FUNCTION DECLARATION    --> can be invoked before declared -Can be Hoisted!

// function convertToLitres(gallons){
// return gallons * 3.785;
// }

//let result = convertToLitres(10);
// console.log(result);


        // FUNCTION EXPRESSION  -->>maybe better


// const convertToLitres = function(gallons){
//     return gallons * 3.785
// }

// let result = convertToLitres(10);
// console.log(`Result is ${result}`);


         // ARROW FUNCTION 
   
   // They do not have their own "this" binding

// Step 1
// const convertToLitres = (gallons) => {
//     return gallons * 3.785;
// }

// Step 2
// const convertToLitres = gallons => {
//     return gallons * 3.785;
// }

// Step 3
//    const convertToLitres = gallons => gallons * 3.785;
   

   //Cannot be used as Constructor Functions  e.g.:

//    const Aircraft = (model, capacity) => {
//     this.model = model;
//     this.capacity = capacity;
//    };

//    const aircraft = new Aircraft('Boeing737', 200);

   //results in: ERROR: Aircraft is not a constructor
   //this can be solved by turning it inro function expresion


   // Arrow functions Cannot use the arguments object   e.g.:

//    const sum = () => {
//     let sum = 0;

//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//         return sum;
//    };

//    console.log(sum(1,2,3));

   //results in: Uncaught ReferenceError: arguments is not defined at sum
    // can be solved by turning it inro function expresion/declaration


         //FUNCTION CONSTRUCTOR

// const convertToLitres1 = new Function('gallons', 'return gallons * 3.785');

// console.log(convertToLitres1(10));




                             //  R E C U R S I O N

// Recursion is ability of JavaScript function to call itself

// function decrementAltitude(alt){
//     console.log(`The altitude is: ${alt} feet.`);

//     if(alt > 0){                           // stop condition
//         decrementAltitude(alt - 100);     //function calling itself
//     }
// }

// console.log(decrementAltitude(500));




                         // IMMEDIATELY INVOKED FUNCTION EXPRESSION
                         
                         
// its a function that automatically executes after its declaration

//normal function

// function printDate(){
//     let date = new Date().toLocaleDateString();
//     console.log(date);

// }

//Immediately invoked function - 
//done by wrapping a any function into parenthesis and then open and close parenthesis to invoke it :

// (function printDate(){
//     let date = new Date().toLocaleDateString();
//     console.log(date);

// })();

(function (){
    let current = new Date().toLocaleString();
    document.getElementsByTagName('h1')[0].innerHTML = current;

})();