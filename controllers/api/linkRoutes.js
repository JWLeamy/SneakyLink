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
        console.log(err);
    }
});
router.get('/', async (req, res) => {
    try {
        // const link = await Link.findByPk({ id: req.params.id });
        // res.status(200).json(allLinks);
        // const link = Link.findOne({
        //     where: { username: req.session.username },
        //     order:sequelize.literal(
        // });
        // const link_id = Link.max('id', {
        //     where: { username: req.session.username },
        // });
        console.log(req.session.username);
        const link = await Link.findAll({
            limit: 1,
            where: { username: req.session.username },
            order: [['id', 'DESC']],
        });
        console.log(link);
        // res.send(JSON.stringify(link));
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log(req.session.username);
    try {
        // const user = await User.findOne({
        //     where: { username: req.session.username },
        // });
        // console.log(user);
        // console.log(req.body.title);
        const link = await Link.create({
            // username: user.username,
            username: req.session.username,
            // title: req.body.title,
            // desc: req.body.desc,
            // url_1: req.body.url,
        });
        res.status(200).json({ message: 'link created' });
    } catch (err) {
        res.json(err).status(500);
    }
});

module.exports = router;
