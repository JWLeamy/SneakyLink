const router = require('express').Router();
const User = require('../../models/User');

router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the posted e-mail address
        console.log(req.body);
        const userData = await User.findOne({
            where: { email: req.body.email },
        });

        if (!userData) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again',
            });
            return;
        }

        // Verify the posted password with the password store in the database
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again',
            });
            return;
        }

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
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
            // socials: [req.body.socials],
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.json({ message: 'You are now registered !' });
        });
    } catch (err) {
        res.status(400).json({ message: 'couldnt register user' });
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
