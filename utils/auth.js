const withAuth = (req, res, next) => {
    console.log(req.session.logged_in);
    if (req.session.logged_in) {
        // Send the user to the user profile if they are logged in!
        res.redirect(`${req.session.username}`);
    } else {
        // If the user isn't logged in, redirect them to the login route
        next();
    }
};

module.exports = withAuth;
