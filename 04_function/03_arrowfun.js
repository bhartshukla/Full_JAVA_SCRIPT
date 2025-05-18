const user = {
    username: "Bharat", // user's name property
    price: 999, // user's price property

    wlecomemsg: function () {
        console.log(`${this.username} , welcome to website `) // prints welcome message with username
        console.log(this) // prints the current object context (user object)
    }
}

// console.log(user.wlecomemsg()) // calls the welcome message method and logs its output

// user.username = "Aryan" // updates the username property to "Aryan"
// console.log(user.wlecomemsg()) // calls the method again with updated username

// console.log(this); // prints global object ('window' in browser or '{}' in Node.js)

function me () {
    // console.log(this) // (optional) would print global object if uncommented

    let username = "Bharta" // defines a local variable inside the function
    // console.log(this.username) // tries to access 'username' from global context; will print 'undefined'
}

// me() // calls the function 'me'


// const you = function me () {
//     // console.log(this) // (optional) would print global object if uncommented

//     let username = "Bharta" // defines a local variable inside the function
//     console.log(this.username) // tries to access 'username' from global context; will print 'undefined'
// }

const yes = () =>{
    let username = "Aryan"
    // console.log(this.username)
    console.log(this)
}

// yes()

/*
📌 Notes on this in Normal vs Arrow Functions:
Normal Function (inside object):-----------

this refers to the object.

Useful for accessing the object’s own properties.

Example: this.name → gives the object’s name value.

Normal Function (outside object):----------

In Node.js, this is {} (empty object).

In Browser, this is window object.

this.property → usually gives undefined unless set globally.

Arrow Function (inside object or outside):----------

this does not refer to the object.

It takes this from where it was defined (lexical scope).

In Node.js, this is {}.

In Browser, this is window.

this.property → mostly gives undefined.

✅ Use this in normal functions to work with object data.

❌ Avoid this in arrow functions if you need to access object properties.
*/



// Arrow function ...... 

// const addtwo = (num1 , num2) =>{
//     return num1 + num2

// }

// const addtwo = (num1 , num2) =>  num1 + num2 

// const addtwo = (num1 , num2) =>  (num1 + num2) 

const addtwo = (num1 , num2) =>  ({Username:"Bharta"})
 
console.log(addtwo(7,8))