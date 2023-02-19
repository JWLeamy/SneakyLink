const router = require('express').Router();
const { User, Link } = require('../models');
const withAuth = require('../utils/auth');


// ON PAGE LOAD ROUTE: If user is logged in,  send them to the profile page, otherwise, render the landing page.
router.get('/', withAuth, async (req, res) => {
    try {
        res.render('landingPage');
    } catch (err) {
        res.status(500).json(err);
    }
});


// route for when the user clicks the login button from the landing page
router.get('/login', withAuth, (req, res) => {
    try {
        res.render('userLogin');
    } catch (err) {
        res.status(500).json(err);
    }
});


// route for when the user clicks the register button from the landing page
router.get('/register', withAuth, (req, res) => {
    try {
        res.render('userRegistration');
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to view user profiles. Users will only be able to edit their own profiles, not others
router.get('/:username', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.username);
        const userLinks = await Link.findAll({ where: { username: req.params.username } });
        // get just the data we want from the find all (which returns a large object containing a lot of random things) by mapping it
        const plainUserLinks = userLinks.map(el => el.dataValues)
        // convert the array plainUserLinks to an object whose keys are the type of link that that the object is.
        function mapToObj(inputMap) {
          let obj = {};
      
          inputMap.forEach(function(value, key){
            key = value.type;
            obj[key] = value
          });

          return obj;
        }

        const plainUserLinksObject = mapToObj(plainUserLinks);

      if (req.params.username === req.session.username) {
        res.render('userProfile', { layout: "main", userData: userData.get({ plain: true }), userLinks: plainUserLinksObject });
      } else {
        res.render('sharedProfile', { layout: "main", userData: userData, userLinks: plainUserLinksObject });
      }
    } catch (err) {
      console.log(err);
      res.status(404);
    }
});

//Route to access settings page. Where users can update, add, or delete their own links 
router.get('/:username/update-profile', async (req, res) => {
  try {
      const userData = await User.findByPk(req.params.username);
      const userLinks = await Link.findAll({ where: { username: req.params.username } });
      const plainUserLinks = userLinks.map(el => el.dataValues)

      function mapToObj(inputMap) {
        let obj = {};
    
        inputMap.forEach(function(value, key){
          key = value.type;
          obj[key] = value
        });

        return obj;
      }

      const plainUserLinksObject = mapToObj(plainUserLinks);
      
    if (req.params.username === req.session.username) {
      res.render('updateProfile', { layout: "main", userData: userData.get({ plain: true }), userLinks: plainUserLinksObject});
    };
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});



module.exports = router;
