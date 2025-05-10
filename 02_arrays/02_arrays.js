// Array 'mynames' with three strings
const mynames = ["ram", "Shyam", "Mohan"];

// Array 'player' with three strings
const player = ["Virat", "Rohit", "Pandya"];

// Adds the entire 'mynames' array as one nested element at the end of 'player'
player.push(mynames);  
console.log(player); // ["Virat", "Rohit", "Pandya", ["ram", "Shyam", "Mohan"]]

// Accessing the 3rd element (index 2) of the 4th item (index 3) which is an array
console.log(player[3][2]); // "Mohan"

// Concatenates 'player' and 'mynames' arrays - returns a new array
const newplayeres = player.concat(mynames); 
console.log(newplayeres); 
// ["Virat", "Rohit", "Pandya", ["ram", "Shyam", "Mohan"], "ram", "Shyam", "Mohan"]

// Using spread operator to merge both arrays into a flat array
const allplayers = [...mynames, ...player]; 
console.log(allplayers); 
// ["ram", "Shyam", "Mohan", "Virat", "Rohit", "Pandya", Array(3)]

// Complex nested array
const ano1 = [1, 2, 3, 4, [5, 6, 7], 8, [2, 4, [5, 6]]];

// Flattening all levels using flat(Infinity)
const ano12 = ano1.flat(Infinity);  // here we can give the value of flat ..
console.log(ano12); 
// [1, 2, 3, 4, 5, 6, 7, 8, 2, 4, 5, 6]

// Checking if a value is an array
console.log(Array.isArray("Bharat")); // false

// Converting string to array of characters
console.log(Array.from("Bharat")); 
// ["B", "h", "a", "r", "a", "t"]

// Converting a plain object to array - returns empty array as it lacks iterable structure
console.log(Array.from({name: "Bharat"})); 
// []

// Individual number scores
let scores1 = 100;
let scores2 = 200;
let scores3 = 300;

// Creating an array using Array.of
console.log(Array.of(scores1, scores2, scores3)); 
// [100, 200, 300]

// ------------------- Notes Section -------------------

/*
✅ push() → Adds element at end; pushing an array nests it.
✅ concat() → Merges arrays and returns a new array.
✅ Spread Operator [...] → Expands elements, merges arrays in a flattened form.
✅ flat(Infinity) → Flattens deeply nested arrays into a single-level array.
✅ Array.isArray(val) → Returns true if val is an array, else false.
✅ Array.from("string") → Converts string to character array.
✅ Array.from(object) → Converts iterable-like object to array; returns empty array if not iterable.
✅ Array.of(val1, val2...) → Creates a new array from individual elements.
✅ Indexing → Access specific values in arrays or nested arrays using [index].
*/