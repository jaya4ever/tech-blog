const { User } = require('../models');

const userData = [
  {
    username: 'Jayasingh',
    password: 'test1'
    
  },
  {
    username: 'jaya16',
    password: 'test2'
  },
  {
    username: 'jayarav',
    password: 'test3'
  }
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;