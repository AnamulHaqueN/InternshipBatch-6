
const form = document.querySelector('.user-form') as HTMLFormElement;


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const firstName = document.querySelector('#first-name') as HTMLInputElement;
  const lastName = document.querySelector('#last-name') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;

  const valEmail = localStorage.getItem(JSON.stringify(email.value));
  console.log(valEmail);
  if(valEmail !== null) {
    alert("This email is already used");
    return;
  }
  else {
    let registerData = {
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value
    }
    console.log(registerData);
    // const getName: string[] = JSON.parse(localStorage.getItem('userName') || '[]');
    // getName.push(firstName.value);
    // localStorage.setItem("userName", JSON.stringify(getName));

    localStorage.setItem(JSON.stringify(email.value), JSON.stringify(registerData));
    window.location.href = "login.html";
  }
  form.reset();
});



