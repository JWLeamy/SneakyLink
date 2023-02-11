const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pageRoutes = require('./pageRoutes');
const linkRoutes = require('./linkRoutes');

router.use('/users', userRoutes);
router.use('/pages', pageRoutes);
router.use('/links', linkRoutes);

module.exports = router;
