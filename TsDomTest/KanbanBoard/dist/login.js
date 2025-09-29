let form = document.querySelector('.user-form');
console.log(form);
let email = document.querySelector('#email');
let password = document.querySelector('#password');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let loginData = {
        email: email.value,
        password: password.value,
    };
    console.log(loginData);
});
export {};
//# sourceMappingURL=login.js.map