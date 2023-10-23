// for loop


// syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];  
// }


// how for loop executes
// 1) initialization (it happens only once at the begining of loop)
// 2) condition checking
// 3) if condition is true then it will execute for loop scope{} code, if condition is false then exit from for loop
// 4) increment or decrement
// 5) then again condition checking
// 6) if condition is true then it will execute for loop scope{} code, if condition is false then exit from for loop
// 7) step 2 and 3 will repeat until condition become false



// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element); 
// }

//console.log(element);
// we can not access the index or elemet outside loop because, it is local for the loop 





// we can provide conditions inside loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
    
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

//Output:-      0
            // 1
            // 2
            // 3
            // 4
            // 5 is best number
            // 5
            // 6
            // 7
            // 8
            // 9






//loops inside loop (we can access outer loop elements inside innser loops)
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop element: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop element: ${j}, Outer loop element inside inner loop ${i}`);
        
//     }
    
// }







// printing tables of 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`\nTable of ${i}:\n`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);    
//     } 
// }






// Array element printing using loop
// const nameArray = ["Ajeet", "Ram", "Jeevan", "Shyam"]
// for (let index = 0; index < nameArray.length; index++) {
//     const element = nameArray[index];
//     console.log(element);
// }

// if we will try to print the element which is out of bound in array, it will return undefined  for those elements (in js ArrayIndexOutOfBoundError not present)





// break and continue
// if we want to go out of control flow or loop we use break keyword
// suppose if we find 5 then we will stop the execution and comes out of loop
// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log(`we found element 5`);
//         break     
//     }
//     console.log(element);
// }





// if we want to skip particular iteration
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log(`iteration 5 skipped`);
//         continue
//     }
//     console.log(`value of index is ${index}`);
    
// }












