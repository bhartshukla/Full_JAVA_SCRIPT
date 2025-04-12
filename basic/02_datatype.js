"use strict"; //treat all js code as newer version of js

// alert("hello") // we are useing node

let name  = "Bharat" // string

let age = 22 // number 

let isman = true // boolean its value in true or false
// boolean is a primitive data type that can have one of two values: true or false.
let iswoman = false // boolean
let isnull = null // null  it is basicaly standalone value 
// null is a primitive value that represents the intentional absence of any object value
// and is treated as falsy for boolean operations.
// null is an object type in JavaScript, which is a known bug in the language.
// null is often used to indicate that a variable should be empty or uninitialized.

let isundefined // undefined // undefined is a primitive value that represents the absence of a value or an uninitialized variable.
// undefined is a type itself (undefined) and is a property of the global object.
// undefined is a primitive value that represents the absence of a value or an uninitialized variable.
// undefined is a type itself (undefined) and is a property of the global object.
let bigInt = BigInt(1234567890123456789012345678901234567890) // BigInt
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.
// BigInt is a primitive type in JavaScript that can represent integers with arbitrary precision.

let symbol = Symbol("I am a symbol") // Symbol


// Symbol is a built-in object that provides a way to create unique identifiers.
// Symbols are often used as unique property keys for object properties.
let obj = {
    name: "Bharat",
    age: 22,
    isman: true,
    iswoman: false,
    isnull: null,
    isundefined: undefined,
    bigInt: BigInt(1234567890123456789012345678901234567890),
    symbol: Symbol("I am a symbol")
} // object in this key value pair
// object is a collection of properties, where each property is defined as a key-value pair.
let arr = [1, 2, 3, 4, 5] // array is a special type of object
// array is a special type of object that is used to store a collection of values.
let func = function() {
    console.log("I am a function")
} // function is a special type of object
// function is a special type of object that is used to define reusable blocks of code.
let date = new Date() // date 
let regex = /[a-z]/ // regex
let map = new Map() // map  


console.log(typeof age);
console.log(typeof null);  // its type of OBJECT ..
console.log(typeof undefined);  // its type of undefined ..
