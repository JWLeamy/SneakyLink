//route for creating links
//all of these routes are going to need to access the page id that the link should be added to
const Link = require('../../models/Links');
const router = require('express').Router();

router.get('/', (req, res) => {});
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { page_id, url } = req.body;
        const link = await Link.create({
            username: req.session.username,
            page_id: page_id,
            url: url,
        });
        res.status(200).json(link);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
