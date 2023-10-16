// if we want to do same types of task multiple time then we define function

// eg:- if we want to print the sum of two numbers and everytime those numbers are different

// function sumTwoNumber(num1, num2) {    // two parameters num1 and num2
//     console.log(num1+num2);  
// }

// // // console.log(sumTwoNumber); // [Function: sumTwoNumber] (returns reference of function, mostly used in ReactJs)

// // sumTwoNumber(1,3); // 4         // two arguments 1 and 3
// // sumTwoNumber(99, 8); // 107
// sumTwoNumber(2, "4") // 24 (string type)
// sumTwoNumber(2, null) // 2 (null considered as zero)

// same function result if we want to store ii a variable it will give undefined because we are not returning anything
// const functionResult = sumTwoNumber(6, 8) // because of this line it will print 14
// console.log("Returned result is : ", functionResult); // but here Returned result is :  undefined,  because function is not returning anything


// defining function which return result
// function sumTwoNumber(num1, num2) {    // two parameters num1 and num2
//     return num1 + num2;                // return statement should be the last line of function block, after return statement no line will execute
// }

// console.log(sumTwoNumber(2, 4)); // 6
// // now we can store returned function result and print or use further
// const returnedResult = sumTwoNumber(100, 500)
// console.log(returnedResult);


// we want to send a message to loggedIn user
// function loggedInUser(userName) {
//     return `${userName} just loggedIn`
// }

// const returnedResult = loggedInUser("Ajeet")
// console.log(returnedResult); // Ajeet just loggedIn

// if we will not pass any value then it will return undefined
// const returnedResult = loggedInUser()
// console.log(returnedResult); // undefined just loggedIn


// we can check if the user is undefined or not
// function loggedInUser(userName) {
//     if (userName === undefined) {
//         return "Please enter an UserName"
//     }
//     else{
//         return `${userName} just loggedIn`   
//     }
// }

// console.log(loggedInUser()); // Please enter an UserName



// empty string and undefined are considered as false in javascript
// function loggedInUser(userName) {
//     if (!userName) {                            // !userName means true because here userName is undefined as we are not passing any argument while calling loggedInUser() function
//         return "Please enter an UserName"      // !userName is equivalent to (userName === undefined)
//     }
//     else{
//         return `${userName} just loggedIn`   
//     }
// }

// console.log(loggedInUser()); // Please enter an UserName




// if we want to avoid the situation like this then we can define an default user
// if user not passed while calling function then it will take default user
// if user passed while calling function then it will override the default value with passed value
// function loggedInUser(userName = "defaultUser") {
//     return `${userName} just loggedIn`
// }

// console.log(loggedInUser()); // defaultUser just loggedIn
// console.log(loggedInUser("Ajeet")); // Ajeet just loggedIn


