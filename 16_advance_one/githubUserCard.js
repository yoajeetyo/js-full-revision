const requestUrl = "https://api.github.com/users/yoajeetyo"
const xhr = new XMLHttpRequest()
xhr.open("GET", requestUrl)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(data.id);
    }
}

xhr.send();
console.log("hi");