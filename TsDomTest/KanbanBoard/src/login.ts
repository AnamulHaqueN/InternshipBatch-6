
let form = document.querySelector('.user-form') as HTMLFormElement;

console.log(form);

let email = document.querySelector('#email') as HTMLInputElement;


let password = document.querySelector('#password') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const getEmail = localStorage.getItem(JSON.stringify(email.value));
    console.log(getEmail);
    

    if(getEmail !== null) {
        localStorage.setItem("login", JSON.stringify(email.value));
        window.location.href = "board.html";
    }
    else {
        alert("please enter a valid email");
    }
   
    // let loginData = {
    //     email: email.value,
    //     password: password.value,
    // };
    // console.log(loginData);
})