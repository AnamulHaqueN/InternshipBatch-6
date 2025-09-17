let loginBtn = document.getElementById("login-btn");
let formElement = document.querySelector("form");

// const username = formData.get("user-name");
//console.log(formData);

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);

    let email = formData.get("email");
    let password = formData.get("password");
    //console.log(email, password);
    if(email == "" || password == "") {
        alert("Please must filled the required field before submit");
        return false;
    }
    
    const saveData = JSON.parse(localStorage.getItem(email));
    if(saveData.email === email && saveData.password === password) {
        window.location.href = "index.html";
    }

});

loginBtn.addEventListener("click", ()=> {
    console.log("login btn was clicked");
});
