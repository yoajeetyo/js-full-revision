// Immeadiately Invoked Function Expressions(IIFE)

// suppose if there is a file where database connection code written, 
// and we want when our program execute this database connection code ececute immediately, then we use iife


// sometime globel scope pollution happen (when we access some global values inside function then some problem occur)
//to avoid this global pollution, we use iife (we write function inside () and we call as well immediately)


// normal way to define and call a function
// function funcOne (){
//     console.log(`DB CONNECTION CREATED`);
// }

// funcOne() // DB CONNECTION CREATED



// IIFE way to define and call the function
// named-iife

// (function func1() {
//     console.log(`DB CONNECTION CREATED`);
// }) (); //DB CONNECTION CREATED

// IIFE function call should end with semi colon otherwise writing another IIFE function will give error because JavaScript does not terminate IIFE function automatically



// we can write IIFE function as an Arrow function as well
// un-named iife

// (() => {
//     console.log(`DB CONNECTION CREATED`);
// }) (); //DB CONNECTION CREATED




// parameterized IIFE

// ((name) =>{
//     console.log(`My name is ${name}`);
// }) ("Ajeet"); // My name is Ajeet








