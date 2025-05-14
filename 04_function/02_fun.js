// function calculateCartPrice  (num1){
//     return num1
// }

// console.log(calculateCartPrice(400))


// if we have multi valuese so we use rest operator

// function restope(...num2){
//     return num2
// }
// console.log(restope(200,400,500,600))

// function restope(val,val2 , ...num2){  // here val = 200 , val2 = 400 and num1 = 500,600
//     return num2
// }
// console.log(restope(200,400,500,600))


// function with object

const user = {
    name:"Bharat",
    price:200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleObject(user)
// direct object 
handleObject({
    name:"Bharat",
    price:300
})

// function with array
const myarr = [10,20,30,40]

function findvalue(getArr){
    return getArr[3]
}

// console.log(findvalue(myarr))

console.log(findvalue([20,30,20,40]))
