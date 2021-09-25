const router = require('express').Router();
const {Category, Item} = require('../../models')

// GET all categories
router.get('/', async (req, res) => {
  const categoryData = await Category.findAll();
  res.status(200).json(categoryData);
});

module.exports = router;