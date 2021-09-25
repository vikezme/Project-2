const router = require('express').Router();

const itemsRoutes = require('./itemsRoutes');

router.use('/items', itemsRoutes);

module.exports = router;
