//route to create links
const router = require('express').Router();
const Link = require('../../models/link');
const User = require('../../models/User');

router.get('/', async (req, res) => {
    try {
        const allLinks = await Link.findAll({
            where: { username: req.session.username },
        });
        res.status(200).json(allLinks);
    } catch (err) {
        res.status(200).json(err);
        console.log(err);
    }
});
router.get('/', async (req, res) => {
    try {
        console.log(req.session.username);
        const link = await Link.findAll({
            limit: 1,
            where: { username: req.session.username },
            order: [['id', 'DESC']],
        });
        console.log(link);
        res.status(400).json(link);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
//need to implement a bulk creation method
router.post('/', async (req, res) => {
    console.log(req.session.username);
    try {
        const link = await Link.bulkCreate([
            {
                username: req.session.username,
            },
        ]);
        res.status(200).json({ message: 'link created' });
    } catch (err) {
        res.json(err).status(500);
    }
});

router.post('/', async (req, res) => {
    console.log(req.session.username);
    try {
        const link = await Link.create({
            username: req.session.username,
            type: req.body.type,
<<<<<<< Updated upstream
=======
            url: req.body.url,
>>>>>>> Stashed changes
        });
        res.status(200).json({ message: 'link created' });
    } catch (err) {
        res.json(err).status(500);
    }
});

module.exports = router;
