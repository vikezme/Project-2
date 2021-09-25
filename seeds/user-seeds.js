const { User } = require('../models');

const userData = [
  {
    username: 'tay123',
    email: 'tay@gmail.com',
    password : 'password123',
  },
  {
    username: 'vikrant123',
    email: 'vikranth@gmail.com',
    password : 'password123',
  },
  {
    username: 'vish123',
    email: 'v.opatha@gmail.com',
    password : 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;