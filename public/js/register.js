//wasnt sure what to keep here
//js for handling registration

const storeNewUser = (userInfo) => {
  console.log("register fetch");
  return fetch("/api/users/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
};
//added improvements on this function 
const registerUser = () => {
  const userEmail = document.querySelector("#email");
  const userPass = document.querySelector("#password");
  const userName = document.querySelector("#username");
  const newUser = {
    email: userEmail.value,
    password: userPass.value,
    name: userName.value,
  };
  storeNewUser(newUser).then(() => {
    window.location.replace("/");
  });
};
/////////////////////////////////////////////////////////
const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

// document
//   .querySelector("#registerButton")
//   .addEventListener("click", registerUser);

  document.addEventListener("DOMContentLoaded", function() {
    document
    .querySelector("#registerButton")
    .addEventListener("click", registerUser);
    document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

  });