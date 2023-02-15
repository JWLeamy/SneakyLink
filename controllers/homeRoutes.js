const router = require('express').Router();
const { User, Link } = require('../models');
const withAuth = require('../utils/auth');

// To me, it seems like home routes might just be used to pull up general pages (landing, login, register)
// We should be using the API routes for getting specific things, such as once the user is logged in to get their profile page based on their ID, or to make post, put, and delete requests

// ON PAGE LOAD ROUTE: I think we want to check if the user is logged in, then send them to the profile page, otherwise, render the landing page.
router.get('/', withAuth, async (req, res) => {
    try {
        res.render('landingPage');
    } catch (err) {
        res.status(500).json(err);
    }
});

// route for when the user clicks the login button from the landing page
// I added withAuth so that If the user somehow tries to go to the login page while being logged in, this should be a catch which would re-direct them to the profile page
router.get('/login', withAuth, (req, res) => {
    try {
        res.render('userLogin');
    } catch (err) {
        res.status(500).json(err);
    }
});

// route for when the user clicks the register button from the landing page
// again, adding the withAuth so that if the user is already logged in, they cannot access the sign up page.
router.get('/register', withAuth, (req, res) => {
    try {
        res.render('userRegistration');
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:username', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.username);
        const userLinks = await Link.findAll({ where: { username: req.params.username } });
        console.log(typeof userLinks)
      if (req.params.username === req.session.username) {
        res.render('userProfile', { layout: "main", userData: userData.get({ plain: true }), userLinks: userLinks });
      } else {
        res.render('sharedProfile', { layout: "main", userData: userData, userLinks: userLinks });
      }
    } catch (err) {
      console.log(err);
      res.status(404);
    }
});


/* router.get('/setting/:username', async (req, res) => {

    try {
        const userData = await User.findByPk(req.params.username);
        const userLinks = await Link.findAll({ where: { username: req.params.username } });
        console.log(typeof userLinks)
      if (req.params.username === req.session.username) {
        res.render('updateProfile', { layout: "main", userData: userData.get({ plain: true }), userLinks: userLinks });
      } 
    } catch (err) {
      console.log(err);
      res.status(404);
    }
}); */



router.get('/logout', (req, res) => {
    try {
        res.render('logout');
    } catch (err) {
        console.log(err);
        res.status(404);
    }
});


module.exports = router;
