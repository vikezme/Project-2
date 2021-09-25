const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedItems = require('./item-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();
    