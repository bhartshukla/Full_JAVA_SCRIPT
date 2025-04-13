// console.log(3>2)
// console.log(3>=2)
// console.log(3<2)
// console.log(3<=2)
// console.log(3==2)
// console.log(3 !=2)

// console.log("2" > 1);           // true → "2" is converted to number 2, and 2 > 1 is true
// console.log("02" > 1);          // true → "02" is converted to number 2, and 2 > 1 is true

// console.log(null > 0);          // false → null is converted to 0, so 0 > 0 is false
// console.log(null == 0);         // false → null is only loosely equal to undefined, not to 0
// console.log(null >= 0);         // true → null is converted to 0, so 0 >= 0 is true
// console.log(null < 0);          // false → null → 0, and 0 < 0 is false
// console.log(null <= 0);         // true → null → 0, and 0 <= 0 is true

// console.log(undefined > 0);     // false → undefined is converted to NaN, and NaN > 0 is false
// console.log(undefined == 0);    // false → undefined is only loosely equal to null, not 0
// console.log(undefined >= 0);    // false → undefined → NaN, and NaN >= 0 is false
// console.log(undefined < 0);     // false → undefined → NaN, and NaN < 0 is false
// console.log(undefined <= 0);    // false → undefined → NaN, and NaN <= 0 is false

// console.log(undefined > null);  // false → undefined and null become NaN and 0 respectively; NaN > 0 is false
// console.log(undefined == null); // true → special case: undefined == null is true (loose equality)
// console.log(undefined >= null); // false → undefined → NaN, null → 0; NaN >= 0 is false
// console.log(undefined < null);  // false → NaN < 0 is false
// console.log(undefined <= null); // false → NaN <= 0 is false



console.log("2" === 2); // strict check 