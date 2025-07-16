let jsonres = '{"fact":"Female felines are superfecund","length":31}';

// console.log(jsonres);

let validres = JSON.parse(jsonres)  // json to js object

console.log(validres)

console.log(validres.fact)


let me = {
    name:"Bharat",
    class:5,
    enroll:"ABCA",
    subject:"CS"
}

console.log(me)

let jsondata = JSON.stringify(me)

console.log(jsondata)