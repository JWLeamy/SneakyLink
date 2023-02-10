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

