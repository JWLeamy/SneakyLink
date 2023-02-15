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
            where: { username: req.session.username },
        });
        console.log(link);
        res.status(400).json(link);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/submit', async (req, res) => {
    console.log(req.body)
})

//need to implement a bulk creation method
/* router.post('/', async (req, res) => {
    console.log(req.session.username);
    console.log(`req body: ${req.body}`);
    var body = req.body;
    for (let x in req.body) {
        console.log(x);
        body[x].username = req.session.username;
    }
    console.log(JSON.stringify(body));

    try {
        const link = await Link.bulkCreate(body);

        res.status(200).json({ message: 'link created' });
    } catch (err) {
        res.json(err).status(500);
    }
}); */

// router.post('/', async (req, res) => {
//     console.log(req.session.username);
//     try {
//         const link = await Link.create({
//             username: req.session.username,
//             type: req.body.type,
//             url: req.body.url,
//         });
//         res.status(200).json({ message: 'link created' });
//     } catch (err) {
//         res.json(err).status(500);
//     }
// });

module.exports = router;
