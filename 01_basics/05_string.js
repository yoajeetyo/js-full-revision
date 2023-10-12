// we can write strings inside '' or ""

// const name = "Ajeet";

// const repoCount = 50;

// //console.log(name + repoCount + " Value");


// // Using Back-tick(also known as String Interpolation, modern way of printing)
// console.log(`My name is ${name} and my repo count is ${repoCount}`);

//benifits of string interpolation is we can do many things on the go like we can write ${name.toUpperCase()} easily

// we can create string in object way 

//const subjectName = new String('IT');
// console.log(subjectName);

// // in this way of creating a string, will store characters in key values like indexes are keys and characters are value to each index
// // 0 : 'I'
// // 1 : 'T'
// // benefits are we will get lots of inbuilt methods to string manipulation
// // we can access the single character of this string object

// // console.log(subjectName[0], subjectName[1]);

// // we can access the proto of the string object using __proto__

// console.log(subjectName.__proto__); // proto is {} which is an object, this proto is not empty if we see in browsers console

// // lets find the length and change IT in lower case
// console.log(subjectName.toLowerCase()); // it (toLowerCase() is a function)
// console.log(subjectName.length); // 2 (length is a keyword)

// to find the character at particular index
// console.log(subjectName.charAt(1)); // T

// // to find the index of a particular character
// console.log(subjectName.indexOf('I')); // 0 (it will always return the first character present in string)

// to find the last character present in string
// const name = "Ajeet Kumar Singh"
// console.log(name.lastIndexOf('e')); // 3 (first e is present at 2 index but it will return last e index which is 3)

// dividing string to sub-string
// const name = "Ajeet Kumar Singh"
// const firstName = name.substring(0,5);
// console.log(firstName); // Ajeet

// we can get substring as slice (here we can give -ve values as well, if we will give -ve values then it will strat from reverse)
// const name = "Ajeet Kumar Singh"
// const lastName = name.slice(-5,17); 
// const middleName = name.slice(-11,-6); 
// const firstName = name.slice(0,-12); 
// console.log(lastName); // Singh
// console.log(middleName); // Kumar
// console.log(firstName); // Ajeet



//we can also give -ve value in substring also but it will ignore it and take it from 0th index



// trim() method (it is used to remove extra spaces given from user mostly at the begining or at the end)
// const firstNameWithSpaces = "     Ajeet     ";
// const firstNameWithoutSpaces = firstNameWithSpaces.trim(); // to remove spaces from begining and end of string
// console.log(firstNameWithSpaces);
// console.log(firstNameWithoutSpaces);
// const firstNameNoBeginSpace = firstNameWithSpaces.trimStart();// to remove spaces from begining of string
// console.log(firstNameNoBeginSpace);
// const firstNameNoEndSpace = firstNameWithSpaces.trimEnd(); // to remove spaces from end of the string
// console.log(firstNameNoEndSpace);



// replace() method (to replace one value to another value)
// const name ="Ajeet Kumar Singh";
// console.log(name);
// const nameReplace = name.replace('e','i'); // it will replace only first e with i in the string
// console.log(nameReplace);
// const nameReplaceAll = name.replaceAll('e','i'); // it will replace all e with i in the string
// console.log(nameReplaceAll);

// we mostly use replace method to modify urls
// const url ="http://google.com/ajeet%20singh";
// console.log(url);
// const correctUrl = url.replace("%20", "kumar");
// console.log(correctUrl);





// includes() method (to check whether the sub-string is present in a particular string or not)(always returns boolean values)
// const url ="http://google.com/ajeet%20singh";
// console.log(url);
// const isInclude1 = url.includes("ajeet");
// console.log(isInclude1); // true
// const isInclude2 = url.includes("kumar");
// console.log(isInclude2); // false



// convert string to array on the base of any character(we can take spaces as well)
// const myName ="Ajeet-Kumar-Singh";
// console.log(myName);
// const myNameSplit = myName.split("-");
// console.log(myNameSplit);







