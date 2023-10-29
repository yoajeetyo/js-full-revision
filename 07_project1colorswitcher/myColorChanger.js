const buttons = document.querySelectorAll(".button")
// console.log(buttons);
const body = document.querySelector("body")
// console.log(body);




// ++++++++++++++++++++++++++++++++++++++++++++++++++ events ++++++++++++++++++++++++++++++++++++++++++++++
// moving cursor is an event
// clicking button is an event
// closing a tab is an event
// submitting a page is also an event

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === "grey") {
            // body.style.backgroundColor = "grey"   // we can do hardcoding also
            body.style.backgroundColor = e.target.id
        }

        else if (e.target.id === "white") {
            // body.style.backgroundColor = "white"   // we can do hardcoding also
            body.style.backgroundColor = e.target.id
        }

        else if (e.target.id === "blue") {
            // body.style.backgroundColor = "blue"   // we can do hardcoding also
            body.style.backgroundColor = e.target.id
        }

        else if (e.target.id === "yellow") {
            // body.style.backgroundColor = "yellow"   // we can do hardcoding also
            body.style.backgroundColor = e.target.id
        }

        else if (e.target.id === "purple") {
            // body.style.backgroundColor = "purple"   // we can do hardcoding also
            body.style.backgroundColor = e.target.id
        }
    })
});

