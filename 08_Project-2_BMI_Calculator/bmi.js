const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    if (height == "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter valid height ${height}`
    }
    else if (weight == "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter valid weight ${weight}`
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
})