const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const itemRoutes = require('./item-routes');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/items',itemRoutes);

module.exports = router;