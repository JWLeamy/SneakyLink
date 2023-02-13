// make the password box red until they have put in at least 8 characters
let userPassForm = $('#password');
userPassForm.keydown(function () {
    if (userPassForm.val().trim().length < 8) {
        userPassForm.css('border', '2px solid #e31507');
    } else {
        userPassForm.css('border', '2px solid #02bd3a');
    }
});

// when the user presses sign up
$('#submit').click((event) => {
    event.preventDefault();
    console.log('submit clicked');

    const userEmail = $('#email').val().trim();
    const userPass = $('#password').val().trim();
    const userName = $('#username').val().trim();

    if (userEmail || userPass || userName) {
        const newUser = {
            email: userEmail,
            password: userPass,
            username: userName,
        };
        console.log(newUser);
        storeNewUser(newUser);
    } else {
        $('#alert')
            .html(`<div class="alert alert-dark alert-dismissible fade show d-flex justify-content-center align-items-center p-0 py-2 m-0 position-relative" role="alert">
      <p class="p-0 m-0">Required field left blank!</p>
      <button type="button" class="btn-close p-0 top-50 translate-middle" style="right:0.5em">
      </button>
      </div>`);
        $('.btn-close').click(function () {
            $('.alert').alert('close');
        });
    }
});

const storeNewUser = async (userInfo) => {
    console.log('register fetch');
    const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        $('#alert')
            .html(`<div class="alert alert-dark alert-dismissible fade show d-flex justify-content-center align-items-center p-0 py-2 m-0 position-relative" role="alert">
      <p class="p-0 m-0">Invalid Email or Password!</p>
      <button type="button" class="btn-close p-0 top-50 translate-middle" style="right:0.5em">
      </button>
      </div>`);
        $('.btn-close').click(function () {
            $('.alert').alert('close');
        });
    }
};
