const router = require('express').Router();
const User = require('../../models/User');


// Route for handeling login
router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the requested username
        const userData = await User.findOne({
            where: { username: req.body.username },
        });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect username or password' });
            return;
        }

        // Verify the posted password with the password store in the database
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password' });
            return;
        }

        // Create session variables based on the logged in user
        // req.session.save(() => {
            console.log(userData.username)
        req.session.username = userData.username;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'Logged In!' });
        // });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Route for handeling logout
router.post('/logout', (req, res) => {
    console.log('logout route');
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Route for handeling register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password);

        const newUser = await User.create({
            username: username, //: req.body.username,
            email: email, //: req.body.email,
            password: password, //: req.body.password,
        });
        console.log(newUser);
        // req.session.save(() => {
        req.session.username = newUser.username;
        req.session.logged_in = true;
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).send(err);
    }
});



module.exports = router;
