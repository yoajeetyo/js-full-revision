// pushing array inside an array

// const marvel_heros = ['Iron Man', 'Captain America', 'Spider Man', 'Thor']
// const dc_heros = ['Super Man', 'Bat Man', 'Flash', 'Wonder Women']

// // we will push dc_heros inside marvel_heros
// // this is not a good way to adding data inside an array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // [ 'Iron Man', 'Captain America', 'Spider Man', 'Thor', [ 'Super Man', 'Bat Man', 'Flash', 'Wonder Women' ] ]
// console.log(marvel_heros[4]); // [ 'Super Man', 'Bat Man', 'Flash', 'Wonder Women' ]
// console.log(marvel_heros[4][1]); // Bat Man


// we can use concat() method to combine two array into one single array
// we do not use concat() method frequently
// const marvel_heros = ['Iron Man', 'Captain America', 'Spider Man', 'Thor']
// const dc_heros = ['Super Man', 'Bat Man', 'Flash', 'Wonder Women']
// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);// [ 'Iron Man', 'Captain America', 'Spider Man', 'Thor', 'Super Man', 'Bat Man', 'Flash', 'Wonder Women' ]



// spread operator (this is used frequently to concate two or more arrays)
// const marvel_heros = ['Iron Man', 'Captain America', 'Spider Man', 'Thor']
// const dc_heros = ['Super Man', 'Bat Man', 'Flash', 'Wonder Women']
// const all_heroes = [...marvel_heros, ...dc_heros]
// console.log(all_heroes);// [ 'Iron Man', 'Captain America', 'Spider Man', 'Thor', 'Super Man', 'Bat Man', 'Flash', 'Wonder Women' ]



// converting complex array in 1-D simple array using flat() function (this function is very rarely used)
// const arr =  [1,2,3,[4,5,6],7,8,[9,[10,11,12]]]
// const one_D_Array = arr.flat(Infinity)  // in the place of Infinity we can pass the level (like 1 or 2 or 3) of the array till we want a conversion
// console.log(one_D_Array); // [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12 ]


// while doing data-scraping
// to check if it is an array or not
// console.log(Array.isArray("Ajeet")); // false
// // to convert into an array
// console.log(Array.from("Ajeet")); // [ 'A', 'j', 'e', 'e', 't' ]

//if we will pass an object
// console.log(Array.from({name : "Ajeet"})); // it will return empty array because we need to specify whether we want an arry of key or value



// converting individual variables to array 
// let score1 = 100
// let score2 = 200
// let score3 = 300
// let score4 = 400
// console.log(Array.of(score1, score2, score3, score4)); // [ 100, 200, 300, 400 ]   (we can pass any type of element)


