const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// To me, it seems like home routes might just be used to pull up general pages (landing, login, register)
// We should be using the API routes for getting specific things, such as once the user is logged in to get their profile page based on their ID, or to make post, put, and delete requests

// ON PAGE LOAD ROUTE: I think we want to check if the user is logged in, then send them to the profile page, otherwise, render the landing page.

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("landingPage");
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
// route for logging in a user
router.post('/login', withAuth, (req, res) => {
    try {
        res.render('homepage');
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

router.post('/register', withAuth, (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/logout", (req, res) => {
  try {
    res.render("logout", { layout: "main" });
  } catch (err) {
    console.log(err);
    res.status(404);
  }

});

// I COPIED THE ORIGINAL GET route for '/' BELOW, IN CASE WE WANT TO USE THINGS FROM IT LATER.

// router.get('/', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findAll({
//             attributes: { exclude: ['password'] },
//             order: [['name', 'ASC']],
//         });

//         const users = userData.map((project) => project.get({ plain: true }));

//         res.render('homepage', {
//             users,
//             // Pass the logged in flag to the template
//             logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
