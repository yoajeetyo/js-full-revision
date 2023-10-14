// Arrays (it stores collection of multiple variables in a single variable)
// In JavaScript Arrays are resizable
// Arrays are zero based indexing

// we write array elements inside square bracket []
// we can take same datatypes element or different datatype elements in array in JavaScript
// we can store Arrays inside an Array
//const myArray = [0, 1, 2, 3, 4, "Ajeet", true]


// Array uses Shallow copy means if we assign one array to another array then it will give the reference of the real array object
// if we do any operation on the second array then it will reflect in the original or first array as well(heap)
// Deep copy means (it does not share the reference of the original object)(used by primitive datatype while copying)


// first way of declaring an Array
// const myArray = [0, 1, 2, 3, 4]
// const myHeros = ["Shaktiman", "Naagraj"]
// console.log(myArray); // [ 0, 1, 2, 3, 4 ]
// console.log(myHeros[0]); // Shaktiman

// Second way of declaring an Array
// const myArray2 = new Array(1, 2, 3, 4); // in this way we do not write square bracket
// console.log(myArray2); // [ 1, 2, 3, 4 ]
// console.log(myArray2[1]); // 2





// Array methods


// push() (to add one element in the Array at last index) 
// const myArray = [0, 1, 2, 3, 4]
// console.log("before adding : ",myArray); // before adding :  [ 0, 1, 2, 3, 4 ]
// myArray.push(5)
// myArray.push(6)
// console.log("after adding : ",myArray); // after adding :  [ 0, 1, 2, 3, 4, 5, 6 ]


// pop() method (it will not take any argument, it will remove last element in an array)
// const myArray = [0, 1, 2, 3, 4, 5]
// myArray.pop()
// console.log(myArray); // [ 0, 1, 2, 3, 4 ]


// unshift() method (to insert the value at first index)
// it will move all the element to one index further
// this method is very rarely in use
// const myArray = [0, 1, 2, 3, 4, 5]
// myArray.unshift(6)
// console.log(myArray); // [ 6, 0, 1, 2, 3, 4, 5 ]


//shift() method (to remove element from the first index) (it does not take any argument)
// it will shift all the remaining elements one index behind
// const myArray = [0, 1, 2, 3, 4, 5]
// myArray.shift()
// console.log(myArray); // [ 1, 2, 3, 4, 5 ]



// include() (to check whether the given element is present in array or not)
// const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray.includes(9)); // false
// console.log(myArray.includes(4)); // true


// indexOf()  it will return the index of given element in an Array, if element not present in array it will return -1
// const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray.indexOf(9)); // -1
// console.log(myArray.indexOf(4)); // 4


// join()  (if we will do join then it will return string not array)
// const myArray = [0, 1, 2, 3, 4, 5]
// const newArray = myArray.join()
// console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myArray); // object
// console.log(newArray); // 0,1,2,3,4,5
// console.log(typeof newArray); // string




// slice(start, end) (needs to pass range inside this method) 
// range will be start to (end - 1)
// slice() does not manipulate original array
// const myArray = [0, 1, 2, 3, 4, 5]
// const slicedArray = myArray.slice(2, 5)
// console.log("Original array : ",myArray); // Original array :  [ 0, 1, 2, 3, 4, 5 ]
// console.log("Sliced array : ",slicedArray); // Sliced array :  [ 2, 3, 4 ]


// splice(start, end)  (needs to pass range inside this method) 
// range will be start to end
// splice() will manipulate original array
// const myArray = [0, 1, 2, 3, 4, 5]
// const splicedArray = myArray.splice(2, 5)
// console.log("Original array : ",myArray); // Original array :  [ 0, 1 ]
// console.log("Spliced array : ",splicedArray); // Spliced array :  [ 2, 3, 4, 5 ]









