
let regBtn = document.getElementById("register-btn");

let formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);

    let name = formData.get("name");
    let email = formData.get("email");
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
        alert("password length is between (5 - 8) and must contain at least one capital, small and digit");
        return false;
    } 
    if(name === "" || email === "" || userName === "" || password === "") {
        alert("Please complete the required field");
        return false;
    }
    
    const userData = {
        name: name,
        email: email,
        userName: userName,
        password: password
    };
    
    const saveData = JSON.parse(localStorage.getItem(email.toString()));
    if(saveData && saveData.email === userName) {
        alert("This email name is taken");
        return false;
    }
    localStorage.setItem(email.toString(), JSON.stringify(userData));
    
    console.log(name, email, userName, password);
    window.location.href = "login.html";
});
