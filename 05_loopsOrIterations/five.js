// forEach loop
// we pass a call back function (no name function) in forEach loop


// const names = ["Ajeet", "Ram"]

// names.forEach(function (name) {
//     console.log(name);
// })

// Output:- Ajeet
        // Ram




// we can use arrow function as call back function

// const names = ["Ajeet", "Ram"]

// names.forEach( (name) => {
//     console.log(name);
// })

// Output:- Ajeet
        // Ram






// we can pass the reference of a function as call back function
// const names = ["Ajeet", "Ram"]

// function printName(names) {
//     console.log(names);
// }

// names.forEach(printName)

// Output:- Ajeet
        // Ram






// we can pass element, index, array aswell in return back function parameter inside forEach loop
// const names = ["Ajeet", "Ram"]
// names.forEach((name, index, arr) => {
//     console.log(name, index, arr);
// })


// output:- Ajeet 0 [ 'Ajeet', 'Ram' ]
        //  Ram 1 [ 'Ajeet', 'Ram' ]









// objects inside array

// const myObj = [
//     {
//         name : "Ajeet",
//         age : 22,
//     },
//     {
//         name : "Ram",
//         age : 24,
//     }
// ]

// myObj.forEach((item) => {
//     console.log(item.name, item.age);
// })



// output:- Ajeet 22
    //      Ram 24
