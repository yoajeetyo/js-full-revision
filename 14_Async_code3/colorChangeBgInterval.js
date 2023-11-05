// After clicking on Start, Background color of the web-page should change continiousley in the given time interval
// when we click on Stop it should stop changing


// generate a random color

const randomColor = function () {
    const hexValues = "0123456789ABCDEF";  // hex value is 0 to 9 and a to f, total 16
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)]
        
    }
    return color;
};

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let bgColor;



const startChangingColor = function () {
    if (!bgColor) {
        bgColor = setInterval(startChangingBgColor, 1000)
    }

    function startChangingBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function () {
   clearInterval(bgColor)
    bgColor = null
}

start.addEventListener("click", startChangingColor)

stop.addEventListener("click", stopChangingColor)

