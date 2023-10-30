const clock = document.querySelector("#clock")


// we have a method which runs in a given interval of time automatically 
// (first parameter is any function , second parameter is time interval which is in mili second, 1000 mili second is 1 second)

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)