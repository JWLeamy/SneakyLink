const router = require('express').Router();
const userRoutes = require('./userRoutes');
const registerRoutes = require('./registerRoute');

router.use('/users', userRoutes);
router.use('/register', registerRoutes);

module.exports = router;
