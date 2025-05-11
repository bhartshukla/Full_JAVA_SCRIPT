/*Singleton pattern concept (not directly implemented here, just a note) 
🔹 What is Singleton?
A Singleton is a design pattern that makes sure only one object of a particular kind is ever created.

🔹 Why use it?
You use it when you need a single, shared resource — like a single configuration object, a database connection, or a user session — throughout your entire program.
*/

// Object.create and constructor method are other ways to create objects
// This example uses Object literal syntax

const mySymbol = Symbol("Key1") // Creating a unique symbol to use as a key in the object

// Creating a user object using object literal syntax
const user = {
    name: "BHarat", // Standard key-value pair
    "Full name": "Bharat Shukla", // Key with space must be in quotes
    age: 20, // Number value
    [mySymbol]: "Bharat", // Using Symbol as a key
    location: "Lucknow", // String value
    email: "Bhsh@.com", // Email as string
    islooking: true, // Boolean value
    skills: ["HTML", "CSS", "JavaScript"] // Array as a value
}

// Ways to access object properties:
// console.log(user.name) // Dot notation
// console.log(user["name"]) // Bracket notation
// console.log(user["Full name"]) // Bracket notation required for keys with spaces
// console.log(user[mySymbol]) // Accessing Symbol key
// console.log(user["email"]); // Accessing email
// console.log(user.email = "bhshdnd@gmail.com") // Updating email

// Object.freeze(user); // Freezes the object - prevents any further changes
// user.name = "Shubham" // Will not change the name after freeze
// console.log(user) // Logs the user object

// Adding a method to the user object
user.greating = function () {
    console.log("hello user") // Simple greeting function
}

// Adding another method with reference to object data using `this`
user.greatingtwo = function () {
    console.log(`hello user , ${this["Full name"]}`) // Uses this to access "Full name"
}

// Logging the function reference (not calling it)
console.log(user.greating)  // Logs the function definition

// Invoking the function
console.log(user.greating()) // Calls the greeting function

// Invoking the function with this reference
console.log(user.greatingtwo()) // Calls the second greeting function with personalized name
