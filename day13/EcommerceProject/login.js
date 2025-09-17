let loginBtn = document.getElementById("login-btn");
let formElement = document.querySelector("form");

// const username = formData.get("user-name");
//console.log(formData);

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);

    let username = formData.get("user-name");
    let password = formData.get("password");
    if(username == "" || password == "") {
        alert("Please must filled the required field");
        return false;
    }
    console.log(username, password);
});

loginBtn.addEventListener("click", ()=> {
    console.log("login btn was clicked");
});
