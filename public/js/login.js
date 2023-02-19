$('#login').click(async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const username = $('#username').val().trim();
    const password = $('#password').val().trim();

    if (username && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/${username}`);
        } else {
            $('#alert')
                .html(`<div class="alert alert-dark alert-dismissible fade show d-flex justify-content-center align-items-center p-0 py-2 m-0 position-relative" role="alert">
      <p class="p-0 m-0">Incorrect Username or Password!</p>
      <button type="button" class="btn-close p-0 top-50 translate-middle" style="right:0.5em">
      </button>
      </div>`);
            $('.btn-close').click(function () {
                $('.alert').alert('close');
            });
        }
    } else {
        $('#alert')
            .html(`<div class="alert alert-dark alert-dismissible fade show d-flex justify-content-center align-items-center p-0 py-2 m-0 position-relative" role="alert">
      <p class="p-0 m-0">Username or Password blank!</p>
      <button type="button" class="btn-close bs-light p-0 top-50 translate-middle" style="right:0.5em">
      </button>
      </div>`);
        $('.btn-close').click(function () {
            $('.alert').alert('close');
        });
    }
});
