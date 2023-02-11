// wasnt sure what to keep here
// js for handling registration

let userEmail = $('#email');
let userPass = $('#password');
let userName = $('#username');

$('#submit').click((event) => {
    event.preventDefault();
    console.log('submit clicked');
    const newUser = {
        email: userEmail.val(),
        password: userPass.val(),
        name: userName.val(),
    };
    console.log(newUser);
    storeNewUser(newUser);
});

const storeNewUser = async (userInfo) => {
    console.log('register fetch');
    const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('error creating user profile');
    }
};
