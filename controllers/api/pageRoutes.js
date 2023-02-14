//route to create pages
const router = require('express').Router();
const Page = require('../../models/Pages');
const User = require('../../models/User');

router.get('/all', async (req, res) => {
    try {
        const allPages = await Page.findAll({
            where: { username: req.session.username },
        });
        res.status(200).json(allPages);
    } catch (err) {
        console.log(err);
    }
});
router.get('/', async (req, res) => {
    try {
        // const page = await Page.findByPk({ id: req.params.id });
        // res.status(200).json(allPages);
        // const page = Page.findOne({
        //     where: { username: req.session.username },
        //     order:sequelize.literal(
        // });
        // const page_id = Page.max('id', {
        //     where: { username: req.session.username },
        // });
        console.log(req.session.username);
        const page = await Page.findAll({
            limit: 1,
            where: { username: req.session.username },
            order: [['id', 'DESC']],
        });
        console.log(page);
        res.send(JSON.stringify(page));
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
        const page = await Page.create({
            // username: user.username,
            username: req.session.username,
            // title: req.body.title,
            // desc: req.body.desc,
            // url_1: req.body.url,
        });
        res.status(200).json({ message: 'page created' });
    } catch (err) {
        res.json(err).status(500);
    }
});

module.exports = router;
