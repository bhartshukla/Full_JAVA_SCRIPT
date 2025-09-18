// Array Declaration
let myarray = [1, 2, 3, 4];  
console.log(myarray[0])
// When copied, arrays in JavaScript create *shallow copies*

const myfriends = ["you", "he", "she", "they"];

const myarray2 = new Array(1, 2, 3, 4, 5);  // Using Array constructor

let myarray3 = [1, 2, 3, 4];
// console.log(myarray3);

// ----------------------------
// Array Methods Examples:
// ----------------------------

// myarray3.push(6);     // Adds 6 to the end
// myarray3.push(7);     // Adds 7 to the end
// myarray3.pop();       // Removes the last element

// myarray3.unshift(0);  // Adds 0 to the beginning
// myarray3.shift();     // Removes the first element

// console.log(myarray3.includes(9)); // Checks if 9 is in the array → false
// console.log(myarray3.includes(1)); // true
// console.log(myarray3.indexOf(1))   // Returns index of 1 → 0
// console.log(myarray3.indexOf(9))   // Not found → -1

// const newarray = myarray3.join(); 
// .join() binds all array elements into a string, separated by commas
// console.log(myarray3)
// console.log(newarray)             // e.g., "1,2,3,4"
// console.log(typeof newarray)     // string

// ----------------------------
// slice() vs splice()
// ----------------------------

const newarry1 = [5, 1, 2, 3, 4];

console.log("A", newarry1); 
// A [5, 1, 2, 3, 4]

// slice(start, end) returns a portion of the array from index 1 to 2 (excluding index 3)
// ➤ Does NOT modify the original array
const myn1 = newarry1.slice(1, 3);
console.log("B", newarry1); // original array remains unchanged
console.log("B", myn1);     // [1, 2]

// splice(start, deleteCount) removes 3 elements from index 1
// ➤ This DOES modify the original array
const myn12 = newarry1.splice(1, 3);
console.log("C", newarry1); // modified array → [5, 4]
console.log("C", myn12);    // removed elements → [1, 2, 3]

console.log("done")
