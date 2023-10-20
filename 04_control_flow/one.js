// if (if condition is true, then it will execute the code which is in the scope of if statement)

// if (true) {
//     // execute this scope code
// }


// if (false) {
//    // wont execute this scope code 
// }


// = is used for assignment eg:- a=10 (assigned the value 10 to a variable literal)
// == is used to check, if the two values are equal or not (variables datatype will not check while comparion) 
// === is used to check if the value as well as datatyes are equal or not

// const temperature = 50
// if (temperature == 50) {
//     console.log("temprature is 50");
// }
// console.log("code executed");

//output:-
    // temprature is 50
    //code executed




// if, else 

// const temperature = 64
// if (temperature < 50) {
//     console.log("temperature is less than 50");
// } else {
//     console.log("temperature is greater than or equal to 50");
// }
// console.log("code executed");

// output:-
    // temperature is greater than or equal to 50
    // code executed





// shorthand to write if statement

// const power = 200
// if (power > 100) console.log("you can fly");

// output:- you can fly

// we need to write shorthand in single line (good practice)
// btw we can also write multiple line using coma but its bad practice

// const power = 200
// if (power > 100) console.log("you can fly"), 
// console.log("you moved to next round");

// output:- 
    // you can fly
    // you moved to next round




// if, else if, else

// const price = 900

// if (price < 500) {
//     console.log("price is lesser than 500");
// }
// else if(price === 500) {
//     console.log("price is equal to 500");
// }
// else {
//     console.log("price is greater than 500");
// }

// output:- price is greater than 500






// checking multiple condition

// const isLoggedIn = true
// const userHasCard = true

// if (isLoggedIn && userHasCard) {
//     console.log("user is allowed to do shopping");
// } else {
//     console.log("user is not allowed to do shopping");
// }

// output:- user is allowed to do shopping


// we can give many conditions for and(&&) for or(||) 
