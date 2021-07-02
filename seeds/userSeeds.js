// import models
const { User } = require('../models');

// sample users
const sample_users = [
  {
    first_name: 'Sam',
    last_name: 'Taylor',
    username: 'sam',
    password: 'Password1'
  },
  {
    first_name: 'Rob',
    last_name: 'Spencer',
    username: 'rob',
    password: 'Password2'
  },
  {
    first_name: 'Richard',
    last_name: 'Thomas',
    username: 'richard',
    password: 'Password3'
  },
  {
    first_name: 'Eric',
    last_name: 'Crawford',
    username: 'eric',
    password: 'Password4'
  }
];

// create and insert sample user data
const userSeeds = () => User.bulkCreate(sample_users, {
  individualHooks: true
});

// export
module.exports = userSeeds;