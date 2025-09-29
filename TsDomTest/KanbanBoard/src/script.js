var form = document.querySelector('.user-form');
var firstName = document.querySelector('#first-name');
console.log(firstName);
var lastName = document.querySelector('#last-name');
console.log(lastName);
var email = document.querySelector('#email');
console.log(email);
var password = document.querySelector('#password');
console.log(password);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    };
    console.log(userData);
});
