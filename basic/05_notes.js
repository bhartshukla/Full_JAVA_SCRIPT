// primitive  datatype

//  7 type : string , number , boolean , null , , undefined , Symbol, BigInt 

/*

JavaScript is a dynamically typed language.

Why?
Because you don’t need to declare variable types when you write code, and the type of a variable can change at runtime.

*/

const id = Symbol('13');
const anoid = Symbol('13')

console.log(id == anoid);


// Reference or non primitive dataType
//Arrya , Objects , Functions


console.log(typeof "hello");           // string → Primitive: String
console.log(typeof 42);                // number → Primitive: Number
console.log(typeof true);              // boolean → Primitive: Boolean
console.log(typeof null);              // object → Primitive (JS quirk): Null
console.log(typeof undefined);         // undefined → Primitive: Undefined
console.log(typeof Symbol("id"));      // symbol → Primitive: Symbol
console.log(typeof 12345678901234567890n); // bigint → Primitive: BigInt

console.log(typeof { name: "Bhart" }); // object → Reference: Object
console.log(typeof [1, 2, 3]);         // object → Reference: Array (typeof says object)
console.log(typeof function() {});     // function → Reference: Function


