
const form = document.querySelector('.user-form') as HTMLFormElement;

const firstName = document.querySelector('#first-name') as HTMLInputElement;
console.log(firstName);

const lastName = document.querySelector('#last-name') as HTMLInputElement;
console.log(lastName);

const email = document.querySelector('#email') as HTMLInputElement;
console.log(email);

const password = document.querySelector('#password') as HTMLInputElement;
console.log(password);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  console.log(userData);
});



