/* Immediately Invoked Function Expressions (IFFE)  

We use Immediately Invoked Function Expressions (IIFEs) in JavaScript primarily to manage scope, privacy, and immediate execution. Here's a breakdown of why we need IIFE:

🔒 1. Avoid Polluting the Global Scope

*/


// function db(){
//     console.log("DB Connected")
// }
// db()

(function db(){
    //named iife
    console.log("DB Connected")
}());


// ()()

( () => {
    console.log("DB connected 2 ")
}) ();

( (name) => {
    console.log(`my name is ${name}`)
}) ("Bharat");