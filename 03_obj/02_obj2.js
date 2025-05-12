

// const userdetails = new Object()  //Singleton 

const userdetails1 = {}
userdetails1.id = "123sdf"
userdetails1.name = "Bharat"
userdetails1.class = "14th"
userdetails1.isLoggedin = "true"

// console.log(userdetails)
// console.log(userdetails1)

const newUser = {
    email : "bharat@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Bharat",
            secondname:"Shukla"
        }
    }

}

// console.log(newUser);
// console.log(newUser.fullname);
// console.log(newUser.fullname.userfullname);
// console.log(newUser.fullname?.userfullname);
// console.log(newUser.fullname.userfullname.firstname);
// console.log(newUser.fullname.userfullname.secondname);

const obj1 = {1: "a", 2:"b"}
const obj2= {3: "a", 4:"b"}

// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)
const obj4 = {...obj1, ...obj2}

// console.log(obj3)
// console.log(obj4)

// console.log(userdetails1)
// console.log(Object.keys(userdetails1))  // its dataType is array
// console.log(Object.values(userdetails1))  // its dataType is array
// console.log(Object.entries(userdetails1))  // its dataType is array

// console.log(userdetails1.hasOwnProperty('name'))
// console.log(userdetails1.hasOwnProperty('fullname'))


const course = {
    cname:"Javascript",
    duration:"12weeks",
    price:"9999",
}

const {price} = course

console.log(price)

//JSON
// {
//     "name":"BHARAT",
//     "wow":"me"
// }

// [
//     {},
//     {},
//     {}
// ]