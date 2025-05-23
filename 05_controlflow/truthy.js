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

