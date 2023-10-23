// Array specific loops
// mostly from API's and Database we will get Arrays or Array of Objects so in that situation we will use these loops

// ["", "", "", ""]

// [{}, {}, {}, {}]


// for of loop   (Array, object, String)

// syntax :-

// for (const iterator of object) {    
// }

// iterator will iterate the object, string or array
// in place of object we can write string, object or array



// const arr =[1, 2, 3, 4, 5, 6, 7, 8]

// for (const num of arr) {
//     console.log(num);
// }



// for of loop on String
// const greeting = "Hello World!"
// for (const greet of greeting) {
//     console.log(`Each character in greeting string is: ${greet}`);
// }





// Map

// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.
// key is always unique

// const map =  new Map();
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("FR", "France")
// map.set("ESPN", "Spain")
// map.set("IN", "India")    // it wont print india again
// console.log(map);

// Output:- Map(4) {
        //   'IN' => 'India',
        //   'USA' => 'United States of America',
        //   'FR' => 'France',
        //   'ESPN' => 'Spain'
        // } 






// destructuring of Map using for of

// const map =  new Map();
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("FR", "France")
// map.set("ESPN", "Spain")
// map.set("IN", "India")    // it wont print india again

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }



// Output:- IN :- India
        // USA :- United States of America
        // FR :- France
        // ESPN :- Spain








// destructuring of object using for of loop wont work in this way

// const hero = {
//     h1 : "Superman",
//     h2 : "Batman"
// }

// for (const [key, value] of hero) {
//     console.log(key, ":-", value);
// }

// Output:- Error (hero is not iterable) (we need to use different way to iterate object)



