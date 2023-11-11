// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, 
// it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. 
// The possible outcomes here are similar to that of promises in real life.

// examples of promises :- cryptographic operations, file system, network request...etc.



// Promise has 3 states :-
    // 1) pending : initial state (neither fulfilled nor rejected)
    // 2) fulfilled :
    // 3) rejected : 



// before Promise we do async task with the help of libraries, queue or blueBird 
// using these library we can use all the functionality back then like .fetch, .then, .catch, ...etc. we are using now
// now it is integrated into core js, it is coming by default, no need to install 

// there are two parts of Promise  1) Creation 2) Consumptions
// Most of the time we consume the promises, sometimes we also creates promises

// Promise takes a callback function with two parameters (resolve, reject)
// callback hell is nothing but callback inside callback multiple times
// promises creation:-

// const promiseOne = new Promise(function (resolve, reject) {
//     // here we write async task (db calls, cryptography, network call ...etc.)
//     // but here we use setTimeout async task
//     setTimeout(() => {
//         console.log("Async task is created");
//         resolve();    // we need to call resolve() method so that promise is consumed properly
//     }, 4000);
// });

// // promise is created above, now we will consume promise
// // .then() has connection with resolve parameter in promise callback function
// // .then() takes a function

// promiseOne.then(function () {
//     console.log("Promise consumed");
// })






// above all the codes(29-44) we can write in another way, no need to store promise in variable

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task 2 created");
//         resolve()
//     }, 2000);
// }).then(function () {
//     console.log("Promise consumed");
// })







// create a promise and send some data(here object) while creation and recieve in .then()
// we can send data using resolve()

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name : "Ajeet", email : "abc@example.com"})
//     }, 2000);
// })

// promiseThree.then(function (dataFromPromise) {
//     console.log(dataFromPromise);
// })







// handling condition based error using .then() and writing cleanup code using .finally()
// reject() is used to handle error (.catch() is directly related to reject()) 
// promise chaining (below line second .then() consumes the value of first .then())

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false
//         if (!error) {
//             resolve({name : "Ajeet", age : 22})
//         } else {
//            reject("Error: Something went wrong !!!"); 
//         }
//     }, 2000);
// })

// promiseFour
// .then(function (data) {
//     console.log(data);
//     return data.name;
// })
// .then(function (name) {
//     console.log(name);
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(function () {
//     console.log("Either .then() or .catch() executed");
// })











// consuming promise using async, await 
// use of try, catch block

// const promiseFive = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         const error = false
//         if (!error) {
//             resolve({name : "Kumar", age : 30})
//         } else {
//             reject("Error: Something went wrong !!!")
//         }
//     }, 2000);
//  })

// async function consumePromiseFive() {
//     try {
//         const resolvedData = await promiseFive
//         console.log(resolvedData);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()





// we can use any of the way to consume promise either async, await or .then(), .catch()












// we will make api request using github api data
// using async, await

// async function gettingAPIData() {
//     try {
//         const requestUrl = "https://api.github.com/users/yoajeetyo"
//         const response = await fetch(requestUrl) // getting response from api takes some time so needs to write await
//         const data = await response.json()    // converting data to json also takes some time so needs to write await
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// gettingAPIData()







// we will make api request using github api data
// using .then and .catch

// fetch("https://api.github.com/users/yoajeetyo")
// .then(function (response) {
//     return response.json()
// })
// .then(function (data) {
//     console.log(data);
// })
// .catch(function () {
//     console.log("Error: Something went wrong !!!");
// })

