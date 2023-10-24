// map() function

// suppose we want to add 10 in all the elements in an number array

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let newArr = arr.map((val) => {return val + 10})
// console.log(newArr);


// output:- [
        // 11, 12, 13, 14, 15,
        // 16, 17, 18, 19, 20
        // ]





// ++++++++++++++++++++++++++++++++++++++ method chaining +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if we wan to use multiple method on same object, then we can use method chaining


// first multiply all element with 10(map) then add 1(map) in each element, then return all the element which is >= 40 (filter)
// const arr = [1,2,3,4,5,6,7,8,9,10]
// let newArr = arr
//                 .map((val) => {return val * 10})
//                 .map((val) => {return val + 1} )    // next chained method always performed operation previuos returned value
//                 .filter((val) => {return val >= 40}) // next chained method always performed operation previuos returned value

// console.log(newArr);


// output:- [
        // 41, 51,  61, 71,
        // 81, 91, 101
        // ]








