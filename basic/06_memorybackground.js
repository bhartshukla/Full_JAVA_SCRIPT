// ------------------------
// Stack Memory (Primitive Types)
// ------------------------

// Primitive types (like string, number, boolean) are stored in stack memory.
// When you assign one primitive to another, a **copy** is created.

let ytname = "Bharatshukla";
let anothername = ytname; // a new copy of 'ytname' is assigned to 'anothername'

anothername = "Bharat";   // changing 'anothername' does NOT affect 'ytname'

console.log(anothername); // Output: Bharat
console.log(ytname);      // Output: Bharatshukla (original value remains unchanged)


// ------------------------
// Heap Memory (Non-Primitive Types)
// ------------------------

// Non-primitive types (like objects, arrays, functions) are stored in heap memory.
// When you assign an object to another variable, only the **reference (memory address)** is copied.

let user = {
    email: "user123@gmail.com",
    mb: "9777175"
};

let user2 = user; // both 'user' and 'user2' point to the same object in heap memory

user2.email = "bh@gmail.com"; // changing 'user2.email' also changes 'user.email' because both refer to the same object

console.log(user.email);  // Output: bh@gmail.com
console.log(user2.email); // Output: bh@gmail.com
