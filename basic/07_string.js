const name  = "Bharat";


const file = 50;

// string is a basicaly object

//console.log(name + files + " its is good ");

// console.log(`hello my name is ${name} and my file is ${file}`)


let myname  = new String("Bharat")
console.log(myname);

console.log(myname[2])
console.log(myname.__proto__);


console.log(myname.length);
console.log(myname.toLocaleLowerCase())
console.log(myname.toUpperCase())
console.log(myname.charAt(0))
console.log(myname.indexOf('t'))

const yourname = new String("Shukla-ji")

const new2 = yourname.substring(0,4);
console.log(new2)

const anstr = yourname.slice(0,4)
const anstr2 = yourname.slice(-9,4)
console.log(anstr)
console.log(anstr2)

const newstr = "  Bharat  "
console.log(newstr);
console.log(newstr.trim());

const puup = "https/xbzin.co%20m "
console.log(puup.replace('%20', '-'))

console.log(puup.includes('bh'));


console.log(yourname.split('-'));








