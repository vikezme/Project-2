const { Item } = require('../models');

const itemData = [
  {
    title: 'Strawberry',
    description: 'Fresh strawberries are available at Second Valley, Amont 2 kg',
    category_id: 4,
    user_id: 1,
  },
  {
    title: 'Oranges',
    description: 'Fresh organges are available at Flinders Ranges, 10 pcs ',
    category_id: 4,
    user_id: 2,
  },
  {
    title: 'Woolen Jumpers',
    description: 'Hand knitted woolen jumpers, pastal pink and blue, AU medium siz, 2 pcs ',
    category_id: 3,
    user_id: 3
  },
  {
    title: 'Curry leaves',
    description: 'Freshly picked, 10 bunches at Edwardstown. ',
    category_id: 2,
    user_id: 1,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;