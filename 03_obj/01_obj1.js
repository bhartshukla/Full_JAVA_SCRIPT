//singleTon 
// Object.create    // constructor method
//Object literal



const user = {
    name:"BHarat",
    "Full name":"Bharat Shukla",
    age:20,
    [mySymbol]:"Bharat",
    location:"Lucknow",
    email:"Bhsh@.com",
    islooking:true,
    skills:["HTML","CSS","JavaScript"]
}
const mySymbol=Symbol("Key1")

console.log(user.name)

console.log(user["name"])
console.log(user["Full name"])
console.log(user[mySymbol])


