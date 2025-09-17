
let regBtn = document.getElementById("register-btn");

let formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
    console.log("hello");
    e.preventDefault();
    let formData = new FormData(formElement);

    let name = formData.get("name");
    let userName = formData.get("user-name");
    let password = formData.get("password");

    console.log(name, userName, password);
});

regBtn.addEventListener("click", ()=> {
    console.log("Registration btn was clicked");
});