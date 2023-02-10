//wasnt sure what to keep here
//js for handling registration


let userEmail = 'test@test.com';
let userPass = 'test';
let userName = 'test';

const storeNewUser = (userInfo) => {
    console.log('register fetch');
    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    });
};

const registerUser = () => {
    const newUser = {
        // email: userEmail.value,
        // password: userPass.value,
        // name: userName.value,
        email: userEmail,
        password: userPass,
        name: userName,
    };
    storeNewUser(newUser).then(() => console.log('new user stored'));
};
/////////////////////////////////////////////////////////
const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

