//route to create pages
const router = require('express').Router();
const Page = require('../../models/Pages');
const User = require('../../models/User');

router.get('/', (req, res) => {});

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.session.user_id },
        });
        console.log(user);

        const page = await Page.create({
            user_id: user.id,
            url_1: req.body.url,
        });
        res.status(200).json(page);
    } catch (err) {
        res.json(err).status(500);
    }
});

module.exports = router;
