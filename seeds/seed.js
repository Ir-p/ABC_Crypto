// use sequelize to populate DB
const userSeeds = require('./userSeeds');
const linkSeeds = require('./linkSeeds');
const commentSeeds = require('./commentSeeds');

// DB connection
const sequelize = require('../config/connection');

// define function to call all seeds
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n+ DB Sync\'d...\n');
  
  await userSeeds();
  console.log('+ User table populated...\n');

  await linkSeeds();
  console.log('+ Link table populated...\n');

  await commentSeeds();
  console.log('+ Comment table populated...\n');

  process.exit(0);
};

// invocation
seedAll();