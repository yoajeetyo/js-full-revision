// falsy values

// A falsy value is a value that is considered false when encountered in a Boolean context 
// There are only six falsey values in JavaScript: undefined , null , NaN , 0 (-0, BigInt 0n) , "" (empty string), and false



// A truthy value is a value that is considered true when encountered in a Boolean context
// "0", "false", " ", [], {}, function(){}





// checking if user has email or not
// const userEmail = "xyz@gmail.com"
// if (userEmail) {
//     console.log("User has gmail");
// } else {
//     console.log("User does not have gmail");
// }

// output:- User has gmail





// in the array of users email checking if there is any email or not
// const userEmails = []
// if (userEmails.length === 0) {
//     console.log("There is no email in array");
// } else {
//     console.log("Email array is not empty");
// }

//output:- There is no email in array






// checking for an empty object
// const obj1 = {}

// if (Object.keys(obj1).length === 0) {
//     console.log("Object is empty");
// } else {
//     console.log("obect is not empty");
// }

// output:- Object is empty     (because Object.keys(obj1) will return array of keys so we can calculate length of an array using length keyword)






// flase == 0  will give output true
// flase == ""  will give output true
// flase == undefined  will give output true
// flase == NaN  will give output true
// flase == null  will give output true






// ++++++++++++++++++++++++++++++++++++++++++ Nullish Coalescing +++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??): null or undefined
// everything we will see here only on two keywords null and undefined




// let val1;
// val1 = 5 ?? 10   // val1 get assigned either 5 or 10
// console.log(val1); // 5



// sometimes when we call database or use fire-base or app-writer, we dont get direct response, we will get two values
    // there are chances like we get null response or undefined(means no response)
    // in that case whole code structure can get disturbed
    // for that specific case we use Nullish Coalescing, so that we can assign the response coming and adjust the code on 
    // the basis of the response





    // let val1;
    // val1 = null ?? 10 
    // console.log(val1); // 10

// Nullish Coalescing operator will check the safety, maybe it is a possibality, some code wont run on the null

// let val1;
// val1 = undefined ?? 10 
// console.log(val1); // 10

// if any other response coming rather than null and undefined the it will get that response and run code on the basis of response
// if only null or undefined coming then it will run the code on the basis of null or undefined 



// let val1;
// val1 = undefined ?? 10 ?? 20
// console.log(val1); // 10  (always takes first response)



// +++++++++++++++++++++++++++++++++++++++++++++++++++ ternary operator ++++++++++++++++++++++++++++++++++++++++++++
// ternary operator and Nullish Coalescing operator are different

// ternary operator works as shorthand of if-else 

// condition ? true : false


// const productPrice = 100
// productPrice < 100 ? console.log("Product price is lesser than 100") : console.log("Product price is equal to or greater than 100");

// output:-
    // Product price is equal to or greater than 100




