//objects can be declared in two ways literals way and constructors way

// singleton
// when we declare an object in constructor way, then it will always create a singleton object means it will create only on object of that type

// when we declare an object in literals way, then it will not create a singleton object




//object literals (keys and values)
// if you will not write key as a string (inside " " or ' ') then, by default it will considered as a string 
// const jsUser = {
//     name : "Ajeet",        // system will consider as "name" : "Ajeet"
//     age : 18,
//     location : "Bangalore",
//     email : "abc@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"],
//     "full name" : "Ajeet Kumar Singh"       // there is no way to access full name using dot so we need to use square bracket
// }


// // access object
// console.log(jsUser.email); // abc@gmail.com
// console.log(jsUser["email"]); // abc@gmail.com
// console.log(jsUser["full name"]); // Ajeet Kumar Singh





// take symbol as a key and print its value
// const mySymbol = Symbol("key1")

// const myObject = {
//     name : "Ajeet",
//     [mySymbol] : "myKey1"
// }

// console.log(myObject[mySymbol]);


// we can change values 
// const myObject = {
//         name : "Ajeet",
//         age : 18
//     }

// myObject.age = 24
// console.log(myObject.age); // 24

// we can lock the object so that no one can change its value using freeze() method in Object
// const myObject = {
//             name : "Ajeet",
//             age : 18
//         }

// Object.freeze(myObject)
// myObject.name = 24 // it will not change age because object is freeze
// console.log(myObject); // { name: 'Ajeet', age: 18 }  



// function 
// functions are object in JavaScript
// const myObject = {
//                 name : "Ajeet",
//                 age : 18
//             }

// myObject.greetings = function () {
//     console.log("Hello JS user");      // here we are adding one key greetings in object and passing value as a function
// }

// console.log(myObject); // { name: 'Ajeet', age: 18, greetings: [Function (anonymous)] }
// console.log(myObject.greetings()); // Hello JS user


// we can pass the same objects value inside function using this keyword and back tick string interpolation
// const myObject = {
//     name : "Ajeet",
//     age : 18
// }

// myObject.greetings = function () {
//         console.log(`Hello ${this.name}`);      // here we are adding one key greetings in object and passing value as a function
//     }

// console.log(myObject.greetings()); // Hello Ajeet








