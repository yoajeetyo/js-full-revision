// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);




// it will automatically convert(to avoid this type of result we need to use type-script)
// console.log("2" > 1); // true
// console.log("02" > 1); // true

// Sometimes null will convert into nan and sometimes null will convert into 0
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true (it should not happen, it is happening due to differint checking of ==, > and >= in java script)

// for undefined it will return false in all the cases
// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
// We should avoid the comparison of null an undefined



// Strict check(===)
// Strict check will check values as well as datatype
// console.log("2" === 2); // false



