// singleton object or object using constructor

// const myObjectAsLiterals = {} // non-singleton object
// const myObjectAsConstructor = new Object() // singleton object

// // there is no difference between both the object only difference is one is singleton and another one is non-singleton
// // when we print both object we will get same result

// console.log(myObjectAsLiterals); // {}
// console.log(myObjectAsConstructor); // {}


// object inside an object
// const regularUser = {
//     email : "abc@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Ajeet",
//             lastname : "Singh"
//         }
//     }
// }

// //accessing firstname
// console.log(regularUser.fullname.userfullname.firstname); // Ajeet



// merging multiple objects as single object
// const obj1 = {1 : "A", 2 : "B"}
// const obj2 = {3 : "C", 4 : "D"}

// this way is not recommended
// const obj3 = {obj1, obj2} // worst way (it will put obj1 and obj2 inside obj3)
// console.log(obj3); // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

// this way is also not recommended but sometimes it is used
// here first argument is target and other all are source means all the objects are going in first object only
// const obj3 = Object.assign( obj1, obj2 )
// console.log(obj3); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// this way is better way and recommended but not much in use, btw {} is optional parameter but better to give
// here first argument is target and other all are source means all the objects are stored in first object which is {}
// const obj3 = Object.assign( {}, obj1, obj2 )
// console.log(obj3); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// best way is spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }


// when objects are coming from database (from database values always comes as an array)
// const users = [
//     {
//         id : 1,
//         email : "abc@gmail.com"
//     },
//     {
//         id : 2,
//         email : "def@gmail.com"
//     },
//     {
//         id : 3,
//         email : "ghi@gmail.com"
//     },
//     {
//         id : 4,
//         email : "jkl@gmail.com"
//     },
// ]

// inside array there are so many objects data and we want to loop through or we want to print values
//console.log(users[1].email) // def@gmail.com (it will return 1 index email in array)






// suppose we want all the keys or values of object as an array
// const regularUser = {
//     id : 1,
//     name : "Ajeet",
//     isLoggedIn : false
// }

// // to get all keys
// console.log(Object.keys(regularUser)); // [ 'id', 'name', 'isLoggedIn' ]

// // to get all the values
// console.log(Object.values(regularUser)); // [ 1, 'Ajeet', false ]

// // to get all entries (keys and values)
// console.log(Object.entries(regularUser)); // [ [ 'id', 1 ], [ 'name', 'Ajeet' ], [ 'isLoggedIn', false ] ]  (return arrays of array of key and values)


// // to check whether a given property is present in the object or not
// console.log(regularUser.hasOwnProperty('isLoggedIn')); // true
// console.log(regularUser.hasOwnProperty('isLoggedOut')); // false






//+++++++++++++++++++++++++++++++++++++++++++++++++ Destructuring of an Object +++++++++++++++++++++++++

// const course = {
//     courseName : "JavaScript in Hindi",
//     courseInstructor : "Ajeet",
//     courseFees : "Rs. 999"
// }

//(suppose if we want to get courseInstructor)
//first way of destructuring
// console.log(course.courseInstructor); // Ajeet  (if we want to use this courseInstrictor then we need to write course.courseInstructor multiple time)

// // second way (in this way we will destructure courseInstructor from course object and store in one variable and we can use the varible where ever requires )
// const {courseInstructor} = course
// console.log(courseInstructor); // Ajeet (here we do not needs to write course.courseInstructor every time)

// if we found courseInstructor as large name, then we can give it a short name and use it
// const {courseInstructor : instructor} = course
// console.log(instructor); // Ajeet







// Data coming from backend or server is in the form of JSON (JavaScript Object Notation) (Key, value form both are string)
// JSON data
// {
//     "name" : "Ajeet",
//     "age" : 24,
//     "isLoggedIn" : false
// }



// mostly api calls are coming in JSON formate but sometimes it comes in xml or in the form of array of objects
// [
//     {},
//     {},
//     {},
//     {}
// ]

















