// filter() method in js

// const names = ["Ajeet", "Ram", "Shyam", "Jay"]

// const allName = names.forEach((name) => {return name})
// console.log(allName);

// Output:- undefined


// Because forEach() function does not return anything we need to use filter() function



// const nums = [4, 16, 5, 7, 10, 34, 56]

// const allNum = nums.filter((num) => {return num > 10})
// console.log(allNum);

// Output:- [ 16, 34, 56 ]



// If we want to do same work using forEach() method, we need to use more logic

// const nums = [4, 16, 5, 7, 10, 34, 56]
// const newNums = []

// nums.forEach((num) => {
//     if (num > 7) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// Output:- [ 16, 10, 34, 56 ]




// take complex example of Array of objects and do complex operations

// const books = [
//     {
//         title : "Book-1",
//         genre : "History",
//         publish : 1990,
//         edition : 2005
//     },
//     {
//         title : "Book-2",
//         genre : "Ethics",
//         publish : 2005,
//         edition : 2020
//     },
//     {
//         title : "Book-3",
//         genre : "Civics",
//         publish : 1600,
//         edition : 1980
//     },
//     {
//         title : "Book-4",
//         genre : "Science",
//         publish : 2004,
//         edition : 2019
//     },
//     {
//         title : "Book-5",
//         genre : "Fiction",
//         publish : 1785,
//         edition : 1998
//     },
//     {
//         title : "Book-6",
//         genre : "History",
//         publish : 1200,
//         edition : 1500
//     }
// ]


// we want to get  all the  books whose genre is History

// let book = books.filter((bk) => {return bk.genre === "History"})
// console.log(book);

// output:- [
        // { title: 'Book-1', genre: 'History', publish: 1990, edition: 2005 },
        // { title: 'Book-6', genre: 'History', publish: 1200, edition: 1500 }
        // ]


// we want to get  all the  books whose genre is History and publish date is before 1800

// let book = books.filter((bk) => {return bk.genre === "History" && bk.publish < 1800})
// console.log(book);

// output:- [{ title: 'Book-6', genre: 'History', publish: 1200, edition: 1500 }]








