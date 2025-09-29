const form = document.querySelector('.user-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valEmail = localStorage.getItem(JSON.stringify(email.value));
    console.log(valEmail);
    if (valEmail !== null) {
        alert("This email is already used");
        return;
    }
    else {
        let registerData = {
            firstName: firstName.value,
            lastName: lastName.value,
            password: password.value
        };
        console.log(registerData);
        localStorage.setItem(JSON.stringify(email.value), JSON.stringify(registerData));
        window.location.href = "login.html";
    }
    form.reset();
});
export {};
//# sourceMappingURL=registration.js.map