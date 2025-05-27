// falsy values

// false , 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy values
// "0" , "false", " ", [], {}, function(){},

const user = []

if(user){
    console.log("user is get it")
}

if(user.length===0){
    console.log("User ie empty")
}

const obj = {}
if(Object.keys(obj).length===0){
    console.log("Obj is empty")
}

/*

false == 0 // true

false == "" //true

0=="" //true

*/




// Nullish Coalescing Operator (??): null , undefined 

let val1 ;

// val1 = 5 ??10;   // value =5
// val1 = null ?? 10  //value = 10
 
// val1 = undefined ?? 15  //15

// val1 = null ?? 10 ?? 15    // value 10


console.log(val1)

// terniary Operator
// condition ? true : false

const p = 200;

p>10 ? console.log("more then 10") : console.log("less then 10")


