const { Category } = require('../models');

const categoryData = [
  {
    name: 'Other',
  },
  {
    name: 'Vegitables',
  },
  {
    name: 'Clothing',
  },
  {
    name: 'Fruits',
  },
  {
    name: 'Art and Craft',
  },
  {
    name: 'Entertainment',
  },
  {
    name: 'Homegoods',
  },
  {
    name: 'Sporting Goods',
  },
  {
    name: 'Toys',
  },
  {
    name: 'Garden and Outdoors',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;