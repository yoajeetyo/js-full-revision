// variables assign the space into the memory

const accountId = 144553
let accountEmail = "demo@gmail.com"
var accountPassword = "12345"
/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Jaipur"
/*
This way of variable declaration is also not preferred
*/

// accountId = 12345           // we can not change the constant value further it will throw error
console.log("Account Id:",accountId);

accountEmail = "changed@gmail.com"
console.log("Account email:",accountEmail);

accountPassword = "7890"
console.log("Account Password:",accountPassword);

accountCity = "Bengaluru"
console.log("Account City:",accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity])
// it will print data in the form of table and take index as whole number

let accountState;
console.log(accountState);

