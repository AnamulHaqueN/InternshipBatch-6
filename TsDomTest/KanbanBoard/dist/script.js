const form = document.querySelector('.user-form');
const firstName = document.querySelector('#first-name');
console.log(firstName);
const lastName = document.querySelector('#last-name');
console.log(lastName);
const email = document.querySelector('#email');
console.log(email);
const password = document.querySelector('#password');
console.log(password);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    };
    console.log(userData);
});
export {};
//# sourceMappingURL=script.js.map