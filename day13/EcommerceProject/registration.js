
let regBtn = document.getElementById("register-btn");

let formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);

    let name = formData.get("name");
    let userName = formData.get("user-name");
    let password = formData.get("password");

    let n = password.length;
    let capital = false, small = false, digit = false;
    for(i of password) {
        if(i >= 'a' && i <= 'z') small = true;
        if(i >= 'A' && i <= 'Z') capital = true;
        if(i >= '0' && i <= '9') digit = true;
    }
    if(!(n >= 5 && n <= 8) || !capital || !small || !digit) {
        alert("password length is between (5 - 8) and must contain at least one capital, small and digit")
    } 
    if(!name || !userName || !password) {
        alert("Please complete the required field");
    }

    console.log(name, userName, password);
});
