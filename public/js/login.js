const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = $('#username').val().trim();
  const password = $('#password').val().trim();

  console.log(username, password)
  console.log(typeof username)

  if (username && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // do we want the unique identifier to be username, or a randomly generated userID? I think username could be nice, as we can then direct the route to /user/{username}
    if (response.ok) {
      // here we will want to provide location.replace the route to the users profile. If we make the username the unique identifier, then we just have to check that the post above
      // returns an ok response, then we can use the username they just provided inside of template literals to send the window to the route. (which the router will handle and pull up that users
      // profile with)
      console.log(response)
      // if we want to generate a unique ID for the user as the unique identifier, then we will want our login post route to return the userID that gets created its response, then use it
      // to replace the window.
      // document.location.replace(`/api/users/${username}`);
    } else {
      $("#alert")
        .html(`<div class="alert alert-dark alert-dismissible fade show d-flex justify-content-center align-items-center p-0 py-2 m-0 position-relative" role="alert">
      <p class="p-0 m-0">Incorrect username or password</p>
      <button type="button" class="btn-close p-0 top-50 end-0 translate-middle">
      </button>
      </div>`);
      $(".btn-close").on("click", function () {
        $(".alert").alert("close");
      });
    }
  } else {
    $("#alert")
      .html(`<div class="alert alert-dark alert-dismissible fade show d-flex justify-content-center align-items-center p-0 py-2 m-0 position-relative" role="alert">
      <p class="p-0 m-0">Incorrect username or password</p>
      <button type="button" class="btn-close p-0 top-50 end-0 translate-middle">
      </button>
      </div>`);
    $('.btn-close').on('click', function() {
      $('.alert').alert('close')
    });
  };
};

$('#login').on('click', loginFormHandler);

