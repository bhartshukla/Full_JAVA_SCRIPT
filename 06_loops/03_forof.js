// For of Loop

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(`Value is ${num}`);
}


const greeting = "hellow Bharat"
for(const greet of greeting){
    // console.log(`each char is ${greet}`)
}

// maps 
 const map = new Map()
 map.set('In',"India")
 map.set('In',"India") // its not again print
 map.set('USA',"United states of America")
 map.set('Fr',"france")

//  console.log(map);


 for(const key of map){
    // console.log(key);
 }

  for(const [key, value ]of map){
    // console.log(key , ":-" , value);
 }

const myObject = {
    id : "123",
    name : "Bharat",
    sn:"Shukla",
    no:"222222"
} 

// for(const obj of myObject){  //its not  myObject is not iterable with this loop FOR
//     console.log(obj)
// }

