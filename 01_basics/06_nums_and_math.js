// const score = 400 // it is automatically taken as number type (premitive)
// console.log(score);


// // we can specifically define the number (object type)
// const accountBalance = new Number(500);
// console.log(accountBalance);



// converting number to string

// const accountBalance = new Number(500);
// const numberToString = accountBalance.toString();
// console.log(numberToString);
// console.log(typeof numberToString); // string
// console.log(typeof accountBalance); // object

// // benefits of converting numbers to string is we can use methods of string as well

// console.log(numberToString.length);


// toFixed() method (it is used to fix the floating point number)
// const accountBalance = new Number(500);
// console.log(accountBalance); // 500
// const fixedFloatingBalance = accountBalance.toFixed(2);
// console.log(fixedFloatingBalance); // 500.00



// toPrecision() (it return only total precise  digit value passed in toPrecision() function, it will give priority before the decimal value)
// const num1 = 100.567;
// const precisedNum1 = num1.toPrecision(4);
// console.log(precisedNum1); // 100.6 (number will be of 4 digit only )
// const num2 = 10.567;
// const precisedNum2 = num2.toPrecision(4);
// console.log(precisedNum2); // 10.57 (number will be of 4 digit only )
// const num3 = 1100.567;
// const precisedNum3 = num3.toPrecision(4);
// console.log(precisedNum3); // 1101 (number will be of 4 digit only )
// const num4 = 1111100.567;
// const precisedNum4 = num4.toPrecision(4);
// console.log(precisedNum4); // 1.111e+6 (number will be of 4 digit only )


// toLocaleString() method  (it will provide  , to improve readability, by default Indian standard of reading)
// const num = 10000000000;
// const usStandardOfReading = num.toLocaleString();
// console.log(usStandardOfReading);
// // to convert into US standard of reading a number we need to pass en-US into the toLocaleString() function
// const indianStandardOfReading = num.toLocaleString("en-US");
// console.log(indianStandardOfReading);


//to get Mxaimum number
// const maxNum = Number.MAX_VALUE;
// console.log(maxNum);

// to get minimum number
// const minNum = Number.MIN_VALUE;
// console.log(minNum);

// to take max safe integer value
// const maxSafeInt =Number.MAX_SAFE_INTEGER
// console.log(maxSafeInt);


// to take min safe integer value
// const minSafeInt =Number.MIN_SAFE_INTEGER
// console.log(minSafeInt);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++


// Math is a default Object inside JavaScript where there are so many methods to do operations
// if we will write below statement  in console of browser then we will get so many methods and properties of Math object
// console.log(Math);

// // to get the PI value
// console.log(Math.PI); // 3.141592653589793

// // to get square root of 2
// console.log(Math.SQRT2); // 1.4142135623730951

// // to get absolute values (for example absolute value of -4 is 4, absolute value of 4 is 4)
// console.log(Math.abs(-4)); // 4
// console.log(Math.abs(4)); // 4
// console.log(Math.abs(-4.98)); // 4.98
// console.log(Math.abs(4.98)); // 4.98


// to round off we have round() function
// console.log(Math.round(4.3)); // 4 
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.499)); // 4
// console.log(Math.round(4.5)); // 5


// to get the ceiling and floor value
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.9)); // 4



// to get the min and max values in given numbers
// console.log(Math.min(1, 0, -8, 8)); // -8
// console.log(Math.max(1, 0, -8, 8)); // 8





// to print rendom numbers we have random() function in Math 
// console.log(Math.random()); //it will generate random numbers between 0 and 1

// generating random number in the fixed range
// between 0 to 10
// console.log(Math.random()*10);

// random number between 1 to 10
// console.log((Math.random()*10) + 1);

//to print the floor value in the range of 1 to 10
// console.log(Math.floor((Math.random()*10)+1));

// we can define particular range (10 to 20)
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random()*(max - min +1))+min); // VVVVI




