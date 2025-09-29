
let form = document.querySelector('.user-form') as HTMLFormElement;

console.log(form);

let email = document.querySelector('#email') as HTMLInputElement;

let password = document.querySelector('#password') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let loginData = {
        email: email.value,
        password: password.value,
    };
    console.log(loginData);
})