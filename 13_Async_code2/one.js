// If we will click on start it should start printing local time in every 1 second
// If we click on stop it should stop printing

// for this we will use setInterval() and clearInterval() function




let time = document.querySelector("#time")
const start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let interval;

let localTime = () => {
    let date = new Date();
    let localTime = date.toLocaleTimeString()
    time.innerText = `${localTime}`
}

let localTime1 = function () {
    interval = setInterval(localTime, 1000);
}


start.addEventListener("click", localTime1)

stop.addEventListener("click", function () {
    clearInterval(interval);
    console.log("stopped");
})

