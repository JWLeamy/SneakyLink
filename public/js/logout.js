
const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successfully logged out, redirect to the logout page
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// Clicking the logout button will sign the user out of their active session
$('#logout').click(logout);
