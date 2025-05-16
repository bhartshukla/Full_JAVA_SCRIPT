
// var c =400

let a =500
// console.log(a)

if(true){
    let a =20
    const b = 30 
    // var c = 40
    // console.log("Inner", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// nested scope


function one(){
    const username = "Bharat"

    function two(){
        const web = "Youtube"
        console.log(username)
    }
    // console.log(website)

    two()

}
// one()


if(true){
    const username = "bharat"

    if(username==="bharat"){
        const website = "Youtube"
        // console.log(username  + website)
    }

    // console.log(website)
}
// console.log(username)


function addone(num){
    return num + 1;
}
addone()

const addone2 = function (num){
    return num + 1;
}
addone2()