// setTimeout() :- this function is coming from Browser API(see in Window object), It is not a core javascript function
// this function takes (annonymous handler function, time in milisecond)
// it runs only once after given time

// setTimeout(() => {
//     console.log("Setting timeout of 4 second");
// }, 4000);




// we can also declare anonymous function saperately and pass the referance into the setTimeout() function

// const timeout = () => {console.log("Setting timeout of 5 second");}

// setTimeout(timeout, 5000);




// we will change the text of h1 element after 5 second

// const changeText = () => {
//     const h1 = document.querySelector('h1')
//     h1.innerText = "inner text changed after 5 second"
// }

// setTimeout(changeText, 5000);






// we will set an event on the button tag if we click on button before 5 second then, h1 text will not change otherwise it will change

// const changeText = () => {
//     const h1 = document.querySelector('h1')
//     h1.innerText = "inner text changed after 5 second"
// }

// const timeOut = setTimeout(changeText, 5000);

// const btn = document.querySelector("#stop")
// btn.addEventListener("click", function () {
//     clearTimeout(timeOut)
//     console.log("Stopped");
// })






// setInterval() :- doing a task in continious interval(again and again)






