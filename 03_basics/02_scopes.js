// scopes story starts from three keywords let, var and const

// let a = 10
// const b = 20
// var c = 30

// console.log(a, b, c);

// let, var, const all are working in the same way
// var came first then let and const came in later version
// let and const was introduced because var was not working properly in the block scope {}, functions scope or loops scope




// global variable (outside function or loops or block) can be accessible from anywhere but local variable should be accessible only inside the loop, function or block
// problem with declaring variables using var is no matter where we declare variable, it will be always a global variable (we can access it from anywhere)

// eg:-

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);  // a cannot be accessible  outside loop
// console.log(b);  // b cannot be accessible  outside loop
// console.log(c);  // 30




// block scope and global scope

// let a = 10;  // global variable a

// if (true) {
//     let a = 20;  // local variable a
//     console.log(a);  // accessing local variable a
// }

// console.log(a); // accessing global variable a


// we always use let or const, never use var




// when we check the scope in browsers console it is windows scope and when we are checking the scope in program it is node scope
// both have different scope







// +++++++++++++++++++++++++++++++++++++ nested scope ++++++++++++++++++++++++++++++++++++++
// function funcOne(){
//     const userName = "Ajeet"

//     function funcTwo() {
//         const website = "facebook"
//         console.log(userName);
//     }
//     //console.log(website); // we can not access website outside function funcTwo()

//     funcTwo()
// }

// funcOne() // Ajeet (due to funcTwo() call inside funcOne()) (if we will not call funcTwo() inside funcOne() then it will not print anything)

// what is closure?
// child block accessing the variables from parent block, it is known as closure


// scopes in if block

// if (true) {
//     const firstName = "Ajeet"

//     if (firstName === "Ajeet") {
//         const lastName = " Singh"
//         console.log(firstName + lastName); // Ajeet Singh
//     }
//     //console.log(lastName); // we can not access lastName outside inner if 
// }

//console.log(firstName); // we cannot access firstName outside if loop






// +++++++++++++++++++++++++++++++++++++ Interesting Concept ++++++++++++++++++++++++++++++++++++++++++++++

// if we declare simple function, we can access it from anywhere
// console.log(func1(199)) // 200

// function func1(num1) {
//     return num1+1
// }

// console.log(func1(99)) // 100 




// if we will declare a function and hold it in a variable, then we can access after declaration of function not before declaration
// console.log(varToHoldFunction(199)) // Error (in this way we can not access the function before initialization)

// const varToHoldFunction = function func1(num1) {
//     return num1+1
// }

// console.log(varToHoldFunction(99)) // 100 








