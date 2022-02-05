const router = require('express').Router();

const userRoutes = require('./player-routes');

router.use('/users', userRoutes);

module.exports = router;