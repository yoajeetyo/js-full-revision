// Dates

// let myDate = new Date();
// console.log(myDate);

// to convert into String
// let myDate = new Date();
// console.log(myDate.toString()); // converts into little bit more readable

// some more methods in Date object (we can use based on our requirements)
// let myDate = new Date();
// console.log(myDate.toDateString()); // Sat Oct 14 2023
// console.log(myDate.toLocaleDateString()); // 14/10/2023
// console.log(myDate.toISOString()); // 2023-10-14T05:35:26.264Z
// console.log(myDate.toJSON()); // 2023-10-14T05:36:00.675Z
// console.log(myDate.toLocaleString()); // 14/10/2023, 11:07:08 am
// console.log(myDate.getFullYear()); // 2023
// console.log(myDate.getDate()); // 14



// type of Date is object
// let myDate = new Date();
// console.log(typeof myDate); // object




// to declare a specific date
//let myCreatedDate = new Date(2023, 0, 23); // (0 is for January)
//console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 

// // we can provide more information like time (hour , minute, second)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am


// we can provide another date formate 
// let myCreatedDate = new Date("2023-01-31"); // here month starts with 01
// console.log(myCreatedDate.toLocaleString()); // 31/1/2023, 5:30:00 am

// we can provide another date formate 
// let myCreatedDate = new Date("01-12-2022"); // here month starts with 01
// console.log(myCreatedDate.toLocaleString()); // 12/1/2022, 12:00:00 am






// Time Stamp (we can use it in KBC to calculate fastest finger ans)
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1697263328956 (mili second value calculated from 1st january 1970)



// when we want to get time in mili second from a particular date
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.getTime());

//to convert time into seconds
//console.log(Math.floor(Date.now()/1000));




// let newDate = new Date()
// console.log(newDate.getMonth()); // 9  (because date starts from 0 so 9 is October month)
// console.log(newDate.getDay());  // 6 (because it starts from 1(Monday) so 6 is Saturday)


// we can do string interpolation inside back tick while printing we will get the format we want




// one very important method of Date object where we can do lots of manipulations 
//(toLocaleString() we can define many parameters inside this method and are objects )
// first parameter(which internationalization we want here we are using default)
// second parameter is object where we can define what we want
// let newDate = new Date()
// let getWeekDay = newDate.toLocaleString('default', {
//     weekday : "long"
// })
// console.log(getWeekDay); // Saturday

