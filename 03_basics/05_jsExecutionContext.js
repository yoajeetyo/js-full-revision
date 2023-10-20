// JavaScript Execution Context

// Means whatever js files we created how it will run
// JS code runs in 2 phase


// Global Execution Context
// whenever we will give js to execute program, first Global Execution Context is created (it will get created any how)
// this keyword is refering to the GEC

// browsers this value and node js this value is different
// browsers this value is window object
// js is single-threaded, everything execute under a thread


// Functional Execution Context



// In some documentation like Mongoos there is one more execution context which is Eval Execution Context which is one of the property of GEC







// js program runs in two phases
// 1) Memory Creation Phase or Creation Phase (to allocate the memory for variables)(+, - or any expression is not evaluated)
// 2) Execution Phase 

// for the understanding we will take one example

// let val1 = 10
// let val2 = 5

// function addNum(num1, num2) {
//     let total = num1 + num2
//     return total
// }

// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)


// Steps of execution
// 1) Global Execution Context or Global Environment got executed and reffered it with this keyword

// 2) Memory phase (takes all the variables and store it in memory),
    // in this phase, all the variables store undefined eg:- val1 = undefined, val2 = indefined
    // function will hold defination  eg:- addNum = defination
    // because result1 and result2 is variable so it will also hold undefined eg:- result1 = undefined, result2 = undefined

// 3) Execution Phase
    // val1 = 10
    // val2 = 5
    // for addNum() nothing will happen it already holds defination
    // when we call addNum(val1, val2) function, then again all steps repeat(step-2 and step-3) (for any function call same thing happens)
    // for addNum(val1, val2) function call execution steps
        // Memory Phase
            // num1 = undefined
            // num2 = undefined
            // total = undefined
        //execution context (in this phase all the calculation or data manipulation or expression happen)
            // num1 = 10
            // num2 = 5
            // total = 15
            // at last total will be returned to global executional context(this) and delete all the memory occupied in the process of function execution
    // result1 = 15
    // now addNum(10, 2)  function will be called (for this function step-2 and step-3 will repeat again)
    // for addNum(10, 2) function call execution steps
        // Memory Phase
            // num1 = undefined
            // num2 = undefined
            // total = undefined
        //execution context (in this phase all the calculation or data manipulation or expression happen)
            // num1 = 10
            // num2 = 2
            // total = 12
            // at last total will be returned to global executional context(this) and delete all the memory occupied in the process of function execution
    // result2 = 12














//++++++++++++++++++++++++++++++++++++++++ call stack +++++++++++++++++++++++++++++++++++++++++++++++++++++
// it follows LIFO(Last In First Out model)

// suppose, if there is a program which has 2 functions
// while executing the program first it will create a Global Execution Context
    // then execute the function in order
    // to execute first function stack memory will be allocated 
    // after execution memory get deleted
    // next, to execute second function stack memory will be allocated 
    // after execution memory get deleted



// Nested function execution
// suppose if there is a parent function and it has child function and grand child function
// while executing the program first it will create a Global Execution Context
// then parent function will get stack memory to execute function
// then  child function will get stack memory
// at last grand child will get stack memory
// as we know stack follows LIFO rule 
// so first  grand childs execution get completed and removed from stack
// then childs execution get completed and removed from stack
// then at last parent will get executed and then it will also get removed from stack memory






// to see practically
// go to chrome
// inspect
// snippet
// create new snipet (anyName.js)
// write code 
// 

