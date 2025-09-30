let form = document.querySelector('.user-form');
console.log(form);
let email = document.querySelector('#email');
let password = document.querySelector('#password');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const getEmail = localStorage.getItem(JSON.stringify(email.value));
    console.log(getEmail);
    if (getEmail !== null) {
        localStorage.setItem('logged', JSON.stringify(email.value));
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
});
export {};
//# sourceMappingURL=login.js.map