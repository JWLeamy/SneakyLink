const router = require('express').Router();
const userRoutes = require('./userRoutes');
const linkRoutes = require('./linkRoutes');

router.use('/users', userRoutes);
router.use('/links', linkRoutes);

module.exports = router;
