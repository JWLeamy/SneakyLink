const router = require('express').Router();
const user = require('../../models/User.js');

router.post('/', async (req, res) => {
    try {
        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

            // socials: [req.body.socials],
        });
        res.status(200).json({
            user: newUser,
            message: 'you have succesfully signed up!',
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//         const real = await User.findByPk(req.params.id);
//         if (!real) {
//             res.status(400).json({ message: 'couldnt find that user' });
//             return;
//         } else {
//             res.status(200).json(real);
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
