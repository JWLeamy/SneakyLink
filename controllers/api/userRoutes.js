const router = require('express').Router();
const User = require('../../models/User');

// FYI routes on this page will be preceeded by '/api/users'. This is helpful to know when designing our helpers in public JS folder, so that we can make the fetch calls to the right place.

// route for handling the login click (we will run a script at the bottom of the login page using a public JS helper, which on click of the login button will perform a post fetch that passes the users email and password in the body)
router.post('/login', async (req, res) => {

  try {
    // Find the user who matches the requested username
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        res.status(400).json({
            message: 'Incorrect username or password',
        });
        return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
        req.session.user_id = userData.username;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'Logged In!' });
    });
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});



router.post('/register', async (req, res) => {
    console.log('this is the register route' + req.body.name);
    const { name, email, password } = req.body;
    console.log(name, email, password);
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.json({ message: 'You are now registered !' });
        });
    } catch (err) {
        res.status(400).json({ err });
    }
});

router.get('/register', async (req, res) => {
    //going to change this to /:id param at some point
    try {
        const real = await User.findAll();
        if (!real) {
            res.status(400).json({ message: 'couldnt find that user' });
            return;
        } else {
            res.status(200).json(real);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
