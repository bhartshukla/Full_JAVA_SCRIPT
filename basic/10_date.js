console.log("date")

let date = new Date()
console.log(date.toDateString());
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleDateString())

console.log(typeof date);  //object

// let newdate = new Date(2003,0,23)
// console.log(newdate.toDateString());
let newdate2 = new Date("2023-01-23")
let newdate3 = new Date("02-03-2023")

let newdate = new Date(2003,0,23,6,7)
console.log(newdate.toLocaleString());

let mytime = Date.now()
console.log(mytime)
console.log(Math.floor(Date.now()/1000));


let newanoDate = new Date();

console.log(newanoDate.getDay())
console.log(newanoDate.getMonth() + 1);

newanoDate.toLocaleString('default',{
    weekday:"long"
})





