console.log(Math);  // Outputs the Math object which contains properties and methods for mathematical constants and functions

console.log(Math.abs(-45));  // Returns the absolute value: converts negative to positive => 45

console.log(Math.round(4.6));  // Rounds to the nearest integer => 5

console.log(Math.ceil(4.3));  // Rounds up to the next integer => 5

console.log(Math.floor(4.6));  // Rounds down to the previous integer => 4

console.log(Math.min(4, 5, 6, 7, 8));  // Returns the smallest number in the list => 4

console.log(Math.max(8, 6, 8, 5, 4));  // Returns the largest number in the list => 8

console.log(Math.random());  // Returns a random number between 0 (inclusive) and 1 (exclusive)

console.log(Math.floor(Math.random() * 10) + 1);  
// Generates a random integer between 1 and 10
// Math.random() * 10 => gives 0 to 9.999...
// Math.floor(...) => removes decimal part
// +1 => shifts range to 1-10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  
// Generates a random integer between min (10) and max (20)
// (max - min + 1) => total range count (inclusive of max)
// Math.random() * range => gives value from 0 up to range
// Math.floor(...) + min => shifts to actual range 10 to 20
