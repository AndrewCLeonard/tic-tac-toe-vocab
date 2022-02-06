const router = require('express').Router();

// player routes
const playerRoutes = require('./player-routes');

router.use('/players', playerRoutes);

module.exports = router;