let loginBtn = document.getElementById("login-btn");
let formElement = document.querySelector("form");

// const username = formData.get("user-name");
//console.log(formData);

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);

    let username = formData.get("user-name");
    let password = formData.get("password");
    console.log(username, password);
    if(username == "" || password == "") {
        alert("Please must filled the required field before submit");
        return false;
    }
});

loginBtn.addEventListener("click", ()=> {
    console.log("login btn was clicked");
});
