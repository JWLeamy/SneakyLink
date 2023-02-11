const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (!req.session.logged_in) {
    next();
  } else {
    // Send the user to the user profile if they are logged in!
    res.redirect('/homepage');
  }
};

module.exports = withAuth;
