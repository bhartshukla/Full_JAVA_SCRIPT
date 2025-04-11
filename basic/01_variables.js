const acName = 123553
let acEmail = "iambharat@gmail.com";
var accpass = "2345"

let acstate ; // if it has no value so it undefined


// acName = 555;  // not allowed if value is  is const 


acEmail = "you@gmail.com"   // if let so its changeable
accpass = "2678"            // if var so it is also changeable
console.log(acName);

/*
 prefer not to use var 
 because of issue in block scope and functional scope 
*/



//console.table use to run/print the multiple variables in one time.
console.table([accpass,acEmail,acName, acstate]);


