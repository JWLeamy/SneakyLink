//route to create pages
const router = require('express').Router();
const Page = require('../../models/Pages');
const User = require('../../models/User');

router.get('/', async (req, res) => {
    try {
        const allPages = await Page.findAll();
        res.status(200).json(allPages);
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    console.log(req.session.username);
    try {
        const user = await User.findOne({
            where: { username: req.session.username },
        });
        console.log(user);

        const page = await Page.create({
            username: user.username,
            // url_1: req.body.url,
        });
        res.status(200).json(page);
    } catch (err) {
        res.json(err).status(500);
    }
});

module.exports = router;
