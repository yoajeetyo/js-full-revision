// Arrow function (introduced in 2015 in ES6)

// suppose we registering an user to our website for that we need to create an object
// const user = {
//     userName: "Ajeet",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.userName}, welcome to website`); // this is used to access current context or object
//     }
// }

// user.welcomeMessage() // Ajeet, welcome to website
// user.userName = "Sam"
// user.welcomeMessage() // Sam, welcome to website  (because now the current obect's which is user and its username property is currently holding value Sam)





// Printing current object/context and using current object property in function
// const user = {
//     userName: "Ajeet",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.userName}, welcome to website`); // this is used to access current context or object
//         console.log(this); // it talks about current object (user's current situation) 
//     }
// }

// user.welcomeMessage()   // Ajeet, welcome to website
//                         // {
//                         // userName: 'Ajeet',
//                         // price: 999,
//                         // welcomeMessage: [Function: welcomeMessage]
//                         // }

// user.userName = "Sam"

// user.welcomeMessage()   // Sam, welcome to website
//                         // {
//                         // userName: 'Sam',
//                         // price: 999,
//                         // welcomeMessage: [Function: welcomeMessage]
//                         // }




// Printing current object/context and using current object property in function
// const user = {
//     userName: "Ajeet",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.userName}, welcome to website`);
//     }
// }

// console.log(this); // {}    (it returns empty object {}, because in node environment current global object is empty)
// but if we will run same code inside browsers console, we will get different output (we will get there Window as output)
// browsers global object is Window (VVI)





// what if we print this inside a function
// function funcOne() {
//     console.log(this);
// }

// funcOne() // we will get so many details regarding current object 




// what if we will try to access the local variable of function using this keyword
// function funcOne() {
//     const userName = "Ajeet"
//     console.log(this.userName); 
// }

// funcOne()  // undefined (we can not accesss data of function using this keyword inside function)

//------------------------------------------------ or ----------------------------------------------

// what if we will try to access the local variable of function using this keyword
// const funcOne = function () {
//     const userName = "Ajeet"
//     console.log(this.userName); 
// }

// funcOne()  // undefined (we can not accesss data of function using this keyword inside function)







// +++++++++++++++++++++++++++++++++++++++++++++ defining arrow function ++++++++++++++++++++++++++++++++++++++++++++

// printing this inside arrow function
// const funcOne = () => {
//     console.log(this); 
// }

// funcOne() // {}






// what if we will try to access the local variable of function using this keyword  inside Arrow function
// const funcOne = () => {
//     const userName = "Ajeet"
//     console.log(this.userName); 
// }

// funcOne()  // undefined (we can not accesss data of function using this keyword inside Arrow function)




// basic syntex of an arrow function 
// () => {}

// we can also hold an Arrow function inside a variable
// const func1 = () => {}


// adding and returning two numbers using Arrow function
// const addNumber = (num1, num2) => {
//     return num1 + num2 
// }

// console.log(addNumber(2,4)) // 6




// implicit return (if there is only one line of statement, then we do not needs to write inside {})(return taken implicitly)
// if we are not writing {} as a function body then we should not write return keyword to return result
// we can write () as a function body, if we write () then we need not write return keyword to return anything

// const func1 = (num1, num2) => num1 + num2
// console.log(func1(2,5)); // 7


// const func1 = (num1, num2) => (num1 + num2)
// console.log(func1(2,5)); // 7




// we can see the benifits of writing () as function body when we are returning an object
// const arrowFunction = () => {name : "Ajeet"}
// console.log(arrowFunction()); // undefined  (we wont get proper output so we needs to wrap up the object inside () )


// const arrowFunction = () => ({name : "Ajeet"})
// console.log(arrowFunction());  // { name: 'Ajeet' }



// we can use Arrow function while using loops to parse an Array or Object using forEach loop





