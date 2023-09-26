let score1 = "33"

console.log(typeof score1);

// ---------or----------

console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(valueInNumber1);         // 33 
console.log(typeof valueInNumber1);  // number


let score2 = "33abcd"
let valueInNumber2 = Number(score2)
console.log(valueInNumber2);         // NaN (not a number) (because in score2 string there is not only number so it will convert but return NaN)
console.log(typeof valueInNumber2);  // number


let score3 = null
let valueInNumber3 = Number(score3)
console.log(valueInNumber3);         // 0 (conversion of null to number will return 0)
console.log(typeof valueInNumber3);  // number


let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(valueInNumber4);         // NaN (conversion of undefined to number will return NaN)
console.log(typeof valueInNumber4);  // number


let score5 = "Ajeet"
let valueInNumber5 = Number(score5)
console.log(valueInNumber5);         // NaN (conversion of string to number will return NaN)
console.log(typeof valueInNumber5);  // number


let score6 = true
let valueInNumber6 = Number(score6)
console.log(valueInNumber6);         // 1 (conversion of boolean(true/false) to number will return (1/0))
console.log(typeof valueInNumber6);  // number


// conversion to boolean
let isLoggedIn1 = -1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);         // true (conversion of number to boolean will return (true for non-zero/false for 0) )
console.log(typeof booleanIsLoggedIn1);  // boolean


let isLoggedIn2 = " "
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);         // true (conversion of string to boolean will return (true for non-empty string/false for empty string) )
console.log(typeof booleanIsLoggedIn2);  // boolean


// conversion to string
let someNumber1 = 44
let stringSomeNumber1 = String(someNumber1)
console.log(stringSomeNumber1);         // "44"
console.log(typeof stringSomeNumber1);  // string





// ********************************************************* Operations ************************************

let value = 3
let negativeValue = -value      // converting value to negative
console.log(negativeValue);


console.log(2**4);  // 16 (2 raise to the power 4)
console.log(2%3);   // 2 (remainder)


let str1 = "Hello"
let str2 = " Ajeet"
let str3 = str1 + str2
console.log(str3);


// operations happen from left to right (if there is string at first position then it will make string evetything)
console.log("3" + 1 + 5); // 315

console.log(3 + 5 + "3"); // 83 (first it will do mathematical operation then it will add to string value and make a string)

console.log(+true); // 1 (this type of code is not appreciated)

//console.log(true+); // error (not valid)

console.log(+""); // 0 (not recommended to write this type of code)

console.log(+"Ajeet"); // NaN (not recommended to write this type of code)


let num1, num2, num3
num1 = num2 = num3 = 3+6 // (not recommended to write this type of code)

console.log(num1)
console.log(num2)
console.log(num3)


// let gameCounter = 100
// gameCounter++               //postfix (first assign then increase)
// console.log(gameCounter); // 101

// let gameCounter = 100
// ++gameCounter               //postfix (first increase then assign)
// console.log(gameCounter); // 101


// let gameCounter = 100
// console.log(++gameCounter); // 101 (prefix)

// let gameCounter = 100
// console.log(gameCounter++); // 100 (postfix)






