function myname(){
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("A")
    console.log("T")
}

// myname();

function Addtwonumber(num1,num2){
    // console.log(num1 + num2)
}

Addtwonumber(3,5)

const result = Addtwonumber(3,5)
// console.log("Result : ",result)

function subtwonum(num1,num2){

    // let result = num1 - num2
    // return result

    return num1-num2

    console.log("Bharat")

}

// console.log(subtwonum(3,2))

const result2 = (subtwonum(3,2))
// console.log(result2)


function userlogin(username){
    // if(username===undefined){
    //     console.log("Please Enter Username")
    //     return
    // }

     if(!username){
        console.log("Please Enter Username")
        return
    }

    return `${username} just loggedIn`
}

// const login = userlogin("Bharat")
// console.log(login)
console.log(userlogin())   // its undefined