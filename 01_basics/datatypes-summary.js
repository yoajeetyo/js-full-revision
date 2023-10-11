//Datatypes are divided on the basis of how datas are store in memory and access from the memory
// on the basis of that it is divided into two types (primitives and non-primitives)

// Primitive
// All Primitive types are call by value(means when we use the data it wont give the exact reference, 
                                //it will give copy of the actual data and if we perform any operation then 
                                //copied data will change but original data remain same)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//JavaScript is a dynamically typed language, 
//which means that data types of variables are determined by the value they hold at runtime and can change throughout the program
                // as we assign different values to them.

// Number
// const score = 100;
// const csoreValue = 100.4;

// // Boolean
// const isLoggedIn = false;

// // null
// const outsideTemp = null;

// // undefined 
// let userEmail1;
// //--------------------or--------------------
// let userEmail2 = undefined;

//Symbol(Mostly used in react)
// to define unique value (return type is Symbol only nothing else)
// here id1 and id2 both are totally different and unique
// const id1 = Symbol('101');
// const id2 = Symbol('101');
// console.log(id1 === id2);


//BigInt(to represent big number)
// we need to write n in the last of the number to represent BigInt
//not in use mostly
// const bigNumber = 47583972738383747n




//Non Primitive(Reference type)
// Array, Objects, Functions

// Array
// const heros = ["Shaktiman", "Naagraj", "Doga", "Chacha-Chaudhari"]


//Objects
// we define objects inside {} in the form of key value pair

// let obj ={
//     "name" : "Ajeet",
//     "Age" : 18
// }


// function
// there are many ways to define a function in java script
// variable way
// const myFunction = function(){ console.log("Hello World");}
// myFunction();




// to check data-types of variables we use typeof keyword or typeof() function

// console.log(typeof(100)); // number
// console.log(typeof(100.4)); // number
// console.log(typeof(null)); // object
// console.log(typeof(true)); // boolean
// console.log(typeof(undefined)); // undefined
// console.log(typeof("Ajeet")); // string
// console.log(typeof(["Ajeet", "Hi", "Raj", "Sam"])); // object
// console.log(typeof({"Name":"Ajeet", "Age":18})); // object
// console.log(typeof(function(){console.log("Hi");})); // function
